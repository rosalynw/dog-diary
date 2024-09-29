import Image from "next/image";
import Reminder from "./components/reminder/Reminder";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      < Reminder/>
    </div>
  );
}
