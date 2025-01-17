import React from 'react';

const WeddingServices = () => {
  return (
    <div className="p-6 bg-gray-50">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mt-20">Wedding Services</h1>
        <p className="text-lg text-gray-600 mt-4">Make your big day unforgettable with our premium wedding services.</p>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl text-gray-800 text-center mb-8">Our Services</h2>
        <div className="flex flex-wrap justify-around">
          <div className="bg-white p-6 m-4 rounded-lg shadow-lg w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Wedding Planning</h3>
            <p className="text-gray-600">Let us handle the details, from venue selection to guest coordination, to ensure everything runs smoothly.</p>
          </div>

          <div className="bg-white p-6 m-4 rounded-lg shadow-lg w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Decor & Theme</h3>
            <p className="text-gray-600">Our team will design stunning decorations and create a beautiful theme tailored to your dream wedding.</p>
          </div>

          <div className="bg-white p-6 m-4 rounded-lg shadow-lg w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Catering</h3>
            <p className="text-gray-600">Delight your guests with a variety of delicious dishes, offering both local and international cuisines.</p>
          </div>

          <div className="bg-white p-6 m-4 rounded-lg shadow-lg w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Photography & Videography</h3>
            <p className="text-gray-600">Capture every moment with our expert photographers and videographers, ensuring lasting memories.</p>
          </div>

          <div className="bg-white p-6 m-4 rounded-lg shadow-lg w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Entertainment</h3>
            <p className="text-gray-600">We offer live music, DJs, and dance performances to keep your guests entertained all day long.</p>
          </div>
        </div>
      </section>

      <section className="text-center bg-blue-50 py-12 rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800">Get in Touch</h2>
        <p className="text-lg text-gray-600 mt-4">Ready to plan your wedding? Contact us today to schedule a consultation!</p>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Contact Us</button>
      </section>
    </div>
  );
}

export default WeddingServices;
