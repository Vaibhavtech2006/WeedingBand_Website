import React from 'react';

const WeddingLightingServices = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-yellow-100 via-orange-200 to-red-300">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-800 mt-20">Wedding Lighting Services</h1>
        <p className="text-lg text-gray-700 mt-4">Illuminate your wedding day with our exquisite lighting solutions. Whether you're looking for a romantic ambiance or a vibrant party atmosphere, we have the perfect lighting options to suit your vision.</p>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl text-gray-800 text-center mb-8">Our Lighting Offerings</h2>
        <div className="flex flex-wrap justify-around">
          <div className="bg-white p-6 m-4 rounded-lg shadow-lg w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-yellow-600 mb-4">Fairy Lights</h3>
            <p className="text-gray-600">Twinkling fairy lights create a magical atmosphere, perfect for weddings, outdoor ceremonies, or receptions. Their soft glow adds elegance and warmth to any setting.</p>
          </div>

          <div className="bg-white p-6 m-4 rounded-lg shadow-lg w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-orange-600 mb-4">LED Uplighting</h3>
            <p className="text-gray-600">Our LED uplighting highlights key areas of your venue, creating vibrant colors that match your theme and add depth and drama to your wedding decor.</p>
          </div>

          <div className="bg-white p-6 m-4 rounded-lg shadow-lg w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-red-600 mb-4">Chandeliers</h3>
            <p className="text-gray-600">For a touch of sophistication, our stunning chandeliers create a grand focal point, adding elegance and a regal atmosphere to your reception or ceremony.</p>
          </div>

          <div className="bg-white p-6 m-4 rounded-lg shadow-lg w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">String Lights</h3>
            <p className="text-gray-600">Versatile and enchanting, string lights can be draped across walls, ceilings, or outdoor spaces, creating a cozy and intimate setting for your wedding.</p>
          </div>

          <div className="bg-white p-6 m-4 rounded-lg shadow-lg w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-pink-600 mb-4">Spotlights</h3>
            <p className="text-gray-600">Our spotlights are perfect for drawing attention to special moments, such as your first dance or the cake cutting ceremony, making them even more memorable.</p>
          </div>
        </div>
      </section>

      <section className="text-center bg-yellow-50 py-12 rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800">Illuminate Your Dream Wedding</h2>
        <p className="text-lg text-gray-600 mt-4">Whether you want to create a warm and intimate setting or a bold, vibrant atmosphere, our lighting services will bring your wedding vision to life!</p>
        <button className="mt-8 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">Contact Us for More Info</button>
      </section>
    </div>
  );
}

export default WeddingLightingServices;
