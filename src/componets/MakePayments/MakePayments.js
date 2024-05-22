import React from 'react'
import { useState } from 'react';

function MakePayments() {
  const [paymentDetails, setPaymentDetails] = useState({
    paymentMethod: '',
    cardNumber: '',
    amount: ''
    });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Payment Details:', paymentDetails);
  };
  return (<div className="w-10/12 h-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 border border-gray-300 z-10 rounded-md shadow-2xl">
  <div className="min-h-screen flex items-center justify-center gap-10 bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-md bg-transparent w-1/2">
      <h1 className="text-center mb-4">Making Payments</h1>
      <form onSubmit={handleSubmit}>              
        <label htmlFor="paymentMethod" className="block text-gray-700">
          Payment Method:
        </label>

        <select
          id="paymentMethod"
          name="paymentMethod"                                                                                                                                 
          value={paymentDetails.paymentMethod}
          onChange={handleChange}
          className="mt-2 block w-full p-2 rounded-md"
        >               
          <option value="">Select Payment Method</option>
          <option value="payChangu">Pay Changu</option>
          <option value="nb">NB</option>
          <option value="firstCapitalBank">First Capital Bank</option>
          <option value="mpamba">Mpamba</option>
        </select>

        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-gray-700">
            Card Number:
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleChange}
            required
            className="mt-2 block w-full p-2 border rounded-md"
            placeholder="Enter Card Number"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700">
            Amount:
          </label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={paymentDetails.amount}
            onChange={handleChange}
            required
            className="mt-2 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter Amount"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit Payment
        </button>
      </form>
    </div>
    <div className="mt-8 bg-gray-200 p-3 rounded-lg flex flex-col h-150 w-1/2 items-center justify-between">
      <img
        src="assets/houses/house16.jpg"
        alt="Namadidi Hostel"
        className="h-24 w-24 rounded-lg mr-4"
      />
      <div>
        <h3 className="font-semibold">Namadidi Hostel</h3>
        <p className="text-gray-600">Sub total</p>
        <p className="text-gray-600">Discount</p>
        <p className="text-gray-600">Tax</p>
        <p className="text-gray-600">Total</p>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
        Make Payment
      
              </button>
            </div>

        </div>
    </div>
  )      
}


export default MakePayments
