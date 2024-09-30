'use client'

import Reminder from './Reminder'
import { useState } from "react"
import NewReminder from './NewReminder'

export default function ReminderList({reminders, onAddNewClick}) {


  return (
    <div className="reminder-container flex flex-col py-6 px-12 w-6/12 space-y-3 rounded-lg shadow-lg">
      <div className='flex flex-row justify-between'>
        <h1 className="font-bold text-4xl">Reminders</h1>
        <button 
          type="button" 
          className="py-2 px-6 font-semibold bg-french rounded-lg"
          onClick={onAddNewClick}
        >
          Add New
        </button>
      </div>
      <div className='border rounded-lg overflow-hidden border-gray-800 dark:border-gray-500'>
        <table className="table-fixed w-full divide-y divide-gray-300 dark:divide-gray-700">
          <thead className="bg-regal">
            <tr>
              <th scope='col' className='px-2 py-4 text-gray-300'>Title</th>
              <th scope='col' className='px-2 text-gray-300'>Medicine</th>
              <th scope='col' className='px-2 text-gray-300'>Administer Time</th>
              <th scope='col' className='px-2 text-gray-300'>Days</th>
              <th scope='col' className='px-2 text-gray-300'>End Date</th>
            </tr>
          </thead>
          <tbody>
            {reminders.length > 0 ? (
              reminders.map((reminder, index) => (
                <Reminder key={index} reminder={reminder} />
            ))
            ) : (
              <tr>
                <td colSpan="5" className='p-2'>No reminders added yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}