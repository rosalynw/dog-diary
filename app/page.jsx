'use client'

import NewReminder from "./components/reminders/NewReminder";
import ReminderList from "./components/reminders/ReminderList";
import DynamicHeader from "./components/header/header";
import { useState } from "react";

export default function Home() {
  const [reminders, setReminders] = useState([]);

  const addReminder = (newReminder) => {
    setReminders((prevReminders) => [...prevReminders, newReminder]);
  }

  return (
    <div className="min-h-screen">
      <div>
        < DynamicHeader />
      </div>
      <div className="min-h-full flex justify-center flex-col">
        <div className="flex justify-evenly place-content-center">
          < ReminderList reminders={reminders}/>
          < NewReminder addReminder={addReminder}/>
        </div>
      </div>

    </div>
  );
}
