import React from 'react';

const TurbanTireService = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-100 via-orange-200 to-red-300 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mt-20">Turban Tire Service</h1>
        <p className="text-lg text-gray-700 mt-4">Add a unique traditional touch to your wedding with our premium Turban Tire services. We specialize in crafting elaborate turban designs and tire decorations that perfectly complement the elegance of your ceremony.</p>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl text-gray-800 text-center mb-8">Our Turban Tire Services Include</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white p-6 rounded-lg shadow-xl w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-yellow-600 mb-4">Traditional Turban Design</h3>
            <p className="text-gray-600">Our expert artisans craft stunning turban designs that add a regal touch to your wedding. The traditional art of turban styling is infused with modern elegance for a unique look.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-orange-600 mb-4">Customized Tire Decorations</h3>
            <p className="text-gray-600">Our tire decoration service transforms ordinary tires into works of art. We use premium materials to create vibrant, intricate designs that add a personalized touch to your wedding procession.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-red-600 mb-4">Royal Wedding Procession</h3>
            <p className="text-gray-600">Enhance your wedding procession with our beautifully designed turbans and tire decorations. The combination of regal turbans and unique tire styling will make your ceremony unforgettable.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-yellow-600 mb-4">Traditional Turban with Modern Twist</h3>
            <p className="text-gray-600">We offer a fusion of traditional turban styles with contemporary elements. Our designs cater to your personal preferences, ensuring that you look your best on your special day.</p>
          </div>
        </div>
      </section>

      <section className="text-center bg-yellow-50 py-12 rounded-lg mt-12">
        <h2 className="text-3xl font-semibold text-gray-800">Make Your Wedding Day Extra Special</h2>
        <p className="text-lg text-gray-600 mt-4">Our Turban Tire Services are designed to elevate the cultural beauty of your wedding. Let us help you create a grand atmosphere with our exquisite and personalized decorations.</p>
       
      </section>
    </div>
  );
}

export default TurbanTireService;
