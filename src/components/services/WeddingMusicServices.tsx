import React from 'react';

const WeddingMusicServices = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-blue-100 via-purple-200 to-pink-300">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-800 mt-20">Wedding Music Services</h1>
        <p className="text-lg text-gray-700 mt-4">Make your wedding unforgettable with live performances and curated playlists that set the perfect mood for every moment!</p>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl text-gray-800 text-center mb-8">Our Music Offerings</h2>
        <div className="flex flex-wrap justify-around">
          <div className="bg-white p-6 m-4 rounded-lg shadow-lg w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Live Bands</h3>
            <p className="text-gray-600">Our live bands bring vibrant energy, playing everything from romantic ballads to lively dance numbers, making every moment memorable.</p>
          </div>

          <div className="bg-white p-6 m-4 rounded-lg shadow-lg w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-green-600 mb-4">DJ Services</h3>
            <p className="text-gray-600">Our expert DJs create the perfect playlist to keep the party going all night, with a mix of current hits and classic tunes that everyone loves!</p>
          </div>

          <div className="bg-white p-6 m-4 rounded-lg shadow-lg w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-pink-600 mb-4">String Quartets</h3>
            <p className="text-gray-600">Add elegance and grace with a live string quartet, ideal for your ceremony or intimate gatherings, creating a peaceful and romantic atmosphere.</p>
          </div>

          <div className="bg-white p-6 m-4 rounded-lg shadow-lg w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-yellow-600 mb-4">Solo Artists</h3>
            <p className="text-gray-600">Our talented solo artists provide an intimate performance, whether it's a singer, guitarist, or pianist, setting the perfect mood for your wedding.</p>
          </div>

          <div className="bg-white p-6 m-4 rounded-lg shadow-lg w-80 hover:transform hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-teal-600 mb-4">Customized Playlists</h3>
            <p className="text-gray-600">We curate customized playlists based on your preferences, including all the special songs that will make your day even more unique.</p>
          </div>
        </div>
      </section>

      <section className="text-center bg-purple-50 py-12 rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800">Let’s Create The Perfect Soundtrack For Your Wedding</h2>
        <p className="text-lg text-gray-600 mt-4">Whether you're looking for a lively party atmosphere or a romantic, serene vibe, we have the music to make your wedding day unforgettable.</p>

      </section>
    </div>
  );
}

export default WeddingMusicServices;
