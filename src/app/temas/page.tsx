import { Cabecera } from "@/components/Cabecera";
import { getConvocatoria, getTemario } from "@/lib/config";

export default function TemasPage() {
  const convocatoria = getConvocatoria();
  const { temas } = getTemario(convocatoria);

  return (
    <>
      <Cabecera />
      <main className="mx-auto max-w-3xl px-4 py-6">
        <h1 className="text-xl font-semibold">Temario oficial ({temas.length} temas)</h1>
        <p className="mt-1 text-sm text-[var(--suave)]">{convocatoria.nombre}</p>
        <ol className="mt-4 divide-y divide-[var(--borde)] rounded-lg border border-[var(--borde)] bg-[var(--superficie)]">
          {temas.map((t) => (
            <li key={t.numero} className="flex gap-3 px-4 py-3">
              <span className="w-8 shrink-0 text-right font-mono text-[var(--suave)]">{t.numero}</span>
              <span className="flex-1">{t.titulo}</span>
              <span className="shrink-0 self-start rounded bg-[var(--aviso-fondo)] px-2 py-0.5 text-xs text-[var(--aviso-texto)]">
                Sin apuntes
              </span>
            </li>
          ))}
        </ol>
      </main>
    </>
  );
}
