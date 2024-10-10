import { supabase } from "@/utils/supabaseClient"

export async function GET(req) {
  try {
    const { data: pets, error } = await supabase
    .from('pets')
    .select('*');

    if (error) {
      console.error("Error fetching pets:", error);
      return new Response(JSON.stringify({ error: "Error fetching pets" }), { status: 400 });
    }

    return new Response(JSON.stringify({ pets }), {status: 200 });
  } catch (error) {
    console.error("unexpected error:", error);
    return new Response(JSON.stringify({ error: "Unexpected server error:"}), { status: 500 });
  }
}