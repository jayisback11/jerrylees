import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockData } from '@/mock';

export const Products = () => {
  const { products } = mockData;
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Products', count: getAllProductsCount() },
    { id: 'boudin', label: 'Boudin', count: products.boudin.length },
    { id: 'specialties', label: 'Specialties', count: products.specialties.length },
    { id: 'sausages', label: 'Sausages', count: products.sausages.length },
    { id: 'stuffedMeats', label: 'Stuffed Meats', count: products.stuffedMeats.length },
    { id: 'plateLunches', label: 'Plate Lunches', count: products.plateLunches.length }
  ];

  function getAllProductsCount() {
    return Object.values(products).reduce((acc, category) => acc + category.length, 0);
  }

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
    <div className="min-h-screen pt-32 pb-16 bg-cream/30">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-smokehouse mb-4 uppercase tracking-widest">
            Our Menu
          </h1>
          <div className="w-24 h-1 bg-cayenne mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 italic">
            Taste the tradition since 1979
          </p>
        </div>

        {/* Category Navigation */}
        <Tabs defaultValue="all" className="mb-12" onValueChange={setSelectedCategory}>
          <TabsList className="w-full flex flex-wrap justify-center gap-4 bg-transparent h-auto p-0 mb-12">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="px-4 py-2 text-smokehouse font-bold uppercase tracking-tight data-[state=active]:text-cayenne data-[state=active]:border-b-2 data-[state=active]:border-cayenne rounded-none bg-transparent transition-all hover:text-cayenne"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory}>
            <div className="space-y-12">
              {displayProducts.map((product) => (
                <div key={product.id} className="group">
                  {/* Menu Item Row */}
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                    <div className="flex items-baseline flex-1">
                      <h3 className="text-xl font-bold text-smokehouse uppercase tracking-wide">
                        {product.name}
                      </h3>
                      {/* Dotted Leader Line */}
                      <div className="hidden md:block flex-1 border-b-2 border-dotted border-gray-300 mx-4"></div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      {product.popular && (
                        <span className="text-[10px] font-bold bg-cayenne text-white px-2 py-0.5 rounded uppercase">
                          Popular
                        </span>
                      )}
                      <span className="text-xl font-bold text-smokehouse whitespace-nowrap">
                        {product.price}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mt-2 max-w-2xl">
                    <p className="text-gray-600 leading-relaxed italic text-sm md:text-base">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer Info */}
        <div className="mt-20 pt-12 border-t border-smokehouse/20 text-center">
          <p className="text-smokehouse font-bold uppercase tracking-widest mb-4">
            Order by Phone: (225) 272-0739
          </p>
          <p className="text-sm text-gray-500 italic">
            Items are prepared fresh daily. Prices and availability subject to change.
          </p>
        </div>
      </div>
    </div>
  );
};