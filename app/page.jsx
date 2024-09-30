'use client'

import NewReminder from "./components/reminders/NewReminder";
import ReminderList from "./components/reminders/ReminderList";
import DynamicHeader from "./components/header/header";
import { useState } from "react";

export default function Home() {
  const [reminders, setReminders] = useState([]);
  const [showNewReminder, setShowNewReminder] = useState(false);

  const addReminder = (newReminder) => {
    setReminders((prevReminders) => [...prevReminders, newReminder]);
  }

  const handleAddNewClick = () => setShowNewReminder(true);
  const handleCancelClick = () => setShowNewReminder(false);

  return (
    <div className="min-h-screen flex flex-col">
      < DynamicHeader />
      <div className="flex flex-grow justify-center items-center">
        <div className="flex justify-center flex-col w-full">
          <div className="flex justify-evenly">
            < ReminderList reminders={reminders} onAddNewClick={handleAddNewClick}/>
            {showNewReminder && < NewReminder addReminder={addReminder} onCancel={handleCancelClick}/>}
          </div>
        </div>
      </div>

    </div>
  );
}
