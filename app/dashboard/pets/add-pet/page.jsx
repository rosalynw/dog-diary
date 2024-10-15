'use client'

import AddPet from "@/app/components/pets/AddPet";
import { supabase } from "@/utils/supabaseClient";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CreatePetProfile() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/sign-in');
      } else {
        setUser(user);
      }
    };

    checkUser();
  }, []);

  if (!user) return <p>Loading....</p>
  return (
    <>
      < AddPet userId={user.id} />
    </>
  )
}