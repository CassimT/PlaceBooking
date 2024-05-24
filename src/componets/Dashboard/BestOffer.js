import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";

function BestOffer(props) {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate('/DetailsPage', { state: { House: props } });
  };

  const goTo = () => {
    navigate('/MakePaymentPage', { state: { House: props } });
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-sm bg-white shadow-md rounded-3xl overflow-hidden">
        <div className="flex">
          <img onClick={goToDetails} className="w-1/2 h-60 object-cover cursor-pointer" src={props.imgPath} alt={props.hostelName} />
          <div className="w-1/2 p-4 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">{props.hostelName}</h2>
              <p className="text-sm font-semibold">RENT PRICE</p>
              <h3 className="text-lg mb-2">{props.price}</h3>
              <img src='assets/icons/Location.png' className='w-6 h-6 m-auto' />
              <p className="text-sm">{props.location}</p>
              <p className="text-sm">{props.place}</p>
            </div>
            <button onClick={goTo} className="mt-4 bg-blue-600 text-white py-2 w-full rounded-lg hover:bg-blue-700">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestOffer;
