'use client'

import NewReminder from '@/app/components/reminders/NewReminder';
import GoBackButton from '@/app/components/Buttons/GoBackButton';
import { camelCaseToReadable } from '@/utils/stringUtils';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Pet({ params }) {
  const router = useRouter();
  const { id } = params;
  const [pets, setPets] = useState([]);
  const [loading, setLoading ] = useState(true);

  useEffect(() => {
      const fetchPetData = async () => {
        try {
          const response = await fetch(`/api/pets/${id}`);
          const data = await response.json();
          console.log(data);
          if (!response.ok) {
            console.log(data.pet);
            throw new Error('Failed to fetch pet data');
          }
          setPets(data.pets);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
      fetchPetData();
  }, [id])

  function removePetAlert() {
    alert("Danger");
  }

  console.log(pets);

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
            {pets.map((pet) => (
            <div className="grow">
              <h1 className="font-bold text-4xl mb-4">{pet.name}</h1>
              <div className='space-y-2 mb-4'>
              <p className='font-bold'>Owner: {pet.users.first_name} {pet.users.last_name}</p>
              <p className='font-bold'>Breed: {pet.age}</p>
              <p>Age:</p>
              <p>Food:</p>
              <p>Behavior:</p>
              </div>
            </div>
            ))}
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