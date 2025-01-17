import React from 'react';

const WeddingGhoriServices = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-300">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mt-20">Wedding Ghori Services</h1>
        <p className="text-lg text-gray-700 mt-4">Enhance the charm and grace of your wedding with our majestic Wedding Ghori Services. Let your special day be a blend of tradition and luxury, with our beautifully decorated horses for the groom's procession (Baraat).</p>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl text-gray-800 text-center mb-8">Our Ghori Services Include</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white p-6 rounded-lg shadow-xl w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Decorated Ghori</h3>
            <p className="text-gray-600">Our beautifully decorated horses add an aura of grandeur to the groom's procession. We ensure that each horse is adorned with premium, intricate decorations, reflecting the magnificence of the wedding.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">Professional Handlers</h3>
            <p className="text-gray-600">Our experienced and well-trained handlers ensure the safety and comfort of both the groom and the horse during the procession, making the experience seamless and stress-free.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-pink-600 mb-4">Customized Decorations</h3>
            <p className="text-gray-600">We offer customized decorations for the horse, including floral arrangements, drapes, and embellishments, tailored to match the theme of your wedding for a truly personalized touch.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-teal-600 mb-4">Traditional Rituals</h3>
            <p className="text-gray-600">Our services extend to including traditional rituals like the groom’s arrival at the venue in style. We can also provide special arrangements for the Baraat ceremony to make the experience even more memorable.</p>
          </div>
        </div>
      </section>

      <section className="text-center bg-purple-50 py-12 rounded-lg mt-12">
        <h2 className="text-3xl font-semibold text-gray-800">Make Your Wedding Unforgettable</h2>
        <p className="text-lg text-gray-600 mt-4">Add a royal touch to your wedding with our Wedding Ghori Services. Let the groom's entrance be grand and spectacular as he arrives in traditional style, riding a beautifully adorned horse.</p>
        <button className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">Book Now</button>
      </section>
    </div>
  );
}

export default WeddingGhoriServices;
