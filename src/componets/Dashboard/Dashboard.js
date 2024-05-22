import React from 'react'
import BestOffer from './BestOffer'
import BestOfferData from './BestOfferData'

function Dashboard() {
  return (
<>
<div className="grid grid-cols-3 gap-2 p-8 items-start">
<div></div>
<div className="container mx-auto px-4 w-90 h-60 shadow-2xl rounded-3xl col-span-2 bg-[url('C:\BookYourPlace\PlaceBooking\src\componets\Dashboard\house19.jpg')]">
   <div className="grid grid-col-2 ">
        <div className="text-6xl font-semibold text-left p-4 ">Best Offer</div>
          <img src='C:\BookYourPlace\PlaceBooking\src\componets\Dashboard\Location.png'  className='w-20 h-20'/> Chkanda West
          <div className="text-sm font-medium">HS HOSTEL</div>
          <div className="text-sm">LOCATION</div>
          <div className="text-sm">LOCATION</div>
        </div>
           </div>
        </div>
    
    <div className="grid grid-cols-2 gap-4 place-items-end p-4">
    {BestOfferData.map((item,index)=>{
      return( 
        
        <BestOffer imgPath ={item.imgPath} name={item.name} price={item.price} location={item.location}></BestOffer>
      )
      
    })}
    </div>
    
   </>
  )
}

export default Dashboard
