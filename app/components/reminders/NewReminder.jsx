'use client'

// remove title of reminder and instead add notes that are only visible on single note view?
// having title and medicine name feels a bit redundant?

import { useEffect, useState } from "react";

export default function NewReminder({addReminder, onCancel}) {
  const [pets, setPets] = useState([]);

  const [formData, setFormData] = useState({
    title: '',
    pet_id: '',
    medication: '',
    dosage: '',
    start_date: '',
    start_time: '',
    end_date: '',
    repeat_hours: '',
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

        // Combine start_date and start_time into a single timestamp
        const startTimeStamp = new Date(`${formData.start_date}T${formData.start_time}:00`).toISOString();

        const newReminderData = {
          ...formData,
          start_time: startTimeStamp, // Use the combined timestamp
        };    
    
    console.log(formData);
    await addReminder(formData);

    setFormData({
      title: '',
      pet_id: '',
      medication: '',
      dosage: '',
      start_date: '',
      start_time: '',
      end_date: '',
      repeat_hours: '',
    });
  };

  return (
      <div className="form-container flex flex-col py-6 px-12 min-w-3/12 rounded-lg shadow-lg"> 
      <h1 className="font-bold text-4xl">New Reminder</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
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
              <label htmlFor="pet_id" className="font-semibold">Pet Name</label>
            <div className="border rounded bg-slate-200">
              <select className="border-0 bg-transparent p-1 focus:outline-none w-full text-black"
                id="pet_id"
                type="text"
                name="pet_id"
                value={formData.pet_id}
                onChange={handleChange}
                required
                >
                  <option value="" className="text-slate-400">Select a pet</option>
                  {pets.map(pet => (
                    <option key={pet.id} value={pet.id}>
                      {pet.name}
                    </option>
                  ))}
                </select>
            </div>
            </div>
          
            <div>
              <label htmlFor="medication" className="font-semibold">Medicine Name</label>
            <div className="border rounded bg-slate-200">
              <input className="border-0 bg-transparent p-1 focus:outline-none w-full"
                id="medication"
                type="text"
                name="medication"
                value={formData.medication}
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
            <label htmlFor="repeat_hours" className="font-semibold">Repeat (Hours):</label>
            <div className="border rounded bg-slate-200">
              <input
                className="border-0 bg-transparent p-1 focus:outline-none w-full"
                id='repeat_hours'
                type="number"
                name='repeat_hours'
                min={0}
                value={formData.repeat_hours}
                placeholder='e.g., 6'
                onChange={handleChange}
              />
            </div>
          </div>

        <div className="flex justify-between">
          <label htmlFor="start_date" className="font-semibold">Start Date:</label>
          <div className="border rounded bg-slate-200">
            <input
              className="border-0 bg-transparent p-1 focus:outline-none w-full"
              id="start_date"
              type="date"
              name="start_date"
              value={formData.start_date}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="flex justify-between">
          <label htmlFor="start_time" className="font-semibold">Start Time:</label>
          <div className="border rounded bg-slate-200">
            <input
              className="border-0 bg-transparent p-1 focus:outline-none w-full"
              id="start_time"
              type="time"
              name="start_time"
              value={formData.start_time}
              onChange={handleChange}
              required
            />
          </div>
        </div>
 
        <div className="flex justify-between">
          <label htmlFor="end_date" className="font-semibold">End Date:</label>
            <div className="border rounded bg-slate-200">
              <input 
                className="border-0 bg-transparent p-1 focus:outline-none w-full"
                id="end_date"
                type="date"
                name="end_date"
                value={formData.end_date}
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