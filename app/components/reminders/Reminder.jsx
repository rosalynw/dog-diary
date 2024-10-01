'use client'

export default function Reminder({reminder}) {
  return (
    <tr className="reminder odd:bg-transparent even:bg-slate-300 even:text-black">
        <td className="font-bold px-6 py-3">{reminder.title}</td>
        <td>{reminder.medicineName}</td>
        <td>{reminder.dosageTime}</td>
        <td>{reminder.repeatEvery}</td>
        <td>{reminder.startDate}</td>
        <td className="">{reminder.endDate}</td>
    </tr>
  )
}