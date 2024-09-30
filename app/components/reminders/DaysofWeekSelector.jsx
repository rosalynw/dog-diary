'use client'

export default function DaysofWeekSelector({selectedDays, handleChange }) {

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div className="w-full">
      <div className="font-semibold">Days of the Week</div>
      <div className="dayContainer grid grid-cols-1 gap-1 border border-gray-400 rounded-lg">
        {days.map(day => (
          <div key={day} className="flex justify-between border-b w-full p-2">
            <label htmlFor={day}>{day}</label>
            <input
              className="w-4 h-4"
              id={day}
              type="checkbox"
              name="daysOfWeek"
              value={day}
              checked={selectedDays.includes(day)}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
}