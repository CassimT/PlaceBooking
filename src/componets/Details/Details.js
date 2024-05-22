
// src/components/RoomDetails.js
import React from 'react';

const RoomDetails = ({ room }) => {
  return (
    <div className="w-full max-w-md h-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 border border-gray-300 z-10 rounded-md shadow-2xl">
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h1 className="text-3xl font-bold mb-6">Room details</h1>
          <div className="relative">
            <img
              src={room.image}
              alt="Room"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
          </div>
          <h2 className="text-xl font-semibold mb-2">{room.hostelName}</h2>
          <p className="text-gray-700 mb-2"><strong>Landlord:</strong> {room.landlord}</p>
          <p className="text-gray-700 mb-2"><strong>Phone Number:</strong> {room.phoneNumber}</p>
          <p className="text-gray-700 mb-2"><strong>Room Capacity:</strong> {room.capacity}</p>
          <p className="text-gray-700 mb-2"><strong>Price:</strong> {room.price}</p>
          <p className="text-gray-700 mb-4"><strong>Status:</strong> {room.status}</p>
          <div className="flex items-center mb-4">
            <div className="text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 12l4.243-4.243a6 6 0 10-8.485 8.485L12 17.657l4.243-4.243z"
                />
              </svg>
            </div>
            <span className="ml-2 text-gray-600">{room.location}</span>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};


export default RoomDetails