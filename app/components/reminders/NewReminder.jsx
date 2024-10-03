'use client'

import DaysOfWeekSelector from './DaysofWeekSelector';
import { useState } from "react";

export default function NewReminder({addReminder, onCancel}) {
  const [repeatEvery, setRepeatEvery] = useState('')


  const [formData, setFormData] = useState({
    title: '',
    petName: '',
    medicineName: '',
    dosageTime: '',
    repeatEvery: '',
    startDate: '',
    endDate: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

  const handleSubmit = (e) => {
    e.preventDefault();

    addReminder(formData);

    setFormData({
      title: '',
      petName: '',
      medicineName: '',
      dosageTime: '',
      repeatEvery: '',
      startDate: '',
      endDate: '',
    })
    console.log(formData);
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
              <input className="border-0 bg-transparent p-1 focus:outline-none w-full"
                id="petName"
                type="text"
                name="petName"
                value={formData.petName}
                onChange={handleChange}
                placeholder="Whiskers"
                required
                />
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
                placeholder="Flea/Tick Medicine"
                required
                />
            </div>
            </div>
        

          
            <div className="flex justify-between">
              <label htmlFor="dosageTime" className="font-semibold">Dosage Time:</label>
            <div className="border rounded bg-slate-200">
              <input className="border-0 bg-transparent p-1 focus:outline-none w-full"
                id="dosageTime"
                type="time"
                name="dosageTime"
                value={formData.dosageTime}
                onChange={handleChange}
                required
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
          <label htmlFor="repeatEvery" className="font-semibold">Repeat Every (Hours)</label>
          <div className="border rounded bg-slate-200">
            <input
              className="border-0 bg-transparent p-1 focus:outline-none"
              id='repeatEvery'
              type="number"
              name='repeatEvery'
              min={0}
              value={repeatEvery}
              placeholder='e.g., 6'
              onChange={(e) => setRepeatEvery(e.target.value)}
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