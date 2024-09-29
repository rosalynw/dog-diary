'use client'

export default function Reminder({reminder}) {
  return (
    <div className="reminder grid grid-cols-5">
        <h3 className="font-bold block">{reminder.title}</h3>
        <p>{reminder.medicineName}</p>
        <p>{reminder.administerTime}</p>
        <p>{reminder.daysOfWeek.join(', ')}</p>
        <p>{reminder.reminderLength}</p>
    </div>
  )
}