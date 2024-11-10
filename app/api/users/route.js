// /pages/api/users/index.js

import { supabase } from "@/utils/supabaseClient";

export async function GET(req) {

  const { searchParams } = new URL(req.url);
  const user = searchParams.get("id");

  const { data: users, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', user);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  if (users.length === 0) {
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
