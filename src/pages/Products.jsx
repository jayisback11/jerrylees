import React, { useState } from 'react';
import { ChevronRight, Utensils, Phone, Flame, ArrowRightLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockData } from '@/mock';

export const Products = () => {
  const { products, storeInfo } = mockData;
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'boudin', label: 'Boudin' },
    { id: 'specialties', label: 'Specialties' },
    { id: 'sausages', label: 'Sausages' },
    { id: 'stuffedMeats', label: 'Stuffed Meats' },
    { id: 'plateLunches', label: 'Plate Lunches' }
  ];

  function getAllProducts() {
    return [
      ...products.boudin,
      ...products.specialties,
      ...products.sausages,
      ...products.stuffedMeats,
      ...products.plateLunches
    ];
  }

  const displayProducts = selectedCategory === 'all' 
    ? getAllProducts() 
    : products[selectedCategory];

  return (
    <div className="min-h-screen bg-[#fcf9f2] font-serif overflow-x-hidden relative">
      {/* Butcher Paper Texture Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]" />

      {/* --- MENU HEADER --- */}
      <section className="relative pt-32 pb-12 md:pt-44 md:pb-20 px-4 md:px-6 border-b-8 border-double border-cayenne/20">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-100 border-2 border-amber-500 rounded-full px-4 py-1 mb-6">
            <Flame className="text-orange-600" size={14} />
            <span className="text-[10px] md:text-sm font-black uppercase tracking-widest text-orange-900">
              The Full Spread
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-smokehouse uppercase leading-[0.85] tracking-tighter mb-4">
            Our Menu
          </h1>
          <p className="text-xl md:text-3xl text-cayenne font-black italic tracking-tight">
            Authentic Cajun Traditions Since 1979
          </p>
          <div className="h-2 w-24 bg-goldenrod mt-4 mx-auto"></div>
        </div>
      </section>

      {/* --- MENU CONTENT --- */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]">
        <div className="max-w-5xl mx-auto">
          
          <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedCategory}>
            
            {/* Mobile Swipe Hint: Only shows on small screens */}
            <div className="flex md:hidden items-center justify-center gap-2 mb-4 text-smokehouse/60 animate-pulse">
              <ArrowRightLeft size={16} />
              <span className="text-[10px] font-black uppercase tracking-widest">Swipe for categories</span>
            </div>

            {/* Category Navigation - High Contrast Styling */}
            <TabsList className="w-full flex overflow-x-auto no-scrollbar justify-start md:justify-center gap-2 bg-transparent h-auto p-2 mb-12 snap-x">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="snap-center px-6 py-3 text-smokehouse font-black uppercase tracking-tighter border-2 border-smokehouse/20 data-[state=active]:border-smokehouse data-[state=active]:bg-smokehouse data-[state=active]:text-white data-[state=active]:rotate-1 transition-all rounded-none whitespace-nowrap shadow-sm hover:border-smokehouse"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-0 outline-none">
              <div className="bg-white p-6 md:p-16 shadow-2xl border-t-[10px] border-cayenne relative">
                
                <div className="flex items-center justify-center gap-3 mb-12">
                  <div className="h-px bg-stone-200 flex-1"></div>
                  <Utensils className="text-cayenne shrink-0" size={24} />
                  <div className="h-px bg-stone-200 flex-1"></div>
                </div>

                <div className="space-y-10 md:space-y-14">
                  {displayProducts.map((product) => (
                    <div key={product.id} className="group border-b border-stone-100 pb-8 last:border-0 md:pb-10">
                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="text-xl md:text-3xl font-black text-smokehouse uppercase leading-none">
                              {product.name}
                            </h3>
                            {product.popular && (
                              <span className="bg-goldenrod text-[10px] font-black px-2 py-0.5 rounded rotate-2 uppercase tracking-tighter shadow-sm text-smokehouse">
                                Local's Fav
                              </span>
                            )}
                          </div>
                          <p className="text-stone-500 font-bold italic text-base leading-snug">
                            {product.description}
                          </p>
                        </div>
                        
                        <div className="text-3xl md:text-4xl font-black text-cayenne tabular-nums md:pl-6 md:border-l-2 md:border-dashed border-stone-200 leading-none">
                          {product.price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer Call to Action */}
                <div className="mt-16 pt-12 border-t-4 border-double border-stone-100 text-center">
                  <p className="text-smokehouse font-black uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
                    <Phone size={20} className="text-cayenne" /> Order by Phone
                  </p>
                  <a href={`tel:${storeInfo.phone.replace(/\D/g, '')}`} className="text-3xl md:text-5xl font-black text-cayenne hover:scale-105 transition-transform inline-block">
                    {storeInfo.phone}
                  </a>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-goldenrod p-1 border-[6px] border-smokehouse shadow-[8px_8px_0px_0px_rgba(42,34,27,1)] md:shadow-[16px_16px_0px_0px_rgba(42,34,27,1)]">
          <div className="border-2 border-smokehouse p-8 md:p-14 text-center space-y-6 bg-[#ffc107]">
            <h2 className="text-4xl md:text-7xl font-black text-smokehouse uppercase italic tracking-tighter leading-none">
              Come Get It
            </h2>
            <p className="text-lg md:text-2xl text-smokehouse font-black uppercase leading-tight">
              Hot Boudin & Fresh Cracklin <br className="hidden md:block" /> Ready at 5:00 AM.
            </p>
            <div className="flex justify-center pt-4">
              <a href="https://maps.google.com/?q=12181+Greenwell+Springs+Rd+Baton+Rouge+LA+70814" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button className="w-full bg-smokehouse text-white text-xl md:text-2xl font-black py-8 px-10 rounded-none hover:bg-black transition-all">
                  GET DIRECTIONS
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};