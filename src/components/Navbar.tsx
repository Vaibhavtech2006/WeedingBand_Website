import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';
import { Menu, X } from 'lucide-react';


const navItems = {
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
      
    ],
  },
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
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

          <div className="hidden md:flex items-center space-x-6">
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
                <div
                  className={clsx(
                    'absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200',
                    activeDropdown === key ? 'opacity-100 visible' : 'opacity-0 invisible',
                    'top-full' // ensures the dropdown appears below the button
                  )}
                >
                  <div className="py-2">
                    {items.map((item) => (
                      <Link
                        key={item}
                        to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/book-now" className="btn-primary">Book Now</Link>
            <Link to="/enquiry" className="btn-secondary">Enquiry Now</Link>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      <div className={clsx("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-4 pt-4 pb-6 space-y-4">
          <Link to="/" className="mobile-nav-link">Home</Link>
          {Object.entries(navItems).map(([key, { name, items }]) => (
            <div key={key}>
              <button
                onClick={() => toggleDropdown(key)}
                className="mobile-nav-link w-full flex justify-between items-center"
              >
                {name}
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className={clsx(
                "pl-4 mt-2 space-y-1",
                activeDropdown === key ? "block" : "hidden"
              )}>
                {items.map((item) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="mobile-nav-link block"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link to="/contact" className="mobile-nav-link">Contact</Link>
          <Link to="/book-now" className="mobile-btn-primary">Book Now</Link>
          <Link to="/enquiry" className="mobile-btn-secondary">Enquiry Now</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
