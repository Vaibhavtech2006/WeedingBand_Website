import React from 'react';

const WeddingBaggi = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-100 via-orange-200 to-red-300 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mt-20">Wedding Baggi Services</h1>
        <p className="text-lg text-gray-700 mt-4">Add a royal touch to your wedding day with our premium Wedding Baggi services. Whether you're looking for traditional charm or a modern twist, our Baggi services create a memorable entrance for the bride and groom.</p>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl text-gray-800 text-center mb-8">Our Wedding Baggi Services Include</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white p-6 rounded-lg shadow-xl w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-yellow-600 mb-4">Traditional Horse-Drawn Baggi</h3>
            <p className="text-gray-600">Experience the elegance and grace of a traditional horse-drawn Baggi. This classic feature adds a regal flair to your wedding, ensuring a grand entrance that captures the essence of tradition.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-orange-600 mb-4">Luxury Carriage Baggi</h3>
            <p className="text-gray-600">For a modern touch, opt for our luxury carriage Baggi. These sleek and stylish carriages are designed for a unique, lavish wedding experience, providing comfort without compromising on elegance.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-red-600 mb-4">Vintage Style Baggi</h3>
            <p className="text-gray-600">Our vintage-style Baggi is a perfect blend of nostalgia and luxury. This service combines antique designs with modern facilities to ensure a stylish and comfortable experience for your wedding day.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-pink-600 mb-4">Customized Baggi Decor</h3>
            <p className="text-gray-600">Personalize your Baggi experience with customized decor. Whether you prefer floral arrangements, drapery, or intricate detailing, we can tailor the Baggi to match your wedding theme perfectly.</p>
          </div>
        </div>
      </section>

      <section className="text-center bg-yellow-50 py-12 rounded-lg mt-12">
        <h2 className="text-3xl font-semibold text-gray-800">Make Your Wedding Grand with Our Baggi Services</h2>
        <p className="text-lg text-gray-600 mt-4">A wedding is not complete without a memorable entrance. With our Wedding Baggi services, you'll be the center of attention as you arrive in style and grace.</p>
        <button className="mt-8 px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">Book Your Baggi Now</button>
      </section>
    </div>
  );
}

export default WeddingBaggi;
