import React from "react";

function MakePayments() {
  return ( 
  <div className="w-1/2 flex justify-center gap-20 fixed left-1/2 -translate-x-1/2  bg-white p-6 border border-gray-300  rounded-md shadow-2xl">
      <div className="flex justify-between gap-10">
        <div className="bg-slate-400 rounded-2xl">
<form className="flex flex-col max-w-xs mx-auto">
  <div className="mb-4">
    <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">Payment Method</label>
    <select id="paymentMethod" className="focus:outline-none focus:ring focus:border-blue-300 p-2 border border-gray-300 rounded-md">
      <option value="Paychangu">Paychangu</option>
      <option value="NB">NB</option>
      <option value="FirstCapitalBank">First Capital Bank</option>
      <option value="Mpamba">Mpamba</option>
    </select>
  </div>
  <div className="mb-4">
    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
    <input type="text" id="cardNumber" placeholder="Enter the Card Number" className="focus:outline-none focus:ring focus:border-blue-300 p-2 border border-gray-300 rounded-md"></input>
  </div>
  <div className="mb-4">
    <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
    <input type="text" id="amount" placeholder="Enter the Amount" className="focus:outline-none focus:ring focus:border-blue-300 p-2 border border-gray-300 rounded-md"></input>
  </div>
</form>


        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold">Booking summary</h1>
        <img src="assets/houses/house3.jpg" alt="Hazel" className=" rounded-md h-44"></img>
        <div className="flex gap-5 ">
       
          <div className="p-4 bg-transparent flex flex-col justify-start items-start rounded-md">
            <span>Sub total</span>
            <span>Discount</span>
            <span>Tax</span>
            <span>Total</span>
          </div>
          <div className="p-4 bg-transparent flex flex-col justify-start items-start rounded-md ">
            <span>K15000.00</span> 
            <span>K50.00</span>
            <span>K0.00</span>
            <span>K15050.00</span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Make Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MakePayments;
