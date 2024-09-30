'use client'

export default function Reminder({reminder}) {
  return (
    <tr className="reminder">
        <td className="font-bold block">{reminder.title}</td>
        <td>{reminder.medicineName}</td>
        <td>{reminder.administerTime}</td>
        <td>{reminder.daysOfWeek.join(', ')}</td>
        <td>{reminder.reminderLength}</td>
    </tr>
  )
}