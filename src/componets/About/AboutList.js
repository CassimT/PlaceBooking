import React from 'react';

function AboutList(props) {
  return (
    <div className='flex flex-col items-center bg: transparent p-4 rounded-lg m-auto '>
      <img src={props.imgpath} alt='Imagey' className='w-16 h-16 rounded-full mb-4 cursor-pointer' /> 
      <div className='flex flex-col items-center'>
        <span className="text-lg font-semibold text-gray-800 mb-2">{props.name}</span>
        <h1 className="text-md text-gray-600">{props.position}</h1>        
      </div>
    </div>
  );
}

export default AboutList;
