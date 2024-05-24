// src/components/RoomDetails.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import HouseListData from '../../data/HouseListData';

function RoomDetails() {
  const location = useLocation()
  const {House} = location.state
  const filsterdHouse = HouseListData.filter(item => item.hostelName === House.hostelName);
  return (

    <div className="w-1/2 h-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 p-6 border border-gray-300 z-10 rounded-md shadow-2xl overflow-y-auto">
    <div className='flex flex-col items-center bg-slate w-full min-h-screen p-8'>
      <h1 className='text-4xl font-bold mb-8 text-left'>Room Details</h1>
        
      <div className='relative bg-white w-full max-w-4xl overflow-hidden rounded-3xl shadow-md'>
      {
            filsterdHouse.map((item, index) => {
              return (
                <img key={index} src={item.roomPath} alt='Room' className='w-full h-96 object-cover' />
              )
            })
           }
       
      </div>

      <div className='text-center mt-8'>
        <h2 className='text-2xl font-semibold'>Bills and water inclusive</h2>
      </div>

      <div className='text-center mt-4'>
        <div className='flex flex-col items-center'>
          <div className='flex items-center space-x-2'>
            
            <span className='text-red-500'>
              <img src='assets/icons/Location.png' className='w-6 h-6' />
              
            </span>
            
            <span className='text-lg font-medium'>Chikanda west</span>
          </div>
          <div className='mt-2 text-black-600'>
            
           {
            filsterdHouse.map((item, index) => {
              return (
                <>
                <p>Near SDA Church</p>
                <p> {item.distance} from the school campus</p>
                </>
              )
            })
           }
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default RoomDetails;
