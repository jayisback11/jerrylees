import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Facebook, Instagram, Mail } from 'lucide-react';
import { mockData } from '@/mock';

export const Footer = () => {
  const { storeInfo } = mockData;

  return (
    <footer className="bg-smokehouse text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Jerry Lee's
            </h3>
            <p className="text-sm text-goldenrod font-semibold mb-2">
              CAJUN FOODS
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              The King of Boudin since 1979. Hard work, sacrifice, and secret seasonings bring you authentic St. Martinville traditions in Baton Rouge.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href={storeInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-white hover:text-goldenrod"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-300 hover:text-goldenrod transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-gray-300 hover:text-goldenrod transition-colors duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-300 hover:text-goldenrod transition-colors duration-300">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-300 hover:text-goldenrod transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:2252720739"
                  className="flex items-start gap-2 text-sm text-gray-300 hover:text-goldenrod transition-colors duration-300"
                >
                  <Phone size={18} className="mt-0.5 flex-shrink-0" />
                  <span>{storeInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=12181+Greenwell+Springs+Rd+Baton+Rouge+LA+70814"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-gray-300 hover:text-goldenrod transition-colors duration-300"
                >
                  <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                  <span>{storeInfo.address}</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@jerryleescajunfoods.com"
                  className="flex items-start gap-2 text-sm text-gray-300 hover:text-goldenrod transition-colors duration-300"
                >
                  <Mail size={18} className="mt-0.5 flex-shrink-0" />
                  <span>info@jerryleescajunfoods.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4">Store Hours</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <Clock size={18} className="mt-0.5 flex-shrink-0 text-goldenrod" />
                <div>
                  <p className="font-semibold text-white">Monday - Friday</p>
                  <p>5:00 AM - 5:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300 mt-3">
                <Clock size={18} className="mt-0.5 flex-shrink-0 text-goldenrod" />
                <div>
                  <p className="font-semibold text-white">Saturday</p>
                  <p>6:00 AM - 3:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300 mt-3">
                <Clock size={18} className="mt-0.5 flex-shrink-0 text-goldenrod" />
                <div>
                  <p className="font-semibold text-white">Sunday</p>
                  <p>Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Jerry Lee's Cajun Foods. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 text-center md:text-right">
              Made with <span className="text-cayenne">❤</span> in Baton Rouge, Louisiana
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
