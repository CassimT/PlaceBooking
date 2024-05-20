import React from 'react'
import HouseList from './HouseList'
import HouseListData from './HouseListData'

function Bookings() {
  return (

    <div className=' items-center pl-20 pr-10 m-10'>
    {HouseListData.map((item,index) => {
     return (
      <div> 
         <HouseList key = {index} price ={item.price} name ={item.hostelName} imgPath ={item.imgPath} roomCapacity={item.roomCapacity} status={item.status} ></HouseList>
         <hr className=''></hr>
      </div>
     
     ) 
    })}
      
    </div>

  )
}

export default Bookings
