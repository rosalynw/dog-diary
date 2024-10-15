"use client";

import { useEffect, useState } from "react";
import { signOut } from "@/utils/auth";
import useSWR, { preload } from "swr";
import { fetcher } from "@/utils/fetcher";
import { Pacifico } from "next/font/google";
import ImageUpload from "@/app/components/images/ImageUpload";
import { Skeleton } from "@mui/material";
import { useRouter } from "next/navigation";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

export default function CreateProfile({ params }) {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const { id } = params;

  const { data: users, error, isLoading } = useSWR(`/api/users/${id}`, fetcher);

  useEffect(() => {
    if (users) {
      console.log("Fetched user data:", users);
    } else if (error) {
      console.error("Error fetching user data:", error);
    }
  }, [users, error]);

  const handleSignOut = async () => {
    try {
      await signOut();
      setMessage("Logged out successfully!");
      router.push("/sign-in");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleFileSelect = (file) => {
    setSelectedFile(file);
    console.log("file selected:", file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please uploade picture");
      return;
    }

    const formData = new FormData();
    
      formData.append('file', selectedFile);
      formData.append('phone_number', phoneNumber)
    

    console.log("Form Data", formData);
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log(result);
      if (response.ok) {
        setMessage("Profile updated successflly");
        router.push('/dashboard/pets/add-pet');
      } else {
        setMessage(result.error || "An error occurred.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An unexpected error occurred.");
    }
  };

  // Handle loading state
  if (isLoading) {
    return (
    <div className="min-h-screen">
      <div className="flex justify-center">
        <div className="flex items-center">
          <Skeleton variant="rounded" width={896} height={474} animation="wave" />
        </div>
      </div>
    </div>
    );
  }

  return (
    <div>
      <div className="relative flex min-h-screen items-center justify-center">
        <div className="flex items-center space-x-10 space-y-4">
          <div className="container flex flex-col py-6 pr-4 pl-4 space-y-3 w-fit max-w-4xl rounded-lg shadow-lg">
            <div className="space-y-4 text-center">
              <form className="grid grid-cols-2" onSubmit={handleSubmit}>
                <div className="flex items-center justify-center">
                  <ImageUpload onFileSelect={handleFileSelect} />
                </div>
                <div className="grid grid-cols-2 px-4 space-y-5">
                  <h1
                    className={`${pacifico.variable} font-sans text-4xl text-center py-5 col-span-2`}
                  >
                    Create Profile
                  </h1>
                  <label className="mr-2 text-left">
                    First Name:
                    <input
                      className="p-2 rounded-lg w-full"
                      type="text"
                      value={users.first_name}
                      readOnly
                    />
                  </label>
                  <label className="ml-2 text-left">
                    Last Name:
                    <input
                      className="p-2 rounded-lg w-full"
                      type="text"
                      value={users.last_name}
                      readOnly
                    />
                  </label>
                  <label className="col-span-2 py-2 text-left">
                    Email:
                    <input
                      className="p-2 rounded-lg w-full"
                      type="email"
                      value={users.email}
                      readOnly
                    />
                  </label>
                  <label className="col-span-2 py-2 text-left">
                    Phone: <span className="text-slate-400">(optional)</span>
                    <input
                      className="p-2 rounded-lg w-full"
                      type="tel"
                      value={phoneNumber}
                      placeholder="123-456-7890"
                      onChange={handlePhoneChange}
                    />
                  </label>
                  <div className="pet-buttons grid grid-cols-2 gap-4 col-span-2">
                    <button
                      type="submit"
                      className="font-semibold text-gray-300 bg-french hover:text-gray-50 rounded-lg py-2 px-6"
                    >
                      Submit
                    </button>
                    <button
                      className="font-semibold border border-regal hover:bg-regal hover:text-gray-300 dark:text-gray-300 rounded-lg py-2 px-6 h-fit"
                      onClick={handleSignOut}
                      type="button"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
              {message && <p>{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
