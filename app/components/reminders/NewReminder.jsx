'use client'

import { useState } from "react";

export default function NewReminder({addReminder, onCancel}) {


  const [formData, setFormData] = useState({
    title: '',
    medicineName: '',
    administerTime: '',
    daysOfWeek: [],
    reminderLength: '',
  })

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === 'daysOfWeek') {
      // Handle checkbox for select days of the week
      const newDaysOfWeek = checked 
      ? [...formData.daysOfWeek, value] //Add day if checked
      : formData.daysOfWeek.filter(day => day !== value); // Remove if unchecked

      setFormData({
        ...formData,
        daysOfWeek: newDaysOfWeek,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addReminder(formData);

    setFormData({
      title: '',
      medicineName: '',
      administerTime: '',
      daysOfWeek: [],
      reminderLength: '',
    })
    console.log(formData);
  }

  return (
      <div className="form-container flex flex-col py-6 px-12 w-3/12 rounded-lg shadow-lg"> 
        <form onSubmit={handleSubmit} className="space-y-4">
          <h1 className="font-bold text-4xl">New Reminder</h1>
          <div>
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
          </div>
          
          <div>
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
          </div>

          <div>
            <div className="flex justify-between">
              <label htmlFor="administerTime" className="font-semibold">Administer Time:</label>
            <div className="border rounded bg-slate-200">
              <input className="border-0 bg-transparent p-1 focus:outline-none w-full"
                id="administerTime"
                type="time"
                name="administerTime"
                value={formData.administerTime}
                onChange={handleChange}
                required
                />
            </div>
            </div>
          </div>

          <div className="w-full">
          <div className="font-semibold">Days of the Week</div>
          <div className="dayContainer grid grid-cols-1 gap-1 border border-gray-400 rounded-lg">
          <div className="flex justify-between border-b w-full p-2">
            <label htmlFor="checkbox">Sunday</label>
            <input className="w-4 h-4"
              id="checkbox"
              type="checkbox"
              name="daysOfWeek"
              value="Sunday"
              checked={formData.daysOfWeek.includes('Sunday')}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-between border-b w-full p-2">
            <label htmlFor="checkbox">Monday</label>
            <input className="w-4 h-4"
              id="checkbox"
              type="checkbox"
              name="daysOfWeek"
              value="Monday"
              checked={formData.daysOfWeek.includes('Monday')}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-between border-b w-full p-2">
            <label htmlFor="checkbox">Tuesday</label>
            <input className="w-4 h-4"
              id="checkbox"
              type="checkbox"
              name="daysOfWeek"
              value="Tuesday"
              checked={formData.daysOfWeek.includes('Tuesday')}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-between border-b w-full p-2">
            <label htmlFor="checkbox">Wednesday</label>
            <input className="w-4 h-4"
              id="checkbox"
                type="checkbox"
                name="daysOfWeek"
                value="Wednesday"
                checked={formData.daysOfWeek.includes('Wednesday')}
                onChange={handleChange}
              />
          </div>

          <div className="flex justify-between border-b w-full p-2">
            <label htmlFor="checkbox">Thursday</label>
            <input className="w-4 h-4"
              id="checkbox"
                type="checkbox"
                name="daysOfWeek"
                value="Thursday"
                checked={formData.daysOfWeek.includes('Thursday')}
                onChange={handleChange}
              />
          </div>

          <div className="flex justify-between border-b w-full p-2">
            <label htmlFor="checkbox">Friday</label>
            <input className="w-4 h-4"
              id="checkbox"
                type="checkbox"
                name="daysOfWeek"
                value="Friday"
                checked={formData.daysOfWeek.includes('Friday')}
                onChange={handleChange}
              />
          </div>

          <div className="flex justify-between border-b w-full p-2">
            <label htmlFor="checkbox">Saturday</label>
            <input className="w-4 h-4"
              id="checkbox"
              type="checkbox"
              name="daysOfWeek"
              value="Saturday"
              checked={formData.daysOfWeek.includes('Saturday')}
              onChange={handleChange}
            />
          </div>
        </div>
        </div>
 
        <div className="flex justify-between">
          <label htmlFor="reminderLength">Reminder Length:</label>
            <div className="border rounded bg-slate-200">
              <input className="border-0 bg-transparent p-1 focus:outline-none w-full"
                id="reminderLength"
                type="datetime-local"
                name="reminderLength"
                value={formData.reminderLength}
                onChange={handleChange}
                required
              />
            </div>
        </div>

        <div className="flex justify-end space-x-5">
          <button type="submit" className="font-semibold bg-french hover:bg-green-700 rounded-lg py-2 px-6">Submit</button>
          <button type="button" className="font-semibold" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}