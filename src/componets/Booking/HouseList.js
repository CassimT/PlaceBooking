import React from 'react'
const HouseList = ( props) => {
  return (
    <div className=' container pt-6'>
        <div className=' w-screen h-28 bg-slate-300 pt-2 flex justify-between pl-80 pr-10 items-center'>
          <img src ={props.imgPath} alt='' className=' w-20 h-20'></img>
          <span>{props.name}</span>
          <h1>{props.price}</h1>           
          <h1>{props.roomCapacity}</h1> 
          <h1>{props.status}</h1>       
      </div>
    </div>
  
  )
}

export default HouseList
