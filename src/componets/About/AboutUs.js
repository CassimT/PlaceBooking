
import React from "react";
import AboutDataList from "./AboutDataList";
import AboutList from "./AboutList";

function AboutUs(props) {
  return (

    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      
      <main>
      <h2 class="text-2xl font-bold">About us</h2>
    <p class="text-sm text-gray-500 mt-1">The future is written with us</p>

        <div class="flex justify-center mb-6 ">
          <img class="w-84 h-56 object-cover rounded-3xl border-2 shadow-md shadow-red-600" src="assets/avatas/avatar14.jpg" alt="Team" />
        </div>
        <div class="space-y-1 text-lg text-gray-500 leading-relaxed">
          <h3>Discover your dream destinations effortlessly with Book your place.</h3>
          <h3>We've curated a diverse selection of accommodations to fit every need and budget.</h3>
          <h3>Our user-friendly interface ensures hassle-free booking, backed by exceptional service and top-notch security.</h3>
          <h3>Trust us to make your travel experience unforgettable, from start to finish.</h3>
        </div>
      </main>


      <div className="mt-6 font-bold">
        <h2 className="m-auto">Meet Our Team</h2>
      </div>
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