import { z } from "zod";

const indicador = z.object({ id: z.string(), texto: z.string() });

const bloqueRubrica = z.object({
  id: z.string(),
  nombre: z.string(),
  puntos_maximos: z.number().positive(),
  indicadores: z.array(indicador).min(1),
});

const ejercicioParteA = z.object({
  id: z.string(),
  nombre: z.string(),
  peso: z.number().positive(),
  duracion_min: z.number().positive().optional(),
  duracion_maxima_min: z.number().positive().optional(),
  reproducciones_audio: z.number().int().positive().optional(),
  pausa_entre_reproducciones: z.boolean().optional(),
  diccionario: z.boolean().optional(),
  partes: z
    .array(
      z.object({
        id: z.string(),
        nombre: z.string(),
        peso: z.number().positive(),
        palabras_aprox: z.number().int().positive().optional(),
      }),
    )
    .optional(),
});

export const convocatoriaSchema = z.object({
  id: z.string(),
  nombre: z.string(),
  especialidad: z.object({ codigo: z.string(), nombre: z.string() }),
  fuente: z.string(),
  temario: z.string(),
  idioma_examen: z.string(),
  estilo_citas: z.string(),
  penalizaciones: z.object({
    ortografia: z.object({ descripcion: z.string(), puntos: z.number().positive() }),
    gramatical_leve: z.object({ descripcion: z.string(), puntos: z.number().positive() }),
    gramatical_grave: z.object({
      descripcion: z.string(),
      efecto: z.enum(["anula_fragmento", "anula_respuesta"]),
      nota_efecto: z.string().optional(),
    }),
    repetido_misma_palabra_cuenta_una_vez: z.boolean(),
    repeticion_aplica_a: z.array(z.enum(["ortografia", "gramatical_leve"])),
    se_aplican_sobre: z.string(),
    nota_minima_tras_penalizaciones: z.number(),
    compatibles_con_bloque_expresion: z.boolean(),
  }),
  no_calificable: z.array(z.object({ id: z.string(), descripcion: z.string() })),
  primera_prueba: z.object({
    ponderacion: z.object({ parte_a: z.number(), parte_b: z.number() }),
    nota_minima_total: z.number(),
    nota_minima_cada_parte_antes_de_ponderar: z.number(),
    parte_a: z.object({
      nombre: z.string(),
      nota_maxima: z.number().positive(),
      duracion_maxima_min: z.number().positive(),
      ejercicios: z.array(ejercicioParteA).min(1),
    }),
    parte_b: z.object({
      nombre: z.string(),
      nota_maxima: z.number().positive(),
      duracion_min: z.number().positive(),
      bolas_extraidas: z.number().int().positive(),
      temas_a_elegir: z.number().int().positive(),
      rubrica: z.array(bloqueRubrica).min(1),
    }),
  }),
});

export const temarioSchema = z.object({
  id: z.string(),
  especialidad: z.string(),
  fuente: z.string(),
  temas: z.array(z.object({ numero: z.number().int().positive(), titulo: z.string().min(1) })).min(1),
});

export type Convocatoria = z.infer<typeof convocatoriaSchema>;
export type Temario = z.infer<typeof temarioSchema>;
export type Tema = Temario["temas"][number];
