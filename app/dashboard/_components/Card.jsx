import React from 'react';

function Card({ icon, title, value }) {
  return (
    <div className='flex items-center gap-5 p-7 bg-white rounded-lg shadow-md'>
      {/* Icon Box */}
      <div className='p-2 h-10 w-10 rounded-full bg-black flex items-center justify-center text-white'>
        {icon}
      </div>
      {/* Card Content */}
      <div>
        <h2 className='font-semibold text-gray-900'>{title}</h2>
        <h2 className='text-lg text-gray-700'>{value}</h2>
      </div>
    </div>
  );
}

export default Card;
