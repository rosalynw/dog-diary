import SignInButton from "@/app/components/buttons/SignInButton"


export default function Login() {
  return (

    <main className="m-0 flex flex-row">
      <div className="flex w-4/12 bg-regal m-0 min-h-screen text-white text-center jusify-center justify-center">
        <div className="flex h-screen items-center">
          <h1>Dog Diary</h1>
        </div>
      </div>
      <div className="flex min-h-screen justify-center">
        <div className="flex items-center">
        
            <div className="form-container flex flex-col py-6 px-12 min-w-3/12 rounded-lg shadow-lg">
              < SignInButton />
            </div>
        </div>
      </div>
    </main>
  )
}