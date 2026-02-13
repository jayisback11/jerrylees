import React from 'react';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { mockData } from '@/mock';

export const Contact = () => {
  const { storeInfo } = mockData;

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription');
  };

  return (
    <div className="min-h-screen pt-32 pb-16 bg-cream/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-smokehouse mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Have questions about our products or want to place an order? 
            Give us a call or stop by the shop!
          </p>
        </div>

        {/* Contact Information Cards - Now Centered Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {/* Phone */}
          <Card className="contact-info-card p-8 border-none shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-cayenne text-white p-3 rounded-lg">
                <Phone size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-smokehouse mb-2 uppercase tracking-wide">
                  Call Us
                </h3>
                <a
                  href={`tel:${storeInfo.phone.replace(/\D/g,'')}`}
                  className="text-2xl text-cayenne font-bold hover:underline"
                >
                  {storeInfo.phone}
                </a>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  Best for placing orders or <br /> checking daily availability.
                </p>
              </div>
            </div>
          </Card>

          {/* Address */}
          <Card className="contact-info-card p-8 border-none shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-cayenne text-white p-3 rounded-lg">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-smokehouse mb-2 uppercase tracking-wide">
                  Visit Our Shop
                </h3>
                <p className="text-lg text-gray-800 font-medium mb-4">
                  {storeInfo.address}
                </p>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="btn-secondary w-full sm:w-auto uppercase tracking-widest font-bold">
                    Get Directions
                  </Button>
                </a>
              </div>
            </div>
          </Card>

          {/* Hours */}
          <Card className="contact-info-card p-8 border-none shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-cayenne text-white p-3 rounded-lg">
                <Clock size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-smokehouse mb-2 uppercase tracking-wide">
                  Store Hours
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-bold">Mon - Fri:</span> 5:00 AM - 5:00 PM</p>
                  <p><span className="font-bold">Saturday:</span> 5:00 AM - 3:00 PM</p>
                  <p><span className="font-bold text-cayenne">Sunday:</span> Closed</p>
                </div>
                <p className="text-sm text-gray-500 mt-4 italic">
                  Open early for plant workers and fresh food lovers!
                </p>
              </div>
            </div>
          </Card>

          {/* Email/Social */}
          <Card className="contact-info-card p-8 border-none shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-cayenne text-white p-3 rounded-lg">
                <Mail size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-smokehouse mb-2 uppercase tracking-wide">
                  Connect With Us
                </h3>
                <a
                  href="mailto:info@jerryleescajunfoods.com"
                  className="text-lg text-cayenne font-semibold hover:underline block mb-2"
                >
                  info@jerryleescajunfoods.com
                </a>
                <p className="text-gray-600">
                  Follow us on <a href={storeInfo.social.facebook} className="text-cayenne font-bold hover:underline">Facebook</a> for daily batch updates.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <Card className="overflow-hidden border-none shadow-xl rounded-2xl">
            <div className="aspect-[21/9]">
              <img 
                src="images/1.jpg" 
                alt="Jerry Lee's Storefront" 
                className="w-full h-full object-cover"
              />
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
};