import React from 'react';

const ShehnaiServices = () => {
  return (
    <div className="bg-gradient-to-r from-purple-100 via-indigo-200 to-blue-300 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mt-20">Shehnai Services</h1>
        <p className="text-lg text-gray-700 mt-4">Bring a touch of tradition and elegance to your wedding with our exquisite Shehnai services. The soulful sound of the Shehnai adds a regal aura, making your ceremony truly unforgettable.</p>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl text-gray-800 text-center mb-8">Our Shehnai Services Include</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white p-6 rounded-lg shadow-xl w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">Traditional Shehnai Performance</h3>
            <p className="text-gray-600">Our expert Shehnai players bring traditional music to life with their skilled performance. Perfect for weddings, engagements, and other cultural events, our Shehnai services create an elegant atmosphere.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Shehnai for Wedding Processions</h3>
            <p className="text-gray-600">Enhance your wedding procession with live Shehnai music. The resonant sound of the Shehnai creates a majestic ambiance as you walk down the aisle or celebrate your nuptials.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Customized Shehnai Music</h3>
            <p className="text-gray-600">We offer customized Shehnai music to match your wedding theme or personal preferences. Whether you prefer classical or contemporary tunes, our Shehnai artists tailor their performance to suit your special day.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-pink-600 mb-4">Shehnai for Religious Ceremonies</h3>
            <p className="text-gray-600">Shehnai music is an integral part of religious ceremonies in many cultures. Our services provide soulful Shehnai tunes that resonate with spirituality, bringing peace and harmony to your sacred rituals.</p>
          </div>
        </div>
      </section>

      <section className="text-center bg-purple-50 py-12 rounded-lg mt-12">
        <h2 className="text-3xl font-semibold text-gray-800">Make Your Ceremony Memorable with Our Shehnai Services</h2>
        <p className="text-lg text-gray-600 mt-4">Let the soulful sound of the Shehnai add elegance and grace to your wedding. Our expert musicians will ensure that your special day is filled with timeless melodies.</p>
        <button className="mt-8 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">Book Your Shehnai Now</button>
      </section>
    </div>
  );
}

export default ShehnaiServices;
