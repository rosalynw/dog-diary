'use client'

import NewReminder from '@/app/components/reminders/NewReminder';
import GoBackButton from '@/app/components/Buttons/GoBackButton';
import { camelCaseToReadable } from '@/utilities/stringUtils';
import { useState } from 'react';

export default function Pet({ params }) {

  const {petName} = params;
  
  const petData = {
    Sparky: {
      age: 5,
      breed: 'Golden Retriever',
      owner: 'Emily Johnson',
      emergencyContact: 'John Doe - 123-456-7890',
      vetInfo: 'Local Vet Clinic',
      food: 'Dry kibble, twice a day',
      behavior: 'A friendly dog.',
    },
    Whiskers: {
      age: 3,
      breed: 'Siamese',
      owner: 'Sarah Brown',
      emergencyContact: 'Jane Smith - 987-654-3210',
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

  return (
    <div className="flex flex-col items-center">
      <GoBackButton />
      <div className="container flex flex-col py-6 px-12 space-y-3 w-fit max-w-4xl rounded-lg shadow-lg">
        <div className="flex flex-row space-x-10">
          <div>
            <img className="inline-block h-24 w-24 rounded-full" src="/images/cat.jpg" width={24} height={24}/>
          </div>
          <div className="grow">
            <h1 className="font-bold text-4xl">{petName}</h1>
            {Object.entries(pet).map(([key, value]) => (
              <p key={key}>
                <strong>{camelCaseToReadable(key)}:</strong> {value || 'N/A'}
              </p>
            ))}
          </div>
          <button type="button" className="font-semibold border border-regal hover:bg-regal hover:text-gray-300 dark:text-gray-300 rounded-lg py-2 px-6 h-fit">
            Remove Pet
          </button>
        </div>
        <div className="pet-buttons grid grid-cols-3 gap-4">
          <button className="font-semibold text-gray-300 bg-french hover:text-gray-50 rounded-lg py-2 px-6">
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
    </div>
  )
}