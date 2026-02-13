import React from "react";
import { Card } from "@/components/ui/card";
import { mockData } from "@/mock";

export const About = () => {
  const { history, storeInfo } = mockData;

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-smokehouse mb-4">
            Our Story
          </h1>
          <p className="text-2xl text-cayenne font-semibold mb-4">
            A Family Tradition Since 1979
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {history.intro}
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <div className="aspect-[21/9] overflow-hidden rounded-2xl shadow-lg">
            <img
              src="images/1.jpg"
              alt="Jerry Lee's Storefront"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Founder Section */}
        <div className="mb-20">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-square md:aspect-auto rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/3.jpg"
                  alt="Gerard 'Jerry' Lee Duplantis"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-smokehouse mb-4">
                  The King of Boudin
                </h2>
                <h3 className="text-2xl text-cayenne font-semibold mb-4">
                  Gerard "Jerry" Lee Duplantis
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Born and raised in St. Martinville, Louisiana, Jerry learned
                  the art of Cajun cooking from his family. In 1979, he brought
                  those cherished traditions to Baton Rouge, opening what would
                  become a legendary specialty meat market.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Jerry's secret boudin recipe is known by no one else - a
                  closely guarded family secret that has been refined over
                  nearly five decades. Every batch is a testament to his
                  commitment to authenticity, quality, and the preservation of
                  true Cajun cuisine.
                </p>
                <p className="text-lg text-goldenrod font-bold italic">
                  "Hard Work, Sacrifice, and Secret Seasonings - that's what
                  makes it special."
                  <br />
                  <span className="text-base text-gray-600 not-italic font-normal">
                    - Jerry Lee Duplantis
                  </span>
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-smokehouse text-center mb-12">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            {history.timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div>
                  <div className="inline-block bg-cayenne text-white px-4 py-2 rounded-full font-bold mb-3">
                    {item.year}
                  </div>
                  <h3 className="text-2xl font-bold text-smokehouse mb-2">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legacy Section */}
      <div className="mb-20">
  <Card className="bg-cream border-l-4 border-cayenne p-8 md:p-12">
    <h2 className="text-3xl font-bold text-smokehouse mb-6 text-center">
      A TRADITION OF LOYALTY
    </h2>
    <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-8">
      The secret to our success isn't just the recipe—it's the people. 
      Jerry Lee is proud to have a staff of 14 loyal employees, including Terry Eldridge 
      and Stephen Cangelosi, who have both worked alongside him for over 30 years.
    </p>
    <div className="text-center">
      <p className="text-lg text-gray-600 mb-4 italic">
        "I grew up in Cajun Country. I knew everybody ate boudin there, 
        so I said, they've got to have taste buds in Baton Rouge." 
        — Jerry Lee Duplantis
      </p>
      <p className="text-sm text-gray-500 uppercase tracking-widest">
        Authentic Smokehouse Methods • Hickory & Pecan Wood • Since 1977
      </p>
    </div>
  </Card>
</div>

        {/* Image Gallery */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-smokehouse text-center mb-12">
            A Glimpse Inside
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/4.jpg"
                alt="Smokehouse Interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/5.jpg"
                alt="Fresh Boudin Making"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/6.jpg"
                alt="Little Jerry at Work"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-smokehouse text-white rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Experience the Tradition</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Visit us and taste what nearly 50 years of dedication to authentic
            Cajun cuisine tastes like.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://maps.google.com/?q=12181+Greenwell+Springs+Rd+Baton+Rouge+LA+70814"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-cayenne hover:bg-cayenne-red-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 w-full sm:w-auto">
                Visit Our Shop
              </button>
            </a>
            <a href="tel:2252720739">
              <button className="bg-goldenrod hover:bg-goldenrod-light text-smokehouse px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 w-full sm:w-auto">
                Call {storeInfo.phone}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
