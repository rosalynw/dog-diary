'use client'

import NewReminder from "./components/reminders/NewReminder";
import ReminderList from "./components/reminders/ReminderList"
import DarkMode from "./components/darkMode/toggle"
import { useState } from "react";

export default function Home() {
  const [reminders, setReminders] = useState([]);

  const addReminder = (newReminder) => {
    setReminders((prevReminders) => [...prevReminders, newReminder]);
  }

  return (
    <div className="min-h-screen flex justify-center flex-col">
      < DarkMode />
      <div className="flex justify-evenly place-content-center">
        < ReminderList reminders={reminders}/>
        < NewReminder addReminder={addReminder}/>
      </div>

    </div>
  );
}
