'use client'

import { useRouter } from "next/navigation"

export default function GoBackButton() {
  const router = useRouter();

  const isHomePage = router?.pathname === '/';

  return (
    <>
      {!isHomePage && (
        <button 
          className="font-semibold bg-french text-gray-300 px-4 py-2 rounded-lg mb-4 hover:text-white"
          onClick={() => router?.back()}
        >
          Go Back
        </button>
      )}
    </>
  )
}