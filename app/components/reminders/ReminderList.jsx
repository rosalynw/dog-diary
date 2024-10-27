'use client'

import Reminder from './Reminder'
//remove lines
// import { useState } from "react"
// import NewReminder from './NewReminder'

export default function ReminderList({reminders, onAddNewClick}) {
  return (
    <div className="container flex flex-col py-6 px-12 w-fit space-y-3 rounded-lg shadow-lg max-h-96">
      <div className='flex flex-row justify-between'>
        <h1 className="font-bold text-4xl">Reminders</h1>
        <button 
          type="button" 
          className="py-2 px-6 font-semibold bg-french rounded-lg text-gray-300 hover:text-gray-50"
          onClick={onAddNewClick}
        >
          Add New
        </button> 
      </div>
      <div className='border rounded-lg relative overflow-auto border-regal dark:border-french'>
        <table className="table-fixed w-full divide-y max-w-5xl divide-gray-300 dark:divide-gray-700">
          <thead className="bg-regal text-left dark:bg-french">
            <tr>
              <th scope='col' className='sticky top-0 py-2 px-2 bg-regal text-gray-300 text-center'>Title</th>
              <th scope='col' className='sticky top-0 py-2 px-2 bg-regal text-gray-300 text-center'>Pet</th>
              <th scope='col' className='sticky top-0 py-2 px-2 bg-regal text-gray-300 text-center'>Medicine</th>
              <th scope='col' className='sticky top-0 py-2 px-2 bg-regal text-gray-300 text-center'>Dosage</th>
              <th scope='col' className='sticky top-0 py-2 px-2 bg-regal text-gray-300 text-center'>Repeat (Hours)</th>
              <th scope='col' className='sticky top-0 py-2 px-2 bg-regal text-gray-300 text-center'>Start Date</th>
              <th scope='col' className='sticky top-0 py-2 px-2 bg-regal text-gray-300 text-center'>Start Time</th>
              <th scope='col' className='sticky top-0 py-2 px-2 bg-regal text-gray-300 text-center'>End Date</th>
            </tr>
          </thead>
          <tbody className=''>
            {reminders.length > 0 ? (
              reminders.map((reminder, index) => (
                <Reminder key={index} reminder={reminder} />
            ))
            ) : (
              <tr className='dark:bg-gray-500'>
                <td colSpan="8" className='p-2 py-3 text-center font-semibold'>No reminders added yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}