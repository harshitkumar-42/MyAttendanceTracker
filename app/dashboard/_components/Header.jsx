"use client"
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'

function Header() {
  const { user } = useKindeBrowserClient();

  return (
    <div className="p-4 bg-black shadow-md border border-gray-800 flex justify-between items-center">
      <div className="text-white text-lg font-bold transition-transform duration-300 hover:text-yellow-400 hover:scale-105">
        MyAttendanceTracker
      </div>
      <div>
        <img
          src={user?.picture}
          width={35}
          height={35}
          alt='user'
          className='rounded-full'
        />
      </div>
    </div>
  )
}

export default Header
