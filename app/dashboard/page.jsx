'use client'

import NewReminder from "../components/reminders/NewReminder";
import ReminderList from "../components/reminders/ReminderList";
import { supabase } from "@/utils/supabaseClient";
import { useEffect, useState } from "react";

export default function Home() {
  const [reminders, setReminders] = useState([]);
  const [showNewReminder, setShowNewReminder] = useState(false);

  const addReminder = (newReminder) => {
    setReminders((prevReminders) => [...prevReminders, newReminder]);
  }

  // const dummyReminders = [
  //   {
  //     title: "Sparky's Flea Meds",
  //     petName: "Sparky",
  //     medicineName: "Flea/Tick Medicine",
  //     dosageTime: "08:00 AM",
  //     repeatEvery: 6, // Number representing hours
  //     startDate: "2024-09-15", // Only the date
  //     endDate: "2024-09-30", // Only the date
  //   },
  //   {
  //     title: "Bella's Heartworm Pills",
  //     petName: "Bert",
  //     medicineName: "Heartworm Prevention",
  //     dosageTime: "09:00 AM",
  //     repeatEvery: 12,
  //     startDate: "2024-09-20",
  //     endDate: "2024-10-20",
  //   },
  //   {
  //     title: "Max's Allergy Medication",
  //     petName: "Bert",
  //     medicineName: "Allergy Relief",
  //     dosageTime: "07:30 AM",
  //     repeatEvery: 24,
  //     startDate: "2024-09-22",
  //     endDate: "2024-10-01",
  //   },
  //   {
  //     title: "Daisy's Worming Treatment",
  //     petName: "Whiskers",
  //     medicineName: "Worm Treatment",
  //     dosageTime: "06:00 PM",
  //     repeatEvery: 168, // 1 Week in hours
  //     startDate: "2024-09-25",
  //     endDate: "2024-10-25",
  //   },
  //   {
  //     title: "Rocky's Eye Drops",
  //     petName: "Sparky",
  //     medicineName: "Eye Medication",
  //     dosageTime: "03:00 PM",
  //     repeatEvery: 8,
  //     startDate: "2024-09-28",
  //     endDate: "2024-10-05",
  //   },
  // ];

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


  const handleAddNewClick = () => setShowNewReminder(true);
  const handleCancelClick = () => setShowNewReminder(false);

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
