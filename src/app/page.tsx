import Link from "next/link";
import { Cabecera } from "@/components/Cabecera";
import { getConvocatoria } from "@/lib/config";

export default function Inicio() {
  const c = getConvocatoria();
  const b = c.primera_prueba.parte_b;

  return (
    <>
      <Cabecera />
      <main className="mx-auto max-w-3xl px-4 py-6">
        <h1 className="text-xl font-semibold">Hola 👋</h1>
        <p className="mt-1 text-sm text-[var(--suave)]">
          Convocatoria activa: {c.nombre}
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Link href="/temas" className="tarjeta">
            <span className="font-medium">Temario</span>
            <span className="text-sm text-[var(--suave)]">Los temas oficiales y si tienen apuntes</span>
          </Link>
          <div className="tarjeta opacity-60">
            <span className="font-medium">Simulador de sorteo</span>
            <span className="text-sm text-[var(--suave)]">
              {b.bolas_extraidas} bolas · {b.duracion_min / 60} h · próximamente
            </span>
          </div>
        </div>
      </main>
    </>
  );
}
