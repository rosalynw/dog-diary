'use client'

import Link from "next/link";

export default function Reminder({reminder}) {
  return (
    <tr className="reminder odd:bg-transparent even:bg-slate-300 even:text-black divide-x-8 dark:even:bg-slate-600 dark:divide-french">
        <td className="font-bold px-2 py-3 max-w-32">{reminder.title}</td>
        <td className="px-2 hover:font-semibold"><Link href={`/pets/${reminder.petName}`}>{reminder.petName}</Link></td>
        <td className="px-2">{reminder.medicineName}</td>
        <td className="px-2">{reminder.dosageTime}</td>
        <td className="text-center">{reminder.repeatEvery}</td>
        <td className="px-2">{reminder.startDate}</td>
        <td className="px-2">{reminder.endDate}</td>
    </tr>
  )
}