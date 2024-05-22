import React from 'react';
import BestOffer from './BestOffer';
import BestOfferData from './BestOfferData';

function Dashboard() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className=" w-10/12 p-10">
        <div className="mx-auto px-4 w-full h-96 shadow-2xl rounded-3xl bg-[url('C:\BookYourPlace\PlaceBooking\src\componets\Dashboard\house19.jpg')] flex flex-col justify-center items-center ">
          <div className="text-center ">
            <h3 className="text-4xl text-left font-semibold font-serif">Best Offer</h3>
            <div className="text-sm font-medium">Secure your spot today!</div>
            <div className="text-sm font-medium">HS HOSTEL</div>
            <div className="text-sm">LOCATION</div>
            <div className="text-sm">LOCATION</div>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-11/12 p-10">
          {BestOfferData.map((item, index) => (
            <BestOffer
              key={index}
              imgPath={item.imgPath}
              name={item.name}
              price={item.price}
              location={item.location}
              place={item.place} // Assuming place is a valid prop
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
