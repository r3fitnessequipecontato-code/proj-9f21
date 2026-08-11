import { createClient } from "@/lib/supabase/public";

export async function getCategorias() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("categorias")
    .select("*")
    .order("ordem")
    .order("nome");

  if (error) throw new Error(error.message);
  return data;
}

export async function getCategoriasHome() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("categorias")
    .select("*")
    .eq("exibir_home", true)
    .order("ordem")
    .order("nome");

  if (error) throw new Error(error.message);
  return data;
}
