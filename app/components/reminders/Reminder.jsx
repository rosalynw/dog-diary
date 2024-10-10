'use client'

import Link from "next/link";

export default function Reminder({reminder}) {
  return (
    <tr className="reminder odd:bg-transparent even:bg-slate-300 even:text-black divide-x-8 dark:even:bg-slate-600 dark:divide-french">
      {/* remember to link title to single reminder page displaying with edit and delete options. */}
        <td className="font-bold px-2 py-3 max-w-32">{reminder ? reminder.title : ''}</td>
        <td className="px-2 hover:font-semibold"><Link href={`dashboard/pets/${reminder ? reminder.petName: ''}`}>{reminder ? reminder.petName: ''}</Link></td>
        <td className="px-2">{ reminder ? reminder.medication: ''}</td>
        <td className="px-2">{ reminder ? reminder.dosage: ''}</td>
        <td className="text-center">{ reminder ? reminder.repeat_hours: ''}</td>
        <td className="px-2">{ reminder ? reminder.startDate: ''}</td>
        <td className="px-2">{ reminder ? reminder.startTime: ''}</td>
        <td className="px-2">{ reminder ? reminder.endDate: ''}</td>
    </tr>
  )
} 