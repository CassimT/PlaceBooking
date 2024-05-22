// src/components/RoomDetails.js
import React from 'react';

function RoomDetails() {
  return (

    <div className="w-10/12 h-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 p-6 border border-gray-300 z-10 rounded-md shadow-2xl">
    <div className='flex flex-col items-center bg-slate w-full min-h-screen p-8'>
      <h1 className='text-4xl font-bold mb-8 text-center'>Room Details</h1>
        
      <div className='relative bg-white w-full max-w-4xl overflow-hidden rounded-lg shadow-lg'>
        <img src='assets/houses/house8.jpg' alt='Room' className='w-full h-full object-cover' />
      </div>

      <div className='text-center mt-8'>
        <h2 className='text-2xl font-semibold'>Bills and water inclusive</h2>
      </div>

      <div className='text-center mt-4'>
        <div className='flex flex-col items-center'>
          <div className='flex items-center space-x-2'>
            <span className='text-red-500'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className='w-6 h-6'>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 0110 10v5a10 10 0 01-10 10A10 10 0 012 17v-5A10 10 0 0112 2z" />
              </svg>
            </span>
            <span className='text-lg font-medium'>Chikanda west</span>
          </div>
          <div className='mt-2 text-gray-600'>
            <p>Near SDA Church</p>
            <p>2 km from the school campus</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default RoomDetails;
