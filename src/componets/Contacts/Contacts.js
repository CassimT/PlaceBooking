import React from 'react'

function Contacts() {
return (
<div className=' container flex flex-col gap-5'>
  <h1 className="font-extrabold sm:text-5xl">Contact Our Friendly Team</h1> 
  <p className="font-sans font-bold sm:text-xl ">Let us know how we can help you.</p> 
  <div className="flex justify-center even round grid-cols-2 gap-24"> 
      <div  className="bg-gray-300 shadow flex-even rounded-3xl w-[371px] h-[331px]"> 
          <img src="assets/icons/Location.png"alt="card image" className=" w-20 h-20 m-auto pt-5 "/>
          <h2 className="font bold font-sans ">Visit Us</h2> 
          <p className="font bold font-sans ">Visit our offices offline at</p> 
          <p className="font bold font-sans ">University of Malawi, Zomba</p> 
      </div> 
      <div  className="bg-gray-300 shadow flex-even rounded-3xl w-[371px] h-[331px]"> 
      <img src="assets/icons/Telephone Receiver.png" className=" w-20 h-20 m-auto pt-5"/>
          <h2 className="font bold font-sans ">Call Us</h2> 
          <p className="font bold font-sans ">Monday to Friday, 8am to 5pm</p> 
          <p className="font bold font-sans ">Phone: +265 888 452345</p> 
      </div> 
  </div> 
  <div className=" bg-gray-300 rounded shadow ">
  <h2>Contact Form</h2> 
      <form/> 
      <label for="name" className="block text-base mb-2">Name:</label> 
      <input type="text" id="name" name="name" placeholder="Your Name" required/>
      <label for="email" class="block">Email Address:</label> 
      <input type="email" id="email" name="email" placeholder="Your Email" required/>
      <label for="message" class="block">Message:</label> 
      <textarea id="message" name="message" placeholder="Leave your message here" rows="4" required></textarea>
      <input className="" type="submit" value="Send"/> 
    <form/> 
  </div>
</div>  
  )
}

export default Contacts
