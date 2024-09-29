'use client'

import Reminder from './Reminder'
import { useState } from "react"

export default function ReminderList({reminders}) {
  return (
    <div className='reminder-container flex flex-col py-6 px-12 w-5/12 space-y-3 rounded-lg shadow-lg'>
      <h1 className='font-bold text-4xl'>Reminders</h1>
      <div className="grid grid-cols-5 gap-0">
        <h2>Title</h2>
        <h2>Medicine</h2>
        <h2>Administer Time</h2>
        <h2>Days</h2>
        <h2>End Date</h2>
      </div>
      <div>
        {reminders.length > 0 ? (
        <ul className='auto-rows-auto'>
          {reminders.map((reminder, index) => (
            <li key={index}>
            <Reminder reminder={reminder} />
            </li>
        ))}
        </ul>
        ) : (
          <p>No reminders added yet.</p>
        )}
      </div>
    </div>
  )
}