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
    testimonials,
    facebookPosts,
    news,
  } = mockData;

  const iconMap = {
    award: Award,
    lock: Lock,
    flame: Flame,
    heart: Heart,
    star: Star,
    clock: Clock,
  };

  // Featured products - combine top items from each category
  const featuredProducts = [
    ...products.boudin,
    ...products.specialties.slice(0, 2),
    ...products.sausages.slice(0, 2),
  ].slice(0, 6);

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="hero-section section-padding">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <Badge className="bg-goldenrod text-smokehouse px-4 py-1.5 text-sm font-bold">
                  Since 1979 • {storeInfo.rating} ⭐ Rating
                </Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-smokehouse mb-4 leading-tight">
                {hero.headline}
              </h1>
              <p className="text-2xl md:text-3xl text-cayenne font-semibold mb-4">
                {hero.subheadline}
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://maps.google.com/?q=12181+Greenwell+Springs+Rd+Baton+Rouge+LA+70814"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="btn-primary px-8 py-6 text-lg w-full sm:w-auto">
                    <MapPin className="mr-2" size={20} />
                    {hero.cta.primary}
                  </Button>
                </a>
                <Link to="/products">
                  <Button className="btn-secondary px-8 py-6 text-lg w-full sm:w-auto">
                    {hero.cta.secondary}
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-cayenne" />
                  <a
                    href="tel:2252720739"
                    className="hover:text-cayenne transition-colors duration-300"
                  >
                    {storeInfo.phone}
                  </a>
                </div>
                <div className="hidden sm:block h-4 w-px bg-gray-300"></div>
                <p className="hidden sm:block">Open Daily 5AM - 5PM</p>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/2.jpg"
                  alt="Jerry Lee's Famous Boudin"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border-4 border-goldenrod">
                <p className="text-4xl font-bold text-cayenne mb-1">
                  {storeInfo.rating}
                </p>
                <p className="text-sm text-gray-600 font-semibold">★★★★★</p>
                <p className="text-xs text-gray-500 mt-1">
                  {storeInfo.reviewCount}+ reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-smokehouse mb-4">
              Why Jerry Lee's?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The Heart of Cajun Country in Baton Rouge
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              return (
                <Card
                  key={index}
                  className="p-6 border-2 hover:border-cayenne transition-all duration-300"
                >
                  <div className="feature-icon">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-smokehouse mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-smokehouse mb-4">
              Our Specialties
            </h2>
            <div className="w-20 h-1 bg-cayenne mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto italic">
              Made fresh daily with our secret family recipes
            </p>
          </div>

          {/* List Style Menu */}
          <div className="space-y-10">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group">
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
                <div className="mt-2">
                  <p className="text-gray-600 leading-relaxed italic text-sm md:text-base">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-16">
            <Link to="/products">
              <Button className="btn-primary px-10 py-6 text-lg rounded-none uppercase tracking-widest">
                View Full Menu
                <ChevronRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-smokehouse mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by Baton Rouge for nearly 50 years
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial) => (
              <Card
                key={testimonial.id}
                className="testimonial-card p-6 bg-cream border-l-4 border-cayenne"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-goldenrod text-goldenrod"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="font-bold text-smokehouse">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500">{testimonial.location}</p>
                  </div>
                  <p className="text-xs text-gray-400">{testimonial.date}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facebook Feed Section */}

      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-smokehouse mb-4">
              Fresh from the Smokehouse
            </h2>
            <p className="text-lg text-gray-600">
              Follow us for daily updates on fresh batches
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {facebookPosts.map((post) => (
              <Card
                key={post.id}
                className="product-card overflow-hidden bg-white shadow-sm border-none"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={post.image}
                    alt="Facebook update"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2 font-medium">
                    {post.date}
                  </p>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {post.text}
                  </p>
                  <div className="flex items-center gap-4 text-sm font-bold text-cayenne">
                    <span className="flex items-center gap-1">
                      ❤️ {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      💬 {post.comments}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href={storeInfo.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="btn-secondary px-8 py-6 text-lg">
              Follow Us on Facebook
              <ChevronRight className="ml-2" size={20} />
            </Button>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-smokehouse text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Visit Us Today
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Experience the authentic taste of Cajun country. Open early at 5 AM
            for plant workers and fresh food lovers!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://maps.google.com/?q=12181+Greenwell+Springs+Rd+Baton+Rouge+LA+70814"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-cayenne hover:bg-cayenne-red-dark text-white px-8 py-6 text-lg w-full sm:w-auto">
                <MapPin className="mr-2" size={20} />
                Get Directions
              </Button>
            </a>
            <a href="tel:2252720739">
              <Button className="bg-goldenrod hover:bg-goldenrod-light text-smokehouse px-8 py-6 text-lg font-bold w-full sm:w-auto">
                <Phone className="mr-2" size={20} />
                Call {storeInfo.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
