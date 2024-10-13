import { supabase } from "@/utils/supabaseClient";

export const signUp = async (email, password, captchaToken,) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { captchaToken },
  });

  if (error) {
    console.error("Sign-up error:", error);
    throw error;
  }

  console.log("User signed up:", data);
  return data;
  
};

export const signIn = async (email, password, captchaToken) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
    options: {
      captchaToken
    }
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