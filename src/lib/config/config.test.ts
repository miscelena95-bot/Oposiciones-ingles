import { describe, expect, it } from "vitest";
import { getConvocatoria, getTemario, listarConvocatorias } from "./index";

const sumar = (xs: number[]) => Math.round(xs.reduce((a, b) => a + b, 0) * 1000) / 1000;

describe.each(listarConvocatorias())("convocatoria %s", (id) => {
  const c = getConvocatoria(id);
  const pp = c.primera_prueba;

  it("es válida según el esquema y tiene su temario", () => {
    expect(getTemario(c).temas.length).toBeGreaterThan(0);
  });

  it("los pesos de la parte A suman su nota máxima", () => {
    expect(sumar(pp.parte_a.ejercicios.map((e) => e.peso))).toBe(pp.parte_a.nota_maxima);
  });

  it("las subpartes de cada ejercicio suman el peso del ejercicio", () => {
    for (const e of pp.parte_a.ejercicios.filter((e) => e.partes)) {
      expect(sumar(e.partes!.map((p) => p.peso))).toBe(e.peso);
    }
  });

  it("los bloques de la rúbrica de la parte B suman su nota máxima", () => {
    expect(sumar(pp.parte_b.rubrica.map((b) => b.puntos_maximos))).toBe(pp.parte_b.nota_maxima);
  });

  it("la ponderación de la primera prueba suma 1", () => {
    expect(sumar([pp.ponderacion.parte_a, pp.ponderacion.parte_b])).toBe(1);
  });
});

describe("temario de Inglés", () => {
  const temario = getTemario(getConvocatoria("madrid-2025"));

  it("tiene los 69 temas numerados del 1 al 69 sin huecos", () => {
    expect(temario.temas.map((t) => t.numero)).toEqual(Array.from({ length: 69 }, (_, i) => i + 1));
  });

  it("caben 4 bolas en el sorteo", () => {
    expect(getConvocatoria("madrid-2025").primera_prueba.parte_b.bolas_extraidas).toBeLessThanOrEqual(temario.temas.length);
  });
});
