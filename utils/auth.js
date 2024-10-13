import { supabase } from "@/utils/supabaseClient";

export const signUp = async (email, password, captchaToken) => {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { captchaToken },
  });

  if (error) throw error;
  const userId = data.user.id; // Get user ID from Supabase

  // Upsert the user's profile in the users table
  const { error: profileError } = await supabase.from("users").upsert({
    id: userId,
    email,
    first_name: firstName,
    last_name: lastName,
  });

  if (profileError) throw profileError;
  return data;
  
};

export const signIn = async (email, password, captchaToken) => {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
    options: {
      captchaToken
    }
  });

  if (error) throw error;
  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};