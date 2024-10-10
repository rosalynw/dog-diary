'use client'

import NewReminder from '@/app/components/reminders/NewReminder';
import GoBackButton from '@/app/components/Buttons/GoBackButton';
import { camelCaseToReadable } from '@/utils/stringUtils';
import { useState } from 'react';

export default function Pet({ params }) {

  function removePetAlert() {
    alert("Danger");
  }

  const {petName} = params;
  
  const petData = {
    Sparky: {
      age: 5,
      breed: 'Golden Retriever',
      owner: 'Emily Johnson',
      emergencyContact: '123-456-7890',
      vetInfo: 'Local Vet Clinic',
      food: 'Dry kibble, twice a day',
      behavior: 'A friendly dog.',
    },
    Whiskers: {
      age: 3,
      breed: 'Siamese',
      owner: 'Sarah Brown',
      emergencyContact: '987-654-3210',
      vetInfo: 'Cat Care Center',
      food: 'Wet food, once a day',
      behavior: 'Loves to play.',
    },
    Bert: {
      age: 2,
      breed: 'Bulldog',
      owner: 'Alex Green',
      emergencyContact: 'Bob White - 555-123-4567',
      vetInfo: 'Paw & Claw Vet',
      food: 'Raw diet',
      behavior: 'Very lazy.',
    },
  };
  const pet = petData[petName] || {};

    // State to control the visibility of the Reminder component
    const [showNewReminder, setShowNewReminder] = useState(false);

    // Handler to toggle the visibility of the Reminder component
    const toggleReminder = () => {
      setShowNewReminder(!showNewReminder);
    };

    const handleCancelClick = () => {
      setShowNewReminder(false);
    }

  return (
    <div className="relative flex min-h-screen items-center justify-center">
      <div className='backButton absolute top-2 right-5'>
        <GoBackButton />
      </div>
      <div className='flex items-center space-x-10 space-y-4'>
        <div className="container flex flex-col py-6 px-12 space-y-3 w-fit max-w-4xl rounded-lg shadow-lg">
          <div className="flex flex-row space-x-10">
            <div>
              <img className="inline-block h-24 w-24 rounded-full" src="/images/cat.jpg" width={24} height={24}/>
            </div>
            <div className="grow">
              <h1 className="font-bold text-4xl mb-4">{petName}</h1>
              <div className='space-y-2 mb-4'>
                {Object.entries(pet).map(([key, value]) => (
                  <p key={key}>
                    <strong>{camelCaseToReadable(key)}:</strong> {value || 'N/A'}
                  </p>
                ))}
              </div>
            </div>
            <button type="button" onClick={removePetAlert} className="font-semibold border border-regal hover:bg-regal hover:text-gray-300 dark:text-gray-300 rounded-lg py-2 px-6 h-fit">
              Remove Pet
            </button>
          </div>
          <div className="pet-buttons grid grid-cols-3 gap-4">
            <button
             className="font-semibold text-gray-300 bg-french hover:text-gray-50 rounded-lg py-2 px-6"
             type="button"
             onClick={toggleReminder}
             >
              Create Reminder
            </button>
            <button className="font-semibold text-gray-300 bg-french hover:text-gray-50 rounded-lg py-2 px-6">
              Add Owner
            </button>
            <button className="font-semibold text-gray-300 bg-french hover:text-gray-50 rounded-lg py-2 px-6">
              Share Profile
            </button>
          </div>
        </div>
        <div className="">
          {showNewReminder && ( <NewReminder onCancel={handleCancelClick}/>)}
        </div>
      </div>
    </div>
  )
}