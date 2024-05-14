import React from 'react'

function BestOffer (props) {
  return (
    
    <>    
   
    <div className= "grid items-end p-4">

         <div className=" container mx-sm px-4 w-70 h-60 shadow-md rounded-3xl bg-slate-400 p-4 place-content-center">
      <div className=" grid grid-cols-2 grid-row-2 gap-4 bg-slate-400 bg-blend-color  overflow-hidden"> 
      <div className="p-4">
      <img className='rounded-2xl' src={props.imgPath} alt='' ></img>
        </div>
      <div>
        <div className="conatiner bg-slate-300 rounded-xl w-50">
        <span className= "text-lg font-bold font-calibre text-center ">{props.name}</span>
        <p className='rent font-bold text-center'>RENT PRICE</p>
        <h1>{props.price}</h1>
        <p>{props.location}</p>
        <p>{props.place}</p>
        </div>
        <br></br>
        <button className='button bg-slate-950 rounded text-white h-8 w-20 font-serif'>Book Now</button>
        </div>
        </div>     
        </div>
        </div>
        
        
      </>
      
 )
}

export default BestOffer