import { supabase } from "@/utils/supabaseClient"

export async function GET(req) {

  const {data:pets, error } = await supabase
  .from('pets')
  .select('*')

  

  if (error) {
    // If there's an error, return a 500 status
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