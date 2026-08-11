import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabase/database.types";

// Client sem cookies() — só para leitura de dados públicos (RLS "select
// true"/"aprovado true"/"ativo true"). Usar esse em vez de
// lib/supabase/server.ts em qualquer leitura que roda durante a
// renderização de página pública: cookies() força a rota inteira a virar
// dinâmica, mesmo quando nenhuma sessão de usuário está envolvida.
export async function createClient() {
  return createSupabaseClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
