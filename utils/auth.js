import { supabase } from "@/utils/supabaseClient";


export const signUp = async (email, password, firstName, lastName) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { 
      data: {
        first_name: firstName,
        last_name: lastName,
      }
     },
  });

  if (error) {
    console.error("Sign-up error:", error);
    throw error;
  }

  console.log("User signed up:", data);

  const userId = data.user.id;

  
  return data;
};

export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
};

export const getUserProfile = async (userId) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) throw error;
  return data;
};


export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};