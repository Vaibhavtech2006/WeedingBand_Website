import React from 'react';

const WeddingBandServices = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-300 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mt-20">Wedding Band Services</h1>
        <p className="text-lg text-gray-700 mt-4">Our Wedding Band Services bring the rhythm and magic to your wedding day. From energetic performances to romantic melodies, our bands create an unforgettable atmosphere for your celebration.</p>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl text-gray-800 text-center mb-8">Our Wedding Band Services Include</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white p-6 rounded-lg shadow-xl w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Live Performance Bands</h3>
            <p className="text-gray-600">Our live bands perform your favorite songs with energy and passion. From traditional to contemporary music, we create the perfect soundtrack for your wedding day.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">DJ + Live Band Combo</h3>
            <p className="text-gray-600">For an elevated experience, our DJ + live band combo is a perfect choice. Enjoy the best of both worlds with seamless transitions between DJ sets and live music performances.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-pink-600 mb-4">Classical & Fusion Bands</h3>
            <p className="text-gray-600">Whether you're looking for classical elegance or fusion beats, our specialized bands provide a wide range of music genres to match the vibe and style of your wedding.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-yellow-600 mb-4">Traditional Wedding Music</h3>
            <p className="text-gray-600">Immerse your guests in the essence of tradition with our classic wedding music ensembles. From cultural tunes to wedding procession melodies, we set the tone for every moment.</p>
          </div>
        </div>
      </section>

      <section className="text-center bg-indigo-50 py-12 rounded-lg mt-12">
        <h2 className="text-3xl font-semibold text-gray-800">Let Music Create the Perfect Wedding Atmosphere</h2>
        <p className="text-lg text-gray-600 mt-4">Music is the heartbeat of your wedding celebration. Our wedding bands provide an unforgettable performance that will have your guests dancing and enjoying every moment.</p>
        <button className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">Book Your Band Now</button>
      </section>
    </div>
  );
}

export default WeddingBandServices;
