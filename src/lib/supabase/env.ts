// Las claves NO están en el código: se leen de variables de entorno
// (archivo .env.local en el ordenador, ajustes "Environment Variables" en Vercel).
export function supabaseEnv() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) {
    throw new Error(
      "Faltan NEXT_PUBLIC_SUPABASE_URL o NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY. Consulta .env.example.",
    );
  }
  return { url, key };
}
