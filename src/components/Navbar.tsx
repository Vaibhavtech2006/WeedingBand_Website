import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';

const navItems = {
  about: {
    name: 'About',
    items: [
      'About Master Band',
      'Our Quality',
      'Company Brochure',
      'Pay With IndiaMart'
    ]
  },
  services: {
    name: 'Services',
    items: [
      'Wedding Services',
      'Wedding Music Services',
      'Wedding Lighting Services',
      'Wedding Ghori Services',
      'Wedding Board',
      'Wedding Band Services',
      'Wedding Baggi',
      'Turban Tire Service',
      'Shehnai Services',
      'Shehnai and Tasha Service',
      'Rose Petals Blast',
      'Religious Processions',
      'Ramlila Procession',
      'Folk Dance Services',
      'Fireworks Services',
      'Dresses of Band Party',
      'Digital Video Photography Services',
      'Celebrities Enjoyed With Master Band'
    ]
  },
  brochure: {
    name: 'Brochure',
    items: [
      'Corporate Presentation',
      'Corporate Brochure',
      'Company Brochure'
    ]
  }
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // To manage login state
  const [role, setRole] = useState<string | null>(null);  // To store user role

  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const handleLogin = (role: string) => {
    setRole(role);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setRole(null);
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-gold">Naushad Rawat Band</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="nav-link">Home</Link>
            
            {Object.entries(navItems).map(([key, { name, items }]) => (
              <div key={key} className="relative group">
                <button
                  className="nav-link flex items-center"
                  onClick={() => toggleDropdown(key)}
                >
                  {name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className={clsx(
                  "absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200",
                  activeDropdown === key ? "opacity-100 visible" : "opacity-0 invisible"
                )}>
                  <div className="py-1">
                    {items.map((item) => (
                      <Link
                        key={item}
                        to={`/${key}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <Link to="/gallery" className="nav-link">Gallery</Link>
            <Link to="/video" className="nav-link">Video</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/book-now" className="btn-primary">Book Now</Link>
            <Link to="/enquiry" className="btn-secondary">Enquiry Now</Link>

            {/* Login/Logout Button */}
            {isLoggedIn ? (
              <>
                <span className="text-lg">{role === 'admin' ? 'Admin' : 'User'}</span>
                <button onClick={handleLogout} className="btn-primary ml-4">Logout</button>
              </>
            ) : (
              <button onClick={() => handleLogin('admin')} className="btn-primary ml-4">Login</button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={clsx("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="mobile-nav-link">Home</Link>
          {Object.entries(navItems).map(([key, { name, items }]) => (
            <div key={key} className="space-y-1">
              <button
                onClick={() => toggleDropdown(key)}
                className="mobile-nav-link w-full flex justify-between items-center"
              >
                {name}
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className={clsx(
                "pl-4 space-y-1",
                activeDropdown === key ? "block" : "hidden"
              )}>
                {items.map((item) => (
                  <Link
                    key={item}
                    to={`/${key}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="mobile-nav-link block"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link to="/gallery" className="mobile-nav-link">Gallery</Link>
          <Link to="/video" className="mobile-nav-link">Video</Link>
          <Link to="/contact" className="mobile-nav-link">Contact</Link>
          <Link to="/book-now" className="mobile-btn-primary">Book Now</Link>
          <Link to="/enquiry" className="mobile-btn-secondary">Enquiry Now</Link>

          {/* Mobile Login/Logout Button */}
          {isLoggedIn ? (
            <button onClick={handleLogout} className="mobile-btn-primary mt-4">Logout</button>
          ) : (
            <button onClick={() => handleLogin('admin')} className="mobile-btn-primary mt-4">Login</button>
          )}
        </div>
      </div>
    </nav>
  );
}
