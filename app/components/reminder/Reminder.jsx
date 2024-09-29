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
      <div className="form-container flex flex-col place-items-center bg-gray-100 p-6 rounded-lg shadow-lg">
        <h1 className="font-bold text-4xl">Dog Info</h1>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              />
          </div>
          
          <div>
            <label htmlFor="medicineName">Medicine Name:</label>
            <input
              type="text"
              id="medicineName"
              name="medicineName"
              value={formData.medicineName}
              onChange={handleChange}
              required
              />
          </div>
          <div>
            <label htmlFor="administerTime">Administer Time:</label>
            <input
              type="time"
              id="administerTime"
              name="administerTime"
              value={formData.administerTime}
              onChange={handleChange}
              required
              />
          </div>

          <div className="flex flex-col">
          <label>Days of the Week:</label>
          <label>
            <input
              type="checkbox"
              name="daysOfWeek"
              value="Monday"
              checked={formData.daysOfWeek.includes('Monday')}
              onChange={handleChange}
            />
            Monday
          </label>
          <label>
            <input
              type="checkbox"
              name="daysOfWeek"
              value="Tuesday"
              checked={formData.daysOfWeek.includes('Tuesday')}
              onChange={handleChange}
            />
            Tuesday
          </label>
          <label>
            <input
              type="checkbox"
              name="daysOfWeek"
              value="Wednesday"
              checked={formData.daysOfWeek.includes('Wednesday')}
              onChange={handleChange}
            />
            Wednesday
          </label>
          <label>
            <input
              type="checkbox"
              name="daysOfWeek"
              value="Thursday"
              checked={formData.daysOfWeek.includes('Thursday')}
              onChange={handleChange}
            />
            Thursday
          </label>
          <label>
            <input
              type="checkbox"
              name="daysOfWeek"
              value="Friday"
              checked={formData.daysOfWeek.includes('Friday')}
              onChange={handleChange}
            />
            Friday
          </label>
          <label>
            <input
              type="checkbox"
              name="daysOfWeek"
              value="Saturday"
              checked={formData.daysOfWeek.includes('Saturday')}
              onChange={handleChange}
            />
            Saturday
          </label>
          <label>
            <input
              type="checkbox"
              name="daysOfWeek"
              value="Sunday"
              checked={formData.daysOfWeek.includes('Sunday')}
              onChange={handleChange}
            />
            Sunday
          </label>
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