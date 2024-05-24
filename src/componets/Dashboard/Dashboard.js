import React from 'react';
import BestOffer from './BestOffer';

import imagePath from './house19.jpg'
import HouseListData from '../../data/HouseListData';

function Dashboard() {
 const bestHouse = HouseListData.filter(item => item.label === "Best")

  return (
    <div className="flex flex-col items-center w-full">
      <div className=" w-10/12 p-10">
      <div style={{backgroundImage: `url(${imagePath})`}} className="bg-cover bg-center mx-auto px-4 w-full h-96 shadow-2xl rounded-3xl relative">
    <div className="text-white absolute top-0 left-0 p-8 w-1/2">
        <h1 className="text-4xl font-bold mb-4">Welcome to our Student Accommodation Booking</h1>
        <p className="text-lg text-black font-extrabold">Find your ideal place to stay while studying. Book now and make your student life comfortable!</p>
    </div>
</div>


      </div>
      <h3 className="text-3xl font-semibold">Best Offer</h3>
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-11/12 p-10">
          {bestHouse.map((item, index) => (
            <BestOffer
              key={index}
              imgPath={item.imgPath}
              hostelName={item.hostelName}
              price={item.price}
              location={item.location}
              place={item.place} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
