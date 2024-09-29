import Image from "next/image";
import Reminder from "./components/reminder/Reminder";
import DarkMode from "./components/reminder/darkMode/toggle"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col place-content-center">
      < DarkMode />
      <div className="flex justify-center">
      < Reminder/>
      </div>

    </div>
  );
}
