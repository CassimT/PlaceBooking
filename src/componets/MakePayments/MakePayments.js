import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function MakePayments() {
  const navigate = useNavigate();
  const location = useLocation();
  const { House } = location.state;

  const gotoPayments = () => {
    navigate('/PaymentsPage');
  };

  return (
    <div className="w-2/3 flex justify-center gap-20 fixed left-1/2 -translate-x-1/2 bg-white p-6  rounded-md shadow-2xl">
      <div className="flex justify-between gap-10">
        <form className=" bg-slate-500 rounded-lg shadow-lg max-w-3xl p-10">
          <label htmlFor="paymentMethod" className="block text-sm font-medium text-black">Payment Method</label>
          <select id="paymentMethod" className=" w-full focus:outline-none focus:ring focus:border-blue-300 p-2 border border-white rounded-md bg-transparent text-black">
            <option value="Paychangu">Paychangu</option>
            <option value="NB">NB</option>
            <option value="FirstCapitalBank">First Capital Bank</option>
            <option value="Mpamba">Mpamba</option>
          </select>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-black mt-4">Card Number</label>
          <input type="text" id="cardNumber" placeholder="Enter the Card Number" className="focus:outline-none focus:ring focus:border-blue-300 p-2 border border-white rounded-md bg-transparent text-white" />
          <label htmlFor="amount" className="block text-sm font-medium text-black mt-4">Amount</label>
          <input type="text" id="amount" placeholder="Enter the Amount" className="focus:outline-none focus:ring focus:border-blue-300 p-2 border border-white rounded-md bg-transparent text-white" />
        </form>
      </div>
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold text-black">Booking summary</h1>
        <img src={House.imgPath} alt="Hazel" className="rounded-md h-44 mt-4" />
        <div className="flex gap-5 mt-4">
          <div className="p-4 bg-transparent flex flex-col justify-start items-start rounded-md text-black">
            <span>Sub total</span>
            <span>Discount</span>
            <span>Tax</span>
            <span>Total</span>
          </div>
          <div className="p-4 bg-transparent flex flex-col justify-start items-start rounded-md text-black">
            <span>K{House.price}</span>
            <span>K50.00</span>
            <span>K0.00</span>
            <span>{`K${(parseFloat(House.price) - 50.00).toFixed(2)}`}</span>
            <button onClick={gotoPayments} className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-4">Make Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MakePayments;
