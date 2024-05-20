// ImageLink.js
import React from 'react';
import { Link } from 'react-router-dom';

function ImageLink({ imgPath, name, price, roomCapacity, status }) {
  return (
    <div className="relative bg-slate-300 p-4 flex items-center border-gray-400 transition transform hover:scale-105 hover:shadow-lg w-full">
      <Link to="/Details" className="flex-shrink-0">
        <img src={imgPath} alt={name} className="w-24 h-16 md:w-32 md:h-24 cursor-pointer transition transform hover:scale-110" />
      </Link>
      <div className="flex-grow flex flex-col md:flex-row justify-between items-start md:items-center pl-4 space-y-2 md:space-y-0">
        <span className="bg-slate-300 p-2 md:p-4 lg:p-6 transition-colors duration-200 hover:bg-slate-400">{name}</span>
        <h1 className="bg-slate-300 p-2 md:p-4 lg:p-6 transition-colors duration-200 hover:bg-slate-400">{price}</h1>
        <h1 className="bg-slate-300 p-2 md:p-4 lg:p-6 transition-colors duration-200 hover:bg-slate-400">{roomCapacity}</h1>
        <h1 className="bg-slate-300 p-2 md:p-4 lg:p-6 transition-colors duration-200 hover:bg-slate-400">{status}</h1>
        <button className="bg-blue-600 rounded-full text-white h-8 w-16 md:w-20 font-serif transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default ImageLink;
