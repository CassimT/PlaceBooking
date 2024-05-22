import React from 'react';

function BestOffer(props) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-sm bg-white shadow-md rounded-3xl overflow-hidden">
        <div className="flex">
          <img className="w-1/2 h-60 object-cover" src={props.imgPath} alt={props.name} />
          <div className="w-1/2 p-4 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">{props.name}</h2>
              <p className="text-sm font-semibold">RENT PRICE</p>
              <h3 className="text-lg mb-2">{props.price}</h3>
              <p className="text-sm">{props.location}</p>
              <p className="text-sm">{props.place}</p>
            </div>
            <button className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestOffer;
