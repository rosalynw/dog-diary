'use client'

import AddPet from "@/app/components/pets/AddPet";
import { supabase } from "@/utils/supabaseClient";
import { useRouter } from "next/navigation";
import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";

export default function CreatePetProfile() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (!user || error) {
          router.push("/sign-in");
        } else {
          setUser(user);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        router.push("/sign-in");
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  if (!user) {
    return (
      <div className="relative flex min-h-screen items-center justify-center">
      <div className="flex justify-center">
        <div className="flex items-center">
          <Skeleton variant="rounded" width={896} height={474} animation="wave">
            
          </Skeleton>
        </div>
      </div>
    </div>
    )
  }
  return (
    <>
      < AddPet userId={user.id} />
    </>
  )
}