import React from 'react'
import HouseList from './HouseList'
import HouseListData from './HouseListData'

function Bookings() {
  return (
    <div className=' flex flex-col'>
    {HouseListData.map((item,index) => {
     return (
      <HouseList price ={item.price} name ={item.hostelName} imgPath ={item.imgPath} roomCapacity={item.roomCapacity} status={item.status} ></HouseList>
     ) 
    })}
      
    </div>
  )
}

export default Bookings
