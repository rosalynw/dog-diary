import { supabase } from "@/utils/supabaseClient";
import { request } from "http";

export async function GET(req, {params}) {
  const {id} = params;
  console.log("heelo");

  // Fetch user from the public.users table
  const { data:users, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  if (users.length === 0) {
    console.log(id);
    console.log(users);
    return new Response(JSON.stringify({ message: 'User not found' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return new Response(JSON.stringify(users[0]), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}