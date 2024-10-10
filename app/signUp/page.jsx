
import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <main className="m-0 flex flex-row">
      <div className="w-4/12 bg-regal m-0 min-h-screen text-white text-center">
        <h1 className="h-screen self-center">Dog Diary</h1>
      </div>
      <div className="flex min-h-screen justify-center">
        <div className="flex items-center">
          <div className="form-container flex flex-col py-6 px-12 min-w-3/12 rounded-lg shadow-lg">
            <form
              action={async () => {
                "use server"
                await signIn("google")
              }}
            >
              <button type="submit">Signin with Google</button>
              </form>
          </div>
        </div>
      </div>
    </main>
  )
}