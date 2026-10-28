import Link from "next/link";
import { salir } from "@/app/login/actions";

export function Cabecera() {
  return (
    <header className="border-b border-[var(--borde)] bg-[var(--superficie)]">
      <nav className="mx-auto flex max-w-3xl items-center gap-4 px-4 py-3 text-sm">
        <Link href="/" className="font-semibold">
          Oposiciones Inglés
        </Link>
        <Link href="/temas">Temario</Link>
        <form action={salir} className="ml-auto">
          <button type="submit" className="text-[var(--suave)] underline">
            Salir
          </button>
        </form>
      </nav>
    </header>
  );
}
