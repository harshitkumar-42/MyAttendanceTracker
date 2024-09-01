"use client";
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { GraduationCap, Hand, LayoutIcon, Settings } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

function SideNav() {
  const { user } = useKindeBrowserClient();

  const menuList = [
    {
      id: 1,
      name: 'Dashboard',
      icon: LayoutIcon,
      path: '/dashboard',
    },
    {
      id: 2,
      name: 'Students',
      icon: GraduationCap,
      path: '/dashboard/students',
    },
    {
      id: 3,
      name: 'Attendance',
      icon: Hand,
      path: '/dashboard/attendance',
    },
    {
      id: 4,
      name: 'Settings',
      icon: Settings,
      path: '/dashboard/settings',
    },
  ];

  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className='border shadow-md h-screen p-5 bg-white'>
      {/* Icon at the top */}
      <div className='flex justify-center mb-5 p-3 bg-black rounded-full'>
        <LayoutIcon className='text-4xl text-white' />
      </div>

      <hr className='my-5' />

      {menuList.map((menu) => (
        <Link href={menu.path} key={menu.id}>
          <h2
            className={`flex items-center gap-3 text-md p-4 text-gray-700 hover:bg-gray-200 hover:text-black cursor-pointer rounded-lg my-2
            ${path === menu.path ? 'bg-gray-200 text-black' : ''}`}
          >
            <menu.icon className='text-lg' />
            {menu.name}
          </h2>
        </Link>
      ))}

      <div className='flex gap-2 items-center bottom-5 fixed p-2'>
        <Image
          src={user?.picture}
          width={35}
          height={35}
          alt='user'
          className='rounded-full'
        />
        <div>
          <h2 className='text-sm font-semibold'>{user?.given_name} {user?.family_name}</h2>
          <h2 className='text-xs text-gray-500'>{user?.email}</h2>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
