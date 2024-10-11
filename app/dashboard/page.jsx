'use client'

import NewReminder from "../components/reminders/NewReminder";
import ReminderList from "../components/reminders/ReminderList";
import { supabase } from "@/utils/supabaseClient";
import { useEffect, useState } from "react";

export default function Home() {
  const [reminders, setReminders ] = useState([]);
  const [showNewReminder, setShowNewReminder] = useState(false);

  const handleAddNewClick = () => setShowNewReminder(true);
  const handleCancelClick = () => setShowNewReminder(false);

  const fetchReminders = async () => {
    const response = await fetch('/api/reminders');
    const data = await response.json();

    if (response.ok) {
      console.log(data.reminders);
      setReminders(data.reminders);
    } else {
      console.error('Error fetching reminders:', data.error);
    }
  };

  useEffect(() => {
    fetchReminders();
  }, []);

  const addReminder = async (newReminder) => {
    try {
      const response = await fetch('/api/reminders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReminder)
      });

    if (!response.ok) {
      const errorData = await response.json(); // Parse the error response
      alert(`Error: ${errorData.error || 'Failed to add reminder'}`); // Show an alert with the error message
      return; // Exit the function early
    }

      const data = await response.json();
    
      console.log(data.reminder.start_time);
      setReminders((prevReminders) => [ data.reminder, ...prevReminders]);
    } catch (error) {
      console.error("Error adding new reminder:", error );
    }
  }

  return (
    <div className="h-screen flex">
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
