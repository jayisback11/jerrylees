import React from 'react';
import { Phone, MapPin, Clock, Mail, Flame, MessageSquare } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mockData } from '@/mock';

export const Contact = () => {
  const { storeInfo } = mockData;

  return (
    <div className="min-h-screen bg-[#fcf9f2] font-serif overflow-x-hidden relative">
      {/* Texture Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]" />

      {/* --- HEADER SECTION --- */}
      <section className="relative pt-32 pb-12 md:pt-44 md:pb-20 px-4 md:px-6 border-b-8 border-double border-cayenne/20">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-100 border-2 border-amber-500 rounded-full px-4 py-1 mb-6">
            <Flame className="text-orange-600" size={14} />
            <span className="text-[10px] md:text-sm font-black uppercase tracking-widest text-orange-900">
              Get In Touch
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-smokehouse uppercase leading-[0.85] tracking-tighter mb-4">
            Contact Us
          </h1>
          <p className="text-xl md:text-3xl text-cayenne font-black italic tracking-tight">
            Stop By The Shop or Give Us A Holler
          </p>
          <div className="h-2 w-24 bg-goldenrod mt-4 mx-auto"></div>
        </div>
      </section>

      {/* --- CONTACT GRID --- */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
            {/* Call Us Card */}
            <div className="bg-white p-8 shadow-xl border-l-8 border-cayenne -rotate-1 hover:rotate-0 transition-transform">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cayenne text-white rounded-full">
                  <Phone size={24} />
                </div>
                <h2 className="text-2xl font-black text-smokehouse uppercase">Place An Order</h2>
              </div>
              <a href={`tel:${storeInfo.phone.replace(/\D/g,'')}`} className="text-3xl md:text-4xl font-black text-cayenne hover:underline block mb-4">
                {storeInfo.phone}
              </a>
              <p className="text-stone-500 font-bold italic">
                Best for checking daily batch availability or placing large specialty meat orders.
              </p>
            </div>

            {/* Visit Us Card */}
            <div className="bg-white p-8 shadow-xl border-l-8 border-smokehouse rotate-1 hover:rotate-0 transition-transform">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-smokehouse text-white rounded-full">
                  <MapPin size={24} />
                </div>
                <h2 className="text-2xl font-black text-smokehouse uppercase">Find The Shop</h2>
              </div>
              <p className="text-xl md:text-2xl font-bold text-stone-800 mb-6">
                {storeInfo.address}
              </p>
              <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-smokehouse text-white font-black py-6 rounded-none shadow-[4px_4px_0px_0px_rgba(74,13,13,1)] active:translate-x-1 active:translate-y-1 transition-all">
                  GET DRIVING DIRECTIONS
                </Button>
              </a>
            </div>

            {/* Hours Card */}
            <div className="bg-white p-8 shadow-xl border-l-8 border-goldenrod rotate-1 hover:rotate-0 transition-transform">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-goldenrod text-smokehouse rounded-full">
                  <Clock size={24} />
                </div>
                <h2 className="text-2xl font-black text-smokehouse uppercase">Store Hours</h2>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-stone-100 pb-2">
                  <span className="font-black text-stone-500 uppercase">Mon - Fri</span>
                  <span className="font-black text-smokehouse">5:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-stone-100 pb-2">
                  <span className="font-black text-stone-500 uppercase">Saturday</span>
                  <span className="font-black text-smokehouse">5:00 AM - 3:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-black text-cayenne uppercase">Sunday</span>
                  <span className="font-black text-cayenne underline underline-offset-4">CLOSED</span>
                </div>
              </div>
              <p className="mt-6 text-sm text-stone-400 font-bold italic">
                * We open early for the plant workers and the early morning shift!
              </p>
            </div>

            {/* Social Card */}
            <div className="bg-white p-8 shadow-xl border-l-8 border-cayenne -rotate-1 hover:rotate-0 transition-transform">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cayenne text-white rounded-full">
                  <MessageSquare size={24} />
                </div>
                <h2 className="text-2xl font-black text-smokehouse uppercase">Stay Updated</h2>
              </div>
              <p className="text-stone-700 font-bold text-lg mb-6">
                Follow us on Facebook for daily "Fresh Batch" alerts and holiday specials.
              </p>
              <a href={storeInfo.social.facebook} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full border-4 border-smokehouse text-smokehouse font-black py-6 rounded-none hover:bg-smokehouse hover:text-white transition-all">
                  VISIT FACEBOOK PAGE
                </Button>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* --- STOREFRONT IMAGE (Polaroid Style) --- */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="p-2 md:p-4 bg-white shadow-2xl rotate-1 border border-stone-200">
            <img 
              src="images/1.jpg" 
              alt="Jerry Lee's Storefront" 
              className="w-full h-auto aspect-[21/9] object-cover contrast-110"
            />
          </div>
        </div>
      </section>

      {/* --- FOOTER BILLBOARD --- */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-goldenrod p-1 border-[6px] border-smokehouse shadow-[8px_8px_0px_0px_rgba(42,34,27,1)] md:shadow-[16px_16px_0px_0px_rgba(42,34,27,1)]">
          <div className="border-2 border-smokehouse p-8 md:p-14 text-center space-y-6 bg-[#ffc107]">
            <h2 className="text-4xl md:text-7xl font-black text-smokehouse uppercase italic tracking-tighter leading-none">
              PULL OVER HERE
            </h2>
            <p className="text-lg md:text-2xl text-smokehouse font-black uppercase leading-tight">
              EASY ACCESS OFF GREENWELL SPRINGS RD. <br className="hidden md:block" /> PLENTY OF PARKING IN BACK.
            </p>
            <div className="flex justify-center pt-4">
              <a href="https://maps.google.com/?q=12181+Greenwell+Springs+Rd+Baton+Rouge+LA+70814" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button className="w-full bg-smokehouse text-white text-xl md:text-2xl font-black py-8 px-10 rounded-none hover:bg-black transition-all">
                  OPEN IN GOOGLE MAPS
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};