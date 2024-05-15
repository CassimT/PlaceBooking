import React from 'react'
import BestOffer from './BestOffer'
import BestOfferData from './BestOfferData'

function Dashboard() {
  return (
<div className='items-center p-20'>
    <div className="grid grid-cols-3 gap-2 p-8">
<div></div>

    <div className="container mx-auto px-4 w-90 h-60 shadow-2xl rounded-3xl bg-slate-400 col-span-3">
      <div className="p-4">
        <h3 className="text-3xl font-semibold">Best Offer</h3>
      
          <div className="text-sm font-medium">HS HOSTEL</div>
          <div className="text-sm font-medium">HS HOSTEL</div>
          <div className="text-sm">LOCATION</div>
          <div className="text-sm">LOCATION</div>
        </div>
        
    </div>
    </div>
    
    <div className='grid grid-cols-2'>
    {BestOfferData.map((item,index)=>{
      return( 
        <BestOffer imgPath ={item.imgPath} name={item.name} price={item.price} location={item.location}></BestOffer>
      )
      
    })}
   </div>
   </div>
  )
}

export default Dashboard
