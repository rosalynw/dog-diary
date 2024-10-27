import { supabase } from "@/utils/supabaseClient"

export async function GET(req) {

  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("user_id");

  if (!userId) {
    return new Response(JSON.stringify({ error: userError.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const {data: pets, error } = await supabase
  .from('pets')
  .select('*')
  .eq('user_id', userId);

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

export async function POST(req) {
  const formData = await req.formData();
  const petName = formData.get('name');
  const age = formData.get('age');
  const species = formData.get('species');
  const breed = formData.get('breed');
  const birthday = formData.get('birthday');
  const behavior = formData.get('behavior');
  const food = formData.get('food');
  const userId = formData.get('user_id');

  try {
    const { data, error } = await supabase
      .from('pets')
      .insert([{ name: petName, age, user_id: userId, species, breed, birthday, food, behavior}]);

      if (error) {
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json'
          },
        });
      }

      return new Response(JSON.stringify({message: 'Pet profile created!'}), {
        status: 200,
        headers: { 'Content-Type': 'application/json'},
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: {'Content-Type': 'application/json'},
      });
    }
}