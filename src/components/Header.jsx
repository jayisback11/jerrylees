import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'Our Story' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      {/* Top Bar - Contact Info */}
      <div className="bg-smokehouse text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <a
            href="tel:2252720739"
            className="flex items-center gap-2 hover:text-goldenrod transition-colors duration-300"
          >
            <Phone size={14} />
            <span>(225) 272-0739</span>
          </a>
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <MapPin size={14} />
            <span className="hidden sm:inline">12181 Greenwell Springs Rd, Baton Rouge, LA</span>
            <span className="sm:hidden">Baton Rouge, LA</span>
          </div>
          <div className="hidden md:block text-xs">
            <span className="text-goldenrod font-semibold">Open:</span> Mon-Fri 5AM-5PM | Sat 6AM-5PM
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-bold text-smokehouse tracking-tight">
              Jerry Lee's
            </h1>
            <p className="text-xs md:text-sm text-cayenne font-semibold tracking-wide">
              CAJUN FOODS
            </p>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-cayenne'
                    : 'text-smokehouse hover:text-cayenne'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:2252720739">
              <Button className="btn-primary px-6">
                Call Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-smokehouse hover:text-cayenne transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium py-2 transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-cayenne'
                      : 'text-smokehouse hover:text-cayenne'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:2252720739" className="mt-2">
                <Button className="btn-primary w-full">
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
