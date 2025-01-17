import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedServices from './components/FeaturedServices';
import MediaSection from './components/MediaSection';
import FAQSection from './components/FAQSection';
import RequestCallback from './components/RequestCallback';
import BookNow from './components/BookNow';
import Footer from './components/Footer';

// Import individual service components
import WeddingServices from './components/services/WeddingServices';
import WeddingMusicServices from './components/services/WeddingMusicServices';
import WeddingLightingServices from './components/services/WeddingLightingServices';
import WeddingGhoriServices from './components/services/WeddingGhoriServices';
import WeddingBoard from './components/services/WeddingBoard';
import WeddingBandServices from './components/services/WeddingBandServices';
import WeddingBaggi from './components/services/WeddingBaggi';
import TurbanTireService from './components/services/TurbanTireService';
import ShehnaiServices from './components/services/ShehnaiServices';

// Import ScrollToTop component
import ScrollToTop from './components/ScrollToTop.tsx';

const App: React.FC = () => {
  return (
    <Router>
      {/* Scroll to top on route change */}
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <FeaturedServices />
                <MediaSection />
                <FAQSection />
                <RequestCallback />
              </>
            } />
            <Route path="/book-now" element={<BookNow />} />
            <Route path="/wedding-services" element={<WeddingServices />} />
            <Route path="/wedding-music-services" element={<WeddingMusicServices />} />
            <Route path="/wedding-lighting-services" element={<WeddingLightingServices />} />
            <Route path="/wedding-ghori-services" element={<WeddingGhoriServices />} />
            <Route path="/wedding-board" element={<WeddingBoard />} />
            <Route path="/wedding-band-services" element={<WeddingBandServices />} />
            <Route path="/wedding-baggi" element={<WeddingBaggi />} />
            <Route path="/turban-tire-service" element={<TurbanTireService />} />
            <Route path="/shehnai-services" element={<ShehnaiServices />} />
            {/* Add routes for other services as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
