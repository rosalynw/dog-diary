'use client'

import Link from "next/link";

export default function Reminder({reminder}) {
  return (
    <tr className="reminder odd:bg-transparent even:bg-slate-300 even:text-black divide-x-8 dark:even:bg-slate-600 dark:divide-french">
      {/* remember to link title to single reminder page displaying with edit and delete options. */}
        <td className="font-bold px-2 py-3 max-w-32">{reminder.title}</td>
        <td className="px-4 hover:font-semibold"><Link href={`dashboard/pets/${reminder.pet_id}`}>{reminder.petName}</Link></td>
        <td className="px-2">{reminder.medication}</td>
        <td className="px-2">{reminder.dosage}</td>
        <td className="text-center">{reminder.repeat_hours}</td>
        <td className="px-2">{reminder.start_date}</td>
        <td className="px-2">{reminder.start_time}</td>
        <td className="px-2">{reminder.end_date}</td>
    </tr>
  )
} 