import { supabase } from "@/utils/supabaseClient";

export const signUp = async (email, password, firstName, lastName) => {
  email = email.trim().toLowerCase().replace(/['"]+/g, "");
  password = password.trim();
  firstName = firstName.trim();
  lastName = lastName.trim();

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
  if (data.user) {
    const { error: insertError } = await supabase
      .from('users')
      .upsert([{
        id: data.user.id,      // use auth user id
        email: email,
        first_name: firstName,
        last_name: lastName
      }]);

    if (insertError) throw insertError;
  }

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

export const getUserProfile = async () => {
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error) throw error;
  return user;
};


export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

export const resetPassword = async (email) => {
  const {data, error } = await supabase.auth.resetPasswordForEmail(email,
    {redirectTo: `testmydomain.com:3000/update-password`});

    if (error) {
      throw new Error(error.message);
    }

    return { data: "Password reset email sent!"};
}

export const updatePassword = async (newPassword) => {
  const { error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) throw new Error("Error update password: " + error.message);
  return "Password updated successfully!";
};