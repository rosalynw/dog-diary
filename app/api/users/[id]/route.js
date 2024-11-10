import { supabase } from "@/utils/supabaseClient";
import { getUserProfile } from "@/utils/auth";

export async function GET(req, {params}) {
  const user = await getUserProfile();
  const {id} = params;
  // Fetch user from the public.users table
  const { data: users, error } = await supabase
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
    console.log(userId);
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

export async function POST(req, {params}) {
  const {id } = params;
  const formData = await req.formData();

  const file = formData.get('file');
  const phone_number = formData.get('phone_number');

  try {
    const fileName = `${id}-${file.name}`;
    const { data, error: uploadError } = await supabase.storage
    .from('profile-images')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: false
    });
    
    if (uploadError) {
      return new Response(JSON.stringify({ error: uploadError.message }), {
        status: 500,
        headers: { "Content-Type": "application/json"},
      });
    }

    const { data: urlData, error: urlError } = supabase.storage
    .from('profile-images')
    .getPublicUrl(fileName);

    if (urlError) {
      return new Response(JSON.stringify({ error: urlError.message }), {
        status: 500,
        headers: { "Content-Type": "application/json"},
      });
    }

    const publicURL = urlData.publicUrl;

    const {error: updateError } = await supabase
      .from('users')
      .update({ profile_image: publicURL, phone_number })
      .eq('id', id);

      if (updateError) {
        return new Response(JSON.stringify({ error: updateError.message }), {
          status: 500,
          headers: { "Content-Type": "application/json"},
        });
      };

      return new Response(
        JSON.stringify({ message: "Profile uploaded successfully!", publicURL }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
  } catch (error) {
    return new Response(JSON.stringify({ error: req.body }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    })
  };
}