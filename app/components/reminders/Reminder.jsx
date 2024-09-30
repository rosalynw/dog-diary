'use client'

export default function Reminder({reminder}) {
  return (
    <tr className="reminder odd:bg-transparent even:bg-slate-300 even:text-black">
        <td className="font-bold px-6 py-3">{reminder.title}</td>
        <td>{reminder.medicineName}</td>
        <td>{reminder.administerTime}</td>
        <td>{reminder.daysOfWeek.join(', ')}</td>
        <td>{reminder.reminderLength}</td>
    </tr>
  )
}