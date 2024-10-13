'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUserProfile, signOut } from "@/utils/auth";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

export default function CreateProfile({user}) {
  const router = useRouter();
  const { email, firstName, lastName } = user;
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  // // Wait for the query to be available and update state
  // useEffect(() => {
  //   // Check if query parameters are available
  //   if (router.query && Object.keys(router.query).length > 0) {
  //     const { email, firstName, lastName } = router.query;

  //     setUserInfo({
  //       email: email || "", // Fallback to empty string if undefined
  //       firstName: firstName || "",
  //       lastName: lastName || "",
  //     });
  //   }
  // }, [router.query]);

  useEffect(() => {
    // Ensure query parameters are available
    if (router.query) {
      const { email, firstName, lastName } = router.query;

      console.log(email);      // Outputs the email from the query string
      console.log(firstName);  // Outputs the first name from the query string
      console.log(lastName);   // Outputs the last name from the query string
    }
  }, [router.query]); // Re-run the effect when router.query changes

  const handleSignOut = async () => {
    try {
      await signOut();
      setMessage("Logged out successfully!");
      router.push('/sign-in')
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for submitting the profile, e.g., saving to the database
    console.log("Profile data submitted:", { ...userInfo, phoneNumber });
  };

  return (
    <div>
      <div className="relative flex min-h-screen items-center justify-center">
        <div className='flex items-center space-x-10 space-y-4'>
          <div className="container flex flex-col py-6 pr-12 pl-4 space-y-3 w-fit max-w-4xl rounded-lg shadow-lg">
            <div className="grid grid-cols-2">
              <div className="self-center space-y-4 text-center">
                <h3 className="font-semibold text-regal">Profile picture</h3>
                <img className="inline-block h-60 w-60 rounded-full" src="/images/cat.jpg" width={100} height={100}/>
              </div>
              <div className="space-y-12">
                <h1 className={`${pacifico.variable} font-sans text-4xl text-center py-5`}>Create Profile</h1>
                <form className="grid grid-cols-2" onSubmit={handleSubmit}>
                  <label className="mr-2">First Name:
                    <input
                      className="p-2 rounded-lg w-full"
                      type="text"
                      value={firstName}
                      readOnly
                    />
                  </label>
                  <label className="ml-2">Last Name:
                    <input
                      className="p-2 rounded-lg w-full"
                      type="text"
                      value={userInfo.lastName}
                      readOnly
                    />
                  </label>
                  <label className="col-span-2 py-2">Email:
                    <input
                      className="p-2 rounded-lg w-full"
                      type="email"
                      value={userInfo.email}
                      readOnly
                    />
                  </label>
                  <label className="col-span-2 py-2">Phone:
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
                      className="font-semibold text-gray-300 bg-french hover:text-gray-50 rounded-lg py-2 px-6">
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
                </form>
                {message && <p>{message}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Fetch user data on server side
export async function getServerSideProps(context) {
  const { email } = context.query; // Assuming you're passing email as a query param

  // Simulating a fetch request to get user data based on email
  const user = await getUserProfile(email) // Replace this with your API call to get user data
    .catch(err => null);

  return {
    props: {
      user, // Pass user data to the page
    },
  };
}

