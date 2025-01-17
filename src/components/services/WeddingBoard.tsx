import React from 'react';

const WeddingBoard = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-100 via-orange-200 to-red-300 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mt-20">Wedding Board Services</h1>
        <p className="text-lg text-gray-700 mt-4">Our Wedding Board Services are designed to add an extra layer of elegance and personalization to your wedding. From custom signage to stunning decoration boards, we ensure that every detail complements the beauty of your big day.</p>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl text-gray-800 text-center mb-8">Our Wedding Board Services Include</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white p-6 rounded-lg shadow-xl w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-yellow-600 mb-4">Personalized Wedding Boards</h3>
            <p className="text-gray-600">We offer customized wedding boards that feature your names, wedding date, and other personal touches, making them an unforgettable part of your wedding decor.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-orange-600 mb-4">Welcome Signage</h3>
            <p className="text-gray-600">Make your guests feel welcomed with a beautiful "Welcome" board that sets the tone for your wedding day, featuring elegant calligraphy and a warm greeting.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-red-600 mb-4">Directional Signs</h3>
            <p className="text-gray-600">Guide your guests with directional signs that blend seamlessly with the wedding theme. We offer creative ways to point the way to different areas, such as the reception, ceremony, and photo booths.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-pink-600 mb-4">Event Schedule Boards</h3>
            <p className="text-gray-600">Keep your guests informed about the events of the day with beautifully designed schedule boards. Our boards feature elegant layouts and designs that align with your wedding style.</p>
          </div>
        </div>
      </section>

      <section className="text-center bg-yellow-50 py-12 rounded-lg mt-12">
        <h2 className="text-3xl font-semibold text-gray-800">Make Your Wedding Truly Yours</h2>
        <p className="text-lg text-gray-600 mt-4">Our Wedding Board Services add that personal touch, making your wedding decor even more memorable. Whether it's personalized signage or directional guides, we help tell your unique story.</p>
        <button className="mt-8 px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">Book Now</button>
      </section>
    </div>
  );
}

export default WeddingBoard;
