
import React from "react";
import AboutDataList from "./AboutDataList";
import AboutList from "./AboutList";

function AboutUs(props) {
  return (

    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <header className="flex justify-center items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
      </header>

      <main>

        <p className="text-md font-light text-gray-800 mb-4 -m-1">The future is written</p>
        <p>with us</p>

        <section className="bg-white p-6 mb-8 w-1/2 m-auto shadow-md shadow-red-500 rounded-3xl">
          <div className="flex justify-center items-center h-64">
            <div className="w-72 h-48 overflow-hidden rounded-lg">
              <img className="w-full h-full object-cover" src="assets/avatas/avatar14.jpg" alt="Team" />
            </div>
          </div>
        </section>

        <div className="bg-transparent"><p className="text-gray-600 mt-4 text-center align-middle w-10/12 m-auto">
          Discover your dream destinations effortlessly with Book
          your place. We've curated a diverse selection of 
          accommodations to fit every need and budget. Our user-friendly interface ensures hassle-free booking 
          backed  
          by exceptional service and top-notch security. Trust us to  
          make your travel experience unforgettable, from start to finish.
        </p>
        </div>
      </main>


      <div className="grid grid-cols-4 gap-1 w-1/2 m-auto">
        {AboutDataList.map((item, index) => (
          <AboutList
            key={index}
            imgpath={item.imgpath}
            name={item.name}
            position={item.position}
          />
        ))}
      </div>
    </div>
  );
}

export default AboutUs;