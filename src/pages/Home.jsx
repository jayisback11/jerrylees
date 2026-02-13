import React from "react";
import { Link } from "react-router-dom";
import {
  Award,
  Lock,
  Flame,
  Heart,
  Star,
  Clock,
  ArrowRight,
  ChevronRight,
  Phone,
  MapPin,
  Utensils,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockData } from "@/mock";

export const Home = () => {
  const {
    hero,
    storeInfo,
    products,
    whyChooseUs,
    facebookPosts,
  } = mockData;

  const iconMap = {
    award: Award,
    lock: Lock,
    flame: Flame,
    heart: Heart,
    star: Star,
    clock: Clock,
  };

  const featuredProducts = [
    ...products.boudin,
    ...products.specialties.slice(0, 2),
    ...products.sausages.slice(0, 2),
  ].slice(0, 6);

  return (
    <div className="min-h-screen bg-[#fcf9f2] font-serif overflow-x-hidden relative">
      {/* Texture Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]" />

      {/* --- HERO SECTION --- 
          Increased pt-32 for mobile to ensure the floating "Cajun" badge 
          has room to breathe below the header.
      */}
      <section className="relative pt-32 pb-12 md:pt-44 md:pb-24 px-4 md:px-6 border-b-8 border-double border-cayenne/20">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            
            {/* Branding & CTA Text */}
            <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-amber-100 border-2 border-amber-500 rounded-full px-4 py-1">
                <Flame className="text-orange-600" size={14} />
                <span className="text-[10px] md:text-sm font-black uppercase tracking-widest text-orange-900">
                  Smokin' Since 1979
                </span>
              </div>
              
              <h1 className="text-4xl md:text-8xl font-black text-smokehouse uppercase leading-[0.85] tracking-tighter">
                {hero.headline}
              </h1>
              
              <div className="relative">
                <p className="text-xl md:text-4xl text-cayenne font-black italic tracking-tight">
                  {hero.subheadline}
                </p>
                <div className="h-2 w-24 bg-goldenrod mt-2 mx-auto lg:mx-0"></div>
              </div>

              <p className="text-base md:text-xl text-stone-700 font-medium max-w-lg leading-relaxed mx-auto lg:mx-0 lg:border-l-4 lg:border-stone-300 lg:pl-6">
                {hero.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 px-2 md:px-0">
                <a href="https://maps.google.com/?q=12181+Greenwell+Springs+Rd+Baton+Rouge+LA+70814" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button className="w-full bg-cayenne hover:bg-red-800 text-white font-black text-lg md:text-xl px-8 py-7 md:py-8 shadow-[4px_4px_0px_0px_rgba(74,13,13,1)] active:translate-x-1 active:translate-y-1 transition-all">
                    <MapPin className="mr-2" size={20} /> PULL OVER HERE
                  </Button>
                </a>
                <Link to="/products" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full border-4 border-smokehouse text-smokehouse font-black text-lg md:text-xl px-8 py-7 md:py-8 hover:bg-smokehouse hover:text-white transition-all">
                    FULL MENU
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image Section 
                Added extra top margin on mobile (mt-12) to create space 
                for the badge that hangs off the top edge.
            */}
            <div className="relative order-1 lg:order-2 px-6 mt-12 lg:mt-0 mb-8 lg:mb-0">
              <div className="relative z-10 p-2 md:p-4 bg-white shadow-xl rotate-1 lg:rotate-2 border border-stone-200 mx-auto max-w-sm md:max-w-md lg:max-w-none">
                <img
                  src="/images/2.jpg"
                  alt="Jerry Lee's Boudin"
                  className="w-full aspect-square md:aspect-[4/5] object-cover contrast-110"
                />
                
                {/* Floating "Cajun" Sticker 
                    -top-8 on mobile ensures it pops out above the white frame.
                */}
                <div className="absolute -top-8 -right-4 md:-top-10 md:-right-10 bg-yellow-400 text-smokehouse font-black p-4 md:p-6 rounded-full shadow-2xl border-2 border-smokehouse flex flex-col items-center justify-center -rotate-12 z-20">
                  <span className="text-[10px] md:text-xs leading-none uppercase tracking-tighter">Authentic</span>
                  <span className="text-xl md:text-3xl leading-none font-black">CAJUN</span>
                </div>
              </div>
              <div className="absolute -inset-4 bg-goldenrod/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="py-16 bg-smokehouse text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {whyChooseUs.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              return (
                <div key={index} className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-goldenrod rounded-full text-smokehouse rotate-3 shadow-lg">
                    <IconComponent size={32} strokeWidth={3} />
                  </div>
                  <h3 className="text-2xl font-black uppercase italic tracking-wider">{item.title}</h3>
                  <p className="text-stone-300 text-sm md:text-base font-medium max-w-xs">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- MENU SECTION --- */}
      <section className="py-12 md:py-24 px-4 md:px-6 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
        <div className="max-w-4xl mx-auto bg-white p-6 md:p-16 shadow-2xl border-t-[10px] border-cayenne relative">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-6xl font-black text-smokehouse uppercase tracking-tighter">The Daily Chop</h2>
            <div className="flex items-center justify-center gap-3 mt-2">
              <div className="h-px bg-stone-200 flex-1"></div>
              <Utensils className="text-cayenne shrink-0" size={20} />
              <div className="h-px bg-stone-200 flex-1"></div>
            </div>
          </div>

          <div className="space-y-10">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group border-b border-stone-100 pb-6 md:pb-8 last:border-0">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl md:text-3xl font-black text-smokehouse uppercase leading-none">{product.name}</h3>
                      {product.popular && (
                        <span className="bg-goldenrod text-[10px] font-black px-2 py-0.5 rounded rotate-2 uppercase tracking-tighter">Local's Fav</span>
                      )}
                    </div>
                    <p className="text-stone-500 font-bold italic text-base leading-snug">{product.description}</p>
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-cayenne tabular-nums md:pl-6 md:border-l-2 md:border-dashed border-stone-200 leading-none">
                    {product.price}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/products">
              <Button className="w-full bg-smokehouse text-white py-8 text-xl md:text-2xl font-black italic uppercase tracking-tighter hover:bg-black transition-all shadow-xl rounded-none">
                SEE THE FULL SPREAD <ChevronRight size={28} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- SOCIAL FEED --- */}
      <section className="py-16 bg-stone-100 border-y-2 border-dashed border-stone-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-smokehouse uppercase italic leading-none">Fresh Batch Alerts</h2>
              <p className="text-cayenne font-bold">Follow @JerryLeesBoudin for updates</p>
            </div>
            <a href={storeInfo.social.facebook} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-2 border-smokehouse font-black uppercase">Visit Facebook</Button>
            </a>
          </div>

          <div className="flex overflow-x-auto gap-6 pb-8 snap-x no-scrollbar md:grid md:grid-cols-3 md:overflow-visible">
            {facebookPosts.map((post) => (
              <div key={post.id} className="min-w-[85%] sm:min-w-[45%] md:min-w-0 bg-white p-3 shadow-lg -rotate-1 snap-center border border-stone-200">
                <div className="aspect-square bg-stone-200 mb-4 overflow-hidden">
                  <img src={post.image} alt="Smokehouse Batch" className="w-full h-full object-cover" />
                </div>
                <div className="px-2">
                  <p className="text-[10px] font-black text-stone-400 mb-2 uppercase tracking-widest">{post.date}</p>
                  <p className="text-sm font-bold text-stone-700 line-clamp-3 leading-snug mb-4">{post.text}</p>
                  <div className="flex gap-4 text-xs font-black text-cayenne border-t pt-3">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-16 px-4 md:py-24">
        <div className="max-w-4xl mx-auto bg-goldenrod p-1 border-[6px] border-smokehouse shadow-[8px_8px_0px_0px_rgba(42,34,27,1)] md:shadow-[16px_16px_0px_0px_rgba(42,34,27,1)]">
          <div className="border-2 border-smokehouse p-8 md:p-14 text-center space-y-8 bg-[#ffc107]">
            <h2 className="text-5xl md:text-8xl font-black text-smokehouse uppercase italic tracking-tighter leading-none">Hungry Yet?</h2>
            <p className="text-lg md:text-3xl text-smokehouse font-black uppercase leading-tight">
              OPEN 5AM DAILY FOR <br className="hidden md:block" /> THE EARLY SHIFT WORKERS.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://maps.google.com/?q=12181+Greenwell+Springs+Rd+Baton+Rouge+LA+70814" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button className="w-full bg-smokehouse text-white text-xl md:text-2xl font-black py-8 px-10 rounded-none hover:scale-105 transition-all">
                  <MapPin className="mr-2" /> DIRECTIONS
                </Button>
              </a>
              <a href={`tel:${storeInfo.phone}`} className="w-full sm:w-auto">
                <Button className="w-full bg-cayenne text-white text-xl md:text-2xl font-black py-8 px-10 rounded-none hover:scale-105 transition-all">
                  <Phone className="mr-2" /> CALL NOW
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};