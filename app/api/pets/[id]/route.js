import { supabase } from "@/utils/supabaseClient"

export async function GET(req, {params}) {
  const {id} = params;

  const {data:pets, error } = await supabase
  .from('pets')
  .select(`
    *,
    users!pets_user_id_fkey (
      id,
      first_name,
      last_name
    )
    `)
  .eq('id', id)

  if (error) {
    // If there's an error, return a 500 status
    console.log(id);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  // If successful, return the pet data
  return new Response(JSON.stringify({ pets }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}