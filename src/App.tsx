import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedServices from './components/FeaturedServices';
import MediaSection from './components/MediaSection';
import FAQSection from './components/FAQSection';
import RequestCallback from './components/RequestCallback';
import BookNow from './components/booknow';
import Footer from './components/footer';

function App() {
  return (
    <Router>
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
