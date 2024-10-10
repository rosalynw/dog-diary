'use client'

import { useEffect, useState } from "react";

export default function NewReminder({addReminder, onCancel}) {
  const [pets, setPets] = useState([]);

  const [formData, setFormData] = useState({
    title: '',
    petId: '',
    medicineName: '',
    dosage: '',
    repeatEvery: '',
    startDate: '',
    startTime: '',
    endDate: '',
  })

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('/api/pets')
        const data = await response.json();
        
        console.log(data.pets)
        setPets(data.pets);
      } catch (error) {
        console.error('Error fetching pets:', error );
      }
    };

    fetchPets();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReminder = { 
      title: formData.title,
      pet_id: formData.petId,
      medication: formData.medicineName,
      dosage: formData.dosage,
      repeat_hours: formData.repeatEvery,
      start_time: `${formData.startDate}T${formData.startTime}`,
      end_time: formData.endDate,
    };

    try {
      const response = await fetch ('/api/reminders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newReminder),
      });

      if (!response.ok) {
        throw new Error('Network respons was not ok');
      }
      const data = await response.json();
      
      addReminder(data.reminder);

    setFormData({
      title: '',
      petId: '',
      medicineName: '',
      dosage: '',
      repeatEvery: '',
      startDate: '',
      startTime: '',
      endDate: '',
    });

    console.log('New Reminder:', data.reminder);
  } catch (error) {
    console.error('Error creating reminders:', error);
    }
  };

  return (
      <div className="form-container flex flex-col py-6 px-12 min-w-3/12 rounded-lg shadow-lg"> 
        <form onSubmit={handleSubmit} className="space-y-4">
          <h1 className="font-bold text-4xl">New Reminder</h1>
          
            <div>
            <label htmlFor="title" className="font-semibold">Title</label>
            <div className="border rounded bg-slate-200">
              <input className="border-0 bg-transparent p-1 focus:outline-none w-full"
                id="title"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Sparky's Flea Meds"
                required
                />
            </div>
            </div>

            <div>
              <label htmlFor="petName" className="font-semibold">Pet Name</label>
            <div className="border rounded bg-slate-200">
              <select className="border-0 bg-transparent p-1 focus:outline-none w-full"
                id="petId"
                type="text"
                name="petId"
                value={formData.petId}
                onChange={handleChange}
                required
                >
                  <option value="">Select a pet</option>
                  {pets.map(pet => (
                    <option key={pet.id} value={pet.id}>
                      {pet.name}
                    </option>
                  ))}
                </select>
            </div>
            </div>
          
            <div>
              <label htmlFor="medicineName" className="font-semibold">Medicine Name</label>
            <div className="border rounded bg-slate-200">
              <input className="border-0 bg-transparent p-1 focus:outline-none w-full"
                id="medicineName"
                type="text"
                name="medicineName"
                value={formData.medicineName}
                onChange={handleChange}
                placeholder="Frontline, Heartguard"
                required
                />
            </div>
            </div>
          
            <div className="flex justify-between">
              <label htmlFor="dosage" className="font-semibold">Dosage:</label>
            <div className="border rounded bg-slate-200">
              <input className="border-0 bg-transparent p-1 focus:outline-none w-full"
                id="dosage"
                type="text"
                name="dosage"
                value={formData.dosage}
                onChange={handleChange}
                placeholder="e.g., 1/2 pill"
                required
                />
            </div>
          </div>

          <div className="flex space-x-4">
            <label htmlFor="repeatEvery" className="font-semibold">Repeat (Hours):</label>
            <div className="border rounded bg-slate-200">
              <input
                className="border-0 bg-transparent p-1 focus:outline-none w-full"
                id='repeatEvery'
                type="number"
                name='repeatEvery'
                min={0}
                value={formData.repeatEvery}
                placeholder='e.g., 6'
                onChange={handleChange}
              />
            </div>
          </div>

        <div className="flex justify-between">
          <label htmlFor="startDate" className="font-semibold">Start Date:</label>
          <div className="border rounded bg-slate-200">
            <input
              className="border-0 bg-transparent p-1 focus:outline-none w-full"
              id="startDate"
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="flex justify-between">
          <label htmlFor="startTime" className="font-semibold">Start Time:</label>
          <div className="border rounded bg-slate-200">
            <input
              className="border-0 bg-transparent p-1 focus:outline-none w-full"
              id="startTime"
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              required
            />
          </div>
        </div>
 
        <div className="flex justify-between">
          <label htmlFor="endDate" className="font-semibold">End Date:</label>
            <div className="border rounded bg-slate-200">
              <input 
                className="border-0 bg-transparent p-1 focus:outline-none w-full"
                id="endDate"
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </div>
        </div>

        <div className="flex justify-end space-x-5">
          <button type="submit" className="font-semibold text-gray-300 bg-french hover:text-gray-50 rounded-lg py-2 px-6">Submit</button>
          <button type="button" className="font-semibold border border-regal hover:bg-regal hover:text-gray-300 dark:text-gray-300 rounded-lg py-2 px-6" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}