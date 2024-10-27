'use client'

import { useEffect, useState } from "react";
import { signOut } from "@/utils/auth";
import { useRouter } from "next/navigation";
import { Pacifico } from "next/font/google";
import ImageUpload from "../images/ImageUpload";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

export default function AddPet({userId}) {
  const [selectedFile, setSelectedFile] = useState(null);;
  const [message, setMessage ] = useState("");


  const handleCancel = async () => {
    try {
      await signOut();
      setMessage("Logged out successfully!");
      router.push("/dashboard");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleFileSelect = (file) => {
    setSelectedFile(file);
    console.log("file selected:", file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    
      formData.append('user_id', userId);
    

    console.log("Form Data", formData);
    try {
      const response = await fetch(`/api/pets`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log(result);
      if (response.ok) {
        setMessage("Pet profile created!");
        //router.push()
      } else {
        console.error('Failed tocreated a pet profile:', result);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An unexpected error occurred.");
    }
  };

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
                  className={`${pacifico.variable} font-sans text-5xl text-center py-5 col-span-2`}
                  >
                    Add a Pet
                  </h1>

                <label className="mr-2 py-2" htmlFor="name">
                  Name:
                  <input
                    className="p-2 rounded-lg w-full"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Rex"
                  />
                </label>
                <label className="ml-2 py-2">
                  Species:
                  <input
                    className="p-2 rounded-lg w-full"
                    type="text"
                    name="species"
                    id="species"
                    placeholder="Dog"
                  />
                </label>
                <label className="mr-2 py-2" htmlFor="breed">
                  Breed:
                  <input
                    className="p-2 rounded-lg w-full"
                    type="text"
                    name="breed"
                    id="breed"
                    placeholder="Golden Doodle"
                  />
                </label>
                <label className="ml-2 py-2">
                  Age:
                  <input
                    className="p-2 rounded-lg w-full"
                    type="number"
                    name="age"
                    id="age"
                    placeholder="8 years/ 6 months"
                  />
                </label>
                <label className="mr-2 py-2" htmlFor="food">
                  Food:
                  <input
                    className="p-2 rounded-lg w-full"
                    type="tel"
                    name="food"
                    id="food"
                    placeholder="Purina kibble"
                  />
                </label>
                <label className="ml-2 py-2" htmlFor="birthday">
                  Birthday:
                  <input
                    className="p-2 rounded-lg w-full"
                    type="date"
                    name="birthday"
                    id="birthday"
                    placeholder="Purina kibble"
                  />
                </label>
                <label className="col-span-2 py-2" htmlFor="behavior">
                  Behavior:
                  <textarea
                    className="p-2 rounded-lg w-full"
                    type="textarea"
                    name="behavior"
                    id="behavior"
                    placeholder="Playful, loves sticks and playing fetch!"
                  />
                </label>
                <div className="pet-buttons grid grid-cols-2 gap-4 col-span-2">
                <button className="font-semibold text-gray-300 bg-french hover:text-gray-50 rounded-lg py-2 px-6">
                  Submit
                </button>
                <button
                  className="font-semibold border border-regal hover:bg-regal hover:text-gray-300 dark:text-gray-300 dark:border-french dark:bg-zinc-700 dark:hover:bg-regal rounded-lg py-2 px-6 h-fit"
                  onClick={handleCancel}
                  type="button"
                >
                  Cancel
                </button>
              </div>
                </div>
              </form>

              {/* {message && <p>{message}</p>} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}