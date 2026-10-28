import activa from "../../../config/convocatoria-activa.json";
import madrid2025 from "../../../config/convocatorias/madrid-2025.json";
import ingles from "../../../config/temarios/ingles-0590-011.json";
import { convocatoriaSchema, temarioSchema, type Convocatoria, type Temario } from "./schema";

// Para añadir una convocatoria nueva: crear su JSON en config/convocatorias y registrarlo aquí.
const convocatorias: Record<string, unknown> = { "madrid-2025": madrid2025 };
const temarios: Record<string, unknown> = { "ingles-0590-011": ingles };

export function listarConvocatorias(): string[] {
  return Object.keys(convocatorias);
}

export function getConvocatoria(id: string = activa.activa): Convocatoria {
  const datos = convocatorias[id];
  if (!datos) throw new Error(`Convocatoria desconocida: ${id}`);
  return convocatoriaSchema.parse(datos);
}

export function getTemario(convocatoria: Convocatoria = getConvocatoria()): Temario {
  const datos = temarios[convocatoria.temario];
  if (!datos) throw new Error(`Temario desconocido: ${convocatoria.temario}`);
  return temarioSchema.parse(datos);
}
