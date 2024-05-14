import React from 'react'
const HouseList = ( props) => {
  return (
    <div className='relative container pt-3'>
        <div className=' relative h-28 bg-slate-300 pt-2 flex justify-between pl-22 items-center m-auto'>
          <img src ={props.imgPath} alt='' className=' w-32 h-24 pl-10 '></img>
          <span>{props.name}</span>
          <h1>{props.price}</h1>           
          <h1>{props.roomCapacity}</h1> 
          <h1 className=' pr-10'>{props.status}</h1>       
      </div>
    </div>
  
  )
}

export default HouseList
