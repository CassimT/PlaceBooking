import React from 'react';

function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 left-30px">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
      
      </header>

      <main>
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-2xl font-light text-gray-800 mb-4">The future is written <br /> with us</p>
          <img className="mx-auto mb-4" src="./public/assets/avatas/avatar5.png" alt="Team" />
          <p className="text-gray-600">
            Discover your dream destinations effortlessly with Book your place. We've curated a diverse selection of accommodations to fit every need and budget. Our user-friendly interface ensures hassle-free booking, backed by exceptional service and top-notch security. Trust us to make your travel experience unforgettable, from start to finish.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
            <img className="w-24 h-24 rounded-full mb-2" src="C:\Users\PHAGO\OneDrive\Desktop\GroupProject\PlaceBooking\public\assets\avatas\avatar5.jpg" alt="Cassim Twaibu" />
            <h3 className="text-xl font-bold text-gray-800">Cassim Twaibu</h3>
            <p className="text-gray-600">Programmer</p>
          </div>
          
          
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
            <img className="w-24 h-24 rounded-full mb-2" src="path_to_your_image" alt="Team Member Name" />
            <h3 className="text-xl font-bold text-gray-800">Matilda Julio</h3>
            <p className="text-gray-600">CEO</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
            <img className="w-24 h-24 rounded-full mb-2" src="path_to_your_image" alt="Team Member Name" />
            <h3 className="text-xl font-bold text-gray-800">Rex</h3>
            <p className="text-gray-600">CTO</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
            <img className="w-24 h-24 rounded-full mb-2" src="path_to_your_image" alt="Team Member Name" />
            <h3 className="text-xl font-bold text-gray-800">Sestino simbani</h3>
            <p className="text-gray-600">Programmer</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
            <img className="w-24 h-24 rounded-full mb-2" src="path_to_your_image" alt="Team Member Name" />
            <h3 className="text-xl font-bold text-gray-800">Hazel</h3>
            <p className="text-gray-600">Managing Director</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
            <img className="w-24 h-24 rounded-full mb-2" src="path_to_your_image" alt="Team Member Name" />
            <h3 className="text-xl font-bold text-gray-800">Milabelle</h3>
            <p className="text-gray-600">CPO</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
            <img className="w-24 h-24 rounded-full mb-2" src="path_to_your_image" alt="Team Member Name" />
            <h3 className="text-xl font-bold text-gray-800">Edward</h3>
            <p className="text-gray-600">Programmer</p>
          </div>
          
        </section>
      </main>
    </div>
  );
}

export default AboutUs;
