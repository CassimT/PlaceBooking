import React from 'react'
import BestOffer from './BestOffer'
import BestOfferData from './BestOfferData'

function Dashboard() {
  return (
    <div className='items-center p-20 '>
    <div className="container mx-auto px-4 w-full h-60 shadow-md rounded-3xl bg-slate-400">
      <div className="  grid grid-cols-2 gap-4 bg-slate-400 rounded-lg shadow-inner"> 
      <div className="p-4">
        <h3 className="text-3xl font-semibold">Best Offer</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="text-sm font-medium">HS HOSTEL</div>
          <div className="text-sm font-medium">HS HOSTEL</div>
          <div className="text-sm">LOCATION</div>
          <div className="text-sm">LOCATION</div>
        </div>
        
    </div>
    <>
    <div className="grid grid-cols-3 gap-2 p-8">
<div></div>
<div className="container mx-auto px-4 w-90 h-60 shadow-2xl rounded-3xl bg-slate-400 col-span-2">
    <div className="p-4">
    <h3 className="text-3xl font-semibold">Best Offer</h3>
    </div>
    </div>
  
    <br></br>
   
    <div className="grid grid-cols-2 gap-4 place-items-center">
    <div className=" container mx-sm px-4 w-85 h-60 shadow-md rounded-3xl bg-slate-400 p-4">
      <div className=" grid grid-cols-2 gap-4 bg-slate-400 bg-blend-color box-shadow-md overflow-hidden"> 
      <div className="p-4">
        <h3 className="text-lg font-semibold">Chikanda west</h3>
        <div className ="conatiner rounded-2xl w-70 h-20 bg-blue-950 "> 
        <button>Book Now</button>
        </div>
        </div>
        </div>
      
        
   </div>
   <div className=" container mx-sm px-4 w-90 h-60 shadow-md rounded-3xl bg-slate-400 p-4">
      <div className=" grid grid-cols-2 gap-4 bg-slate-400 bg-blend-color box-shadow-md overflow-hidden"> 
      <div className="p-4">
        <h3 className="text-lg font-semibold">Chikanda west</h3>
        <div className="grid grid-cols-2 gap-2"></div>
        </div>
        </div>
        
   </div>
   <div className=" container mx-sm px-4 w-100 h-60 shadow-md rounded-3xl bg-slate-400 p-4">
      <div className=" grid grid-cols-2 gap-4 bg-slate-400 bg-blend-color box-shadow-md overflow-hidden"> 
      <div className="p-4">
        <h3 className="text-lg font-semibold">Chikanda west</h3>
        <div className="grid grid-cols-2 gap-2"></div>
        </div>
        </div>
        
   </div>
   <div className=" container mx-sm px-4 w-90 h-60 shadow-md rounded-3xl bg-slate-400 p-4">
      <div className=" grid grid-cols-2 gap-4 bg-slate-400 bg-blend-color box-shadow-md overflow-hidden"> 
      <div className="p-4">
        <h3 className="text-lg font-semibold">Chikanda west</h3>
        <div className="grid grid-cols-2 gap-2"></div>
        </div>
        </div>
        
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
   </>
  )
}

export default Dashboard
