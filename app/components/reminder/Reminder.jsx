'use client'

import { useState } from "react";

export default function ReminderForm() {
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({
    title: '',
    medicineName: '',
    administerTime: '',
    daysOfWeek: [],
    reminderLength: '',
  })

  function handleClick() {
    setCount(count + 1);
  }

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
    console.log(formData);
  }

  return (
      <div className="form-container flex flex-col py-6 px-12 rounded-lg shadow-lg"> 
        <form onSubmit={handleSubmit} className="space-y-4">
          <h1 className="font-bold text-4xl">New Reminder</h1>
          <div>
            <div>
            <label htmlFor="title">Title:</label>
            <div>
              <input className="border-0 bg-transparent px-2 focus:outline-none"
                type="text"
                id="title"
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
              <label htmlFor="medicineName">Medicine Name:</label>
            <div>
              <input className="border-0 bg-transparent focus:outline-none"
                type="text"
                id="medicineName"
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
            <div><label htmlFor="administerTime">Administer Time:</label>
            <div>
              <input
                type="time"
                id="administerTime"
                name="administerTime"
                value={formData.administerTime}
                onChange={handleChange}
                required
                />
            </div>
            </div>
          </div>

          <div>
          <label>Days of the Week:</label>
          <div className="dayContainer grid grid-cols-1 gap-1">
          <div className="flex justify-between">
            <label>Sunday</label>
            <input
                type="checkbox"
                name="daysOfWeek"
                value="Sunday"
                checked={formData.daysOfWeek.includes('Sunday')}
                onChange={handleChange}
              />
          </div>

          <div className="flex justify-between">
            <label>Monday</label>
            <input
                type="checkbox"
                name="daysOfWeek"
                value="Monday"
                checked={formData.daysOfWeek.includes('Monday')}
                onChange={handleChange}
              />
          </div>


          <div className="flex justify-between">
            <label>Tuesday</label>
            <input
                type="checkbox"
                name="daysOfWeek"
                value="Tuesday"
                checked={formData.daysOfWeek.includes('Tuesday')}
                onChange={handleChange}
              />
          </div>

          <div className="flex justify-between">
            <label>Wednesday</label>
            <input
                type="checkbox"
                name="daysOfWeek"
                value="Wednesday"
                checked={formData.daysOfWeek.includes('Wednesday')}
                onChange={handleChange}
              />
          </div>

          <div className="flex justify-between">
            <label>Thursday</label>
            <input
                type="checkbox"
                name="daysOfWeek"
                value="Thursday"
                checked={formData.daysOfWeek.includes('Thursday')}
                onChange={handleChange}
              />
          </div>

          <div className="flex justify-between">
            <label>Friday</label>
            <input
                type="checkbox"
                name="daysOfWeek"
                value="Friday"
                checked={formData.daysOfWeek.includes('Friday')}
                onChange={handleChange}
              />
          </div>

          <div className="flex justify-between">
            <label>Saturday</label>
            <input
                type="checkbox"
                name="daysOfWeek"
                value="Saturday"
                checked={formData.daysOfWeek.includes('Saturday')}
                onChange={handleChange}
              />
          </div>
        </div>
        </div>
 
          <div>
            <label htmlFor="reminderLength">Reminder Length:</label>
            <input
              type="date"
              id="reminderLength"
              name="reminderLength"
              value={formData.reminderLength}
              onChange={handleChange}
              required
              />
          </div>

          <button type="submit" className="bg-green-500 hover:bg-green-700 rounded-full p-2">Submit</button>
        </form>
      </div>
  );
}