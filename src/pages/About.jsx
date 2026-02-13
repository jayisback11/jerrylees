import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame, Star, History, Users, MapPin, Phone } from "lucide-react";
import { mockData } from "@/mock";

export const About = () => {
  const { history, storeInfo } = mockData;

  return (
    <div className="min-h-screen bg-[#fcf9f2] font-serif overflow-x-hidden relative">
      {/* Butcher Paper Texture Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]" />

      {/* --- HEADER SECTION --- */}
      <section className="relative pt-32 pb-12 md:pt-44 md:pb-20 px-4 md:px-6 border-b-8 border-double border-cayenne/20">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-100 border-2 border-amber-500 rounded-full px-4 py-1 mb-6">
            <Flame className="text-orange-600" size={14} />
            <span className="text-[10px] md:text-sm font-black uppercase tracking-widest text-orange-900">
              Est. 1979 • Louisiana Made
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-smokehouse uppercase leading-[0.85] tracking-tighter mb-4">
            Our Story
          </h1>
          <p className="text-xl md:text-3xl text-cayenne font-black italic tracking-tight">
            A Family Tradition Built on Smoke & Soul
          </p>
          <div className="h-2 w-24 bg-goldenrod mt-4 mx-auto"></div>
          
          <p className="mt-8 text-lg md:text-xl text-stone-700 font-medium leading-relaxed max-w-3xl mx-auto italic">
            "{history.intro}"
          </p>
        </div>
      </section>

      {/* --- HERO IMAGE (Polaroid Style) --- */}
      <section className="py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="p-2 md:p-4 bg-white shadow-2xl rotate-1 border border-stone-200">
            <img
              src="images/1.jpg"
              alt="Jerry Lee's Storefront"
              className="w-full h-auto aspect-[21/9] object-cover contrast-110"
            />
          </div>
        </div>
      </section>

      {/* --- FOUNDER SECTION --- */}
      <section className="py-16 px-4 md:px-6 bg-stone-100 border-y-2 border-dashed border-stone-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="p-2 bg-white shadow-xl -rotate-2 border border-stone-200">
                <img
                  src="/images/3.jpg"
                  alt="Gerard 'Jerry' Lee Duplantis"
                  className="w-full aspect-square object-cover"
                />
              </div>
              {/* Floating "King" Label */}
              <div className="absolute -bottom-4 -right-4 bg-cayenne text-white px-6 py-2 font-black uppercase italic -rotate-1 shadow-lg">
                The King of Boudin
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-smokehouse uppercase tracking-tighter leading-none">
                Gerard "Jerry" Lee Duplantis
              </h2>
              <div className="space-y-4 text-lg text-stone-700 font-medium leading-relaxed">
                <p>
                  Born and raised in St. Martinville, Louisiana, Jerry learned
                  the art of Cajun cooking from his family. In 1979, he brought
                  those cherished traditions to Baton Rouge.
                </p>
                <p>
                  Jerry's secret boudin recipe is known by no one else—a
                  closely guarded family secret refined over
                  nearly five decades.
                </p>
              </div>
              <div className="bg-goldenrod p-6 border-l-8 border-smokehouse rotate-1 shadow-md">
                <p className="text-xl font-black text-smokehouse italic leading-tight">
                  "Hard Work, Sacrifice, and Secret Seasonings—that's what
                  makes it special."
                </p>
                <p className="mt-2 text-sm font-bold uppercase tracking-widest text-smokehouse/70">
                  — Jerry Lee Duplantis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- JOURNEY TIMELINE --- */}
      <section className="py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-smokehouse text-center mb-16 uppercase italic tracking-tighter">
            Our Journey
          </h2>
          <div className="space-y-12">
            {history.timeline.map((item, index) => (
              <div key={index} className="flex gap-6 md:gap-10 items-start group">
                <div className="flex flex-col items-center">
                  <div className="bg-cayenne text-white text-xl font-black px-4 py-2 rotate-3 shadow-md">
                    {item.year}
                  </div>
                  <div className="w-1 h-full bg-stone-200 mt-2"></div>
                </div>
                <div className="pb-12">
                  <h3 className="text-2xl md:text-3xl font-black text-smokehouse uppercase tracking-tight mb-2 group-hover:text-cayenne transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-lg text-stone-600 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LEGACY CARD (Butcher Paper Style) --- */}
      <section className="py-16 px-4 md:px-6 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
        <div className="max-w-5xl mx-auto bg-white p-8 md:p-16 shadow-2xl border-t-[10px] border-cayenne text-center relative overflow-hidden">
          <div className="absolute top-4 right-4 text-stone-100 select-none">
            <Users size={120} />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-smokehouse mb-6 uppercase tracking-tighter relative z-10">
            A TRADITION OF LOYALTY
          </h2>
          <p className="text-xl md:text-2xl text-stone-700 font-bold italic leading-relaxed max-w-4xl mx-auto mb-8 relative z-10">
            "I grew up in Cajun Country. I knew everybody ate boudin there,
            so I said, they've got to have taste buds in Baton Rouge."
          </p>
          <div className="h-px bg-stone-200 w-full mb-8"></div>
          <p className="text-lg text-stone-500 font-black uppercase tracking-[0.2em]">
            Authentic Smokehouse Methods • Hickory & Pecan Wood • Since 1977
          </p>
        </div>
      </section>

      {/* --- GALLERY --- */}
      <section className="py-20 px-4 md:px-6">
        <h2 className="text-4xl md:text-6xl font-black text-smokehouse text-center mb-16 uppercase tracking-tighter">
          A Glimpse Inside
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[4, 5, 6].map((imgNum) => (
            <div key={imgNum} className="p-2 bg-white shadow-lg rotate-1 hover:rotate-0 transition-transform border border-stone-200">
              <div className="aspect-square overflow-hidden">
                <img
                  src={`/images/${imgNum}.jpg`}
                  alt="Smokehouse Interior"
                  className="w-full h-full object-cover contrast-110 hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FINAL CTA (Billboard Style) --- */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-goldenrod p-1 border-[6px] border-smokehouse shadow-[8px_8px_0px_0px_rgba(42,34,27,1)] md:shadow-[16px_16px_0px_0px_rgba(42,34,27,1)]">
          <div className="border-2 border-smokehouse p-8 md:p-14 text-center space-y-8 bg-[#ffc107]">
            <h2 className="text-5xl md:text-8xl font-black text-smokehouse uppercase italic tracking-tighter leading-none">
              Taste It Today
            </h2>
            <p className="text-lg md:text-3xl text-smokehouse font-black uppercase leading-tight">
              Nearly 50 Years of Dedication <br className="hidden md:block" /> to Authentic Cajun Cuisine.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://maps.google.com/?q=12181+Greenwell+Springs+Rd+Baton+Rouge+LA+70814" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button className="w-full bg-smokehouse text-white text-xl md:text-2xl font-black py-8 px-10 rounded-none hover:scale-105 transition-all">
                  <MapPin className="mr-2" /> VISIT THE SHOP
                </Button>
              </a>
              <a href={`tel:${storeInfo.phone.replace(/\D/g, '')}`} className="w-full sm:w-auto">
                <Button className="w-full bg-cayenne text-white text-xl md:text-2xl font-black py-8 px-10 rounded-none hover:scale-105 transition-all">
                  <Phone className="mr-2" /> CALL US
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};