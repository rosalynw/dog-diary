'use client'

import Reminder from './Reminder'
import { useState } from "react"

export default function ReminderList({reminders}) {
  return (
    <div className="reminder-container flex flex-col py-6 px-12 w-5/12 space-y-3 rounded-lg shadow-lg">
      <div className='flex flex-row justify-between'>
        <h1 className="font-bold text-4xl">Reminders</h1>
        <button type="button" className="py-2 px-6 font-semibold">Add New</button>
      </div>
      <table className='table-auto'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Medicine</th>
            <th>Administer Time</th>
            <th>Days</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {reminders.length > 0 ? (
            reminders.map((reminder, index) => (
              <Reminder key={index} reminder={reminder} />
          ))
          ) : (
            <tr>
              <td colSpan="5">No reminders added yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}