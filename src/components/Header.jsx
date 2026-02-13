import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, ShoppingBag } from 'lucide-react';
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
    { path: '/products', label: 'Boudin & Cracklin' },
    { path: '/about', label: 'Our Story' },
    { path: '/contact', label: 'Visit Us' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#fdf8f1] shadow-xl border-b-4 border-amber-600' 
          : 'bg-[#fdf8f1]/95 backdrop-blur-md'
      }`}
    >
      {/* Top Bar - "The Porch" Style */}
      <div className="bg-[#3d2b1f] text-[#f4d03f] py-2 px-4 text-sm border-b border-amber-900/50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2 font-serif italic">
          <a
            href="tel:2252720739"
            className="flex items-center gap-2 hover:text-white transition-colors duration-300"
          >
            <Phone size={14} className="text-amber-500" />
            <span>Hot & Fresh: (225) 272-0739</span>
          </a>
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <MapPin size={14} className="text-amber-500" />
            <span className="hidden sm:inline">12181 Greenwell Springs Rd, Baton Rouge</span>
            <span className="sm:hidden">Baton Rouge, LA</span>
          </div>
          <div className="hidden lg:block text-xs uppercase tracking-widest font-sans font-bold">
            Best in the Parish
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo - "Cajun Butcher Shop" Branding */}
          <Link to="/" className="flex flex-col group">
            <h1 className="text-3xl md:text-4xl font-black text-[#3d2b1f] tracking-tighter leading-none italic uppercase">
              Jerry Lee's
            </h1>
            <div className="flex items-center gap-2">
               <span className="h-[2px] w-4 bg-amber-600"></span>
               <p className="text-xs md:text-sm text-amber-700 font-bold tracking-[0.2em] uppercase">
                Cajun Foods
              </p>
               <span className="h-[2px] w-4 bg-amber-600"></span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm lg:text-base font-bold uppercase tracking-wide transition-all duration-300 relative group ${
                  location.pathname === link.path
                    ? 'text-amber-700'
                    : 'text-[#3d2b1f] hover:text-amber-700'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-amber-600 transition-transform duration-300 ${
                  location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
            <a href="tel:2252720739">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white font-black uppercase rounded-none px-6 shadow-[4px_4px_0px_0px_rgba(61,43,31,1)] active:translate-y-1 active:shadow-none transition-all">
                Order Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#3d2b1f] bg-amber-100 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-6 border-t-2 border-amber-200 animate-in fade-in slide-in-from-top-5">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xl font-black uppercase italic py-2 transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-amber-600 translate-x-2'
                      : 'text-[#3d2b1f]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:2252720739" className="mt-4">
                <Button className="bg-[#3d2b1f] text-[#f4d03f] w-full py-6 text-lg font-bold rounded-none">
                  Call the Shop
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};