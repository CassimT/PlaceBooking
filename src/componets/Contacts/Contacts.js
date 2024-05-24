import React from 'react'

function Contacts() {
return (
<div className=' container flex flex-col gap-5'>
  <h1 className="font-extrabold sm:text-5xl">Contact Our Friendly Team</h1> 
  <p className="font-sans font-bold sm:text-xl ">Let us know how we can help you.</p> 
  <div className="flex justify-center even round grid-cols-2 gap-24"> 
      <div  className="bg-gray-400 shadow flex-even rounded-3xl w-56 h-56"> 
          <img src="assets/icons/Location.png"alt="card image" className=" w-20 h-20 m-auto pt-5 "/>
          <h2 className="font bold font-sans ">Visit Us</h2> 
          <p className="font bold font-sans ">Visit our offices offline at</p> 
          <p className="font bold font-sans ">University of Malawi, Zomba</p> 
      </div> 
      <div  className="bg-gray-400 shadow flex-even rounded-3xl  w-56 h-56"> 
      <img src="assets/icons/Telephone Receiver.png" className=" w-20 h-20 m-auto pt-5"/>
          <h2 className="font bold font-sans ">Call Us</h2> 
          <p className="font bold font-sans ">Monday to Friday, 8am to 5pm</p> 
          <p className="font bold font-sans ">Phone: +265 888 452345</p> 
      </div> 
  </div> 
  <div className="flex justify-center items-center min-h-screen bg-white-100 ">
    <div className="w-1/2 bg-gray-400 rounded-lg shadow-lg max-w-3xl p-10">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <form>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name"
                       className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"/>
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email"
                       className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"/>
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Your message"
                          className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"></textarea>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Send
            </button>
        </form>
    </div>
</div>
</div>
)
}

export default Contacts;