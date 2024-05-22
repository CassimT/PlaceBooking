import React from 'react';
import BestOffer from './BestOffer';
import BestOfferData from './BestOfferData';
import imagePath from './house19.jpg'
function Dashboard() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className=" w-10/12 p-10">
        <div style= {{backgroundImage: `url(${imagePath})`}}className="mx-auto px-4 w-full h-96 shadow-2xl rounded-3xl  flex flex-col justify-start items-start p-10 bg-cover">
          <div className="text-center place-content-start w-1/2 align-middle ">
          <div className="text-xl font-semibold font-serif text-white">We are here to give you a Fast,Simple and Secure way to</div>
          <div className="text-xl font-semibold font-serif text-white">find accommodation during your studies.</div>
          <div></div>
              <div className="text-xl font-serif font-bold text-white">Secure your spot today!</div>
          </div>
        </div>
      </div>
      <h3 className="text-4xl text-left font-semibold font-serif relative left-0">Best Offer</h3>
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
