"use client";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Star,
  ShoppingCart,
  Truck,
  Leaf,
  Users,
  Headphones,
  Heart,
  Menu,
  X,
  ChevronDown,
  Instagram,
  Facebook,
  Twitter,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#EFECE4]">
      {showSuccessToast && (
        <div className="fixed top-4 right-4 z-[60] bg-green-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 animate-in slide-in-from-right">
          <CheckCircle className="h-5 w-5" />
          <span>Successfully subscribed to newsletter!</span>
        </div>
      )}

      <header
        className={`bg-[#62664B] text-white sticky top-0 z-50 transition-shadow duration-300 ${
          isScrolled ? "shadow-lg" : ""
        }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 ml-2">
              <Leaf className="h-8 w-8" />
              <span className="text-2xl font-bold">You-Care</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-[#AB8872]  px-2 py-1">
                Home
              </a>
              <a href="#" className="hover:text-[#AB8872] px-2 py-1">
                Shop
              </a>
              <a href="#" className="hover:text-[#AB8872] px-2 py-1">
                About
              </a>
              <a href="#" className="hover:text-[#AB8872] px-2 py-1">
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-2 md:space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-[#AB8872] hover:bg-transparent hidden sm:inline-flex">
                Login
              </Button>
              <Button
                size="sm"
                className="bg-[#AB8872] hover:bg-[#AB8872]/90 text-white focus:outline-none focus:ring-2 focus:ring-white px-3 md:px-4">
                <ShoppingCart className="h-4 w-4 md:mr-2" />
                <span className="hidden md:inline">Cart</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-white hover:text-[#AB8872] hover:bg-transparent"
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
              <div className="flex flex-col space-y-4">
                <a href="#" className="hover:text-[#AB8872] px-2 py-1">
                  Home
                </a>
                <a href="#" className="hover:text-[#AB8872] px-2 py-1">
                  Shop
                </a>
                <a href="#" className="hover:text-[#AB8872] px-2 py-1">
                  About
                </a>
                <a href="#" className="hover:text-[#AB8872]  px-2 py-1">
                  Contact
                </a>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-[#AB8872] hover:bg-transparent justify-start px-2 sm:hidden">
                  Login
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      <main>
        <section className="relative pb-20 lg:pb-6 bg-[#EFECE4]">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              {/* Text Content - Left Side */}
              <div className="lg:w-1/2 text-center lg:text-left space-y-6 lg:space-y-8 mt-8 md:mt-12 lg:mt-0"> {/* Added mt-8 for mobile */}
                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#62664B] text-balance leading-tight">
                    Glow from Within with
                    <span className="block text-[#AB8872] mt-2">
                      Premium Natural Care
                    </span>
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-2xl text-[#62664B]/90 text-pretty">
                    Discover trusted healthcare and beauty products for your
                    holistic lifestyle. Quality ingredients, visible results.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-[#62664B] hover:bg-[#4a4e3a] text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-[#62664B]"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Shop Now
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#62664B] text-[#62664B] hover:bg-[#62664B] hover:text-white rounded-full px-8 py-6 text-lg font-semibold bg-white/80 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Leaf className="h-5 w-5 mr-2" />
                    Discover Products
                  </Button>
                </div>
              </div>

              {/* Image Content - Right Side */}
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-lg pt-8">
                  <Image
                    src="/image/glow2.jpeg"
                    alt="Natural beauty products"
                    width={600}
                    height={600}
                    className="rounded-2xl shadow-2xl w-full h-auto object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="bg-white/80 rounded-full p-2 shadow-lg">
              <ChevronDown className="h-6 w-6 text-[#62664B]" />
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#BBC2B6]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#62664B] mb-6 text-balance">
                Shop by Category
              </h2>
              <p className="text-[#62664B]/80 text-lg lg:text-xl max-w-2xl mx-auto text-pretty">
                Discover our curated collection of premium products
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Skincare",
                  icon: "✨",
                  image: "skincare products, serums and moisturizers",
                  src: "/image/skincare.jpeg",
                },
                {
                  name: "Supplements",
                  icon: "💊",
                  image: "natural supplements and vitamins",
                  src: "/image/healthsupplement.jpeg",
                },
                {
                  name: "Wellness",
                  icon: "🧘",
                  image: "wellness products, aromatherapy",
                  src: "/image/wellness.jpeg",
                },
                {
                  name: "Beauty Essentials",
                  icon: "💄",
                  image: "beauty essentials, makeup products",
                  src: "/image/beauty.jpeg",
                },
              ].map((category) => (
                <Card
                  key={category.name}
                  className="group hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white border-0 shadow-lg focus-within:ring-2 focus-within:ring-[#62664B]">
                  <CardContent className="p-6 text-center">
                    <div className="mb-6 h-48 overflow-hidden rounded-lg">
                      <Image
                        src={category.src}
                        alt={`${category.name} products collection`}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-semibold text-[#62664B] mb-4">
                      {category.name}
                    </h3>
                    <Button
                      variant="ghost"
                      className="text-[#AB8872] hover:text-[#62664B] hover:bg-[#62664B]/10 focus:outline-none focus:ring-2 focus:ring-[#62664B]">
                      Explore {category.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#EFECE4]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#62664B] mb-6 text-balance">
                Popular Products
              </h2>
              <p className="text-[#62664B]/80 text-lg lg:text-xl max-w-2xl mx-auto text-pretty">
                Customer favorites that deliver results
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Vitamin C Serum",
                  price: "$29.99",
                  rating: 4.8,
                  image: "vitamin c serum bottle, skincare product",
                  src: "/image/vitaminc.jpeg",
                },
                {
                  name: "Collagen Supplement",
                  price: "$39.99",
                  rating: 4.9,
                  image: "collagen supplement bottle, health product",
                  src: "/image/collagen.jpeg",
                },
                {
                  name: "Hydrating Moisturizer",
                  price: "$24.99",
                  rating: 4.7,
                  image: "moisturizer jar, skincare cream",
                  src: "/image/cerave.jpeg",
                },
                {
                  name: "Glow Face Mask",
                  price: "$19.99",
                  rating: 4.6,
                  image: "face mask package, beauty treatment",
                  src: "/image/facemask.jpeg",
                },
              ].map((product) => (
                <Card
                  key={product.name}
                  className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-white border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="relative mb-6">
                      <Image
                        src={product.src}
                        alt={`${
                          product.name
                        } - Premium ${product.name.toLowerCase()}`}
                        width={250}
                        height={250}
                        className="w-full h-48 object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                      />
                      <Button
                        size="sm"
                        className="absolute top-3 right-3 bg-white/90 hover:bg-white text-[#62664B] shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#62664B]"
                        variant="ghost">
                        <Heart className="h-4 w-4" />
                        <span className="sr-only">Add to wishlist</span>
                      </Button>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="text-sm text-[#62664B]/70 ml-1">
                          ({product.rating})
                        </span>
                      </div>
                      <h3 className="font-semibold text-[#62664B] text-lg">
                        {product.name}
                      </h3>
                      <p className="text-xl font-bold text-[#AB8872]">
                        {product.price}
                      </p>
                      <Button className="w-full bg-[#62664B] hover:bg-[#AB8872] text-white rounded-full group-hover:shadow-lg transition-all duration-300 py-6 font-semibold focus:outline-none focus:ring-2 focus:ring-[#62664B] focus:ring-offset-2">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#62664B] mb-6 text-balance">
                Why Choose You-Care
              </h2>
              <p className="text-[#62664B]/80 text-lg lg:text-xl max-w-2xl mx-auto text-pretty">
                Your trusted partner in health and beauty
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {[
                {
                  icon: Truck,
                  title: "Free Shipping",
                  description: "On orders over $50",
                },
                {
                  icon: Leaf,
                  title: "100% Organic",
                  description: "Natural ingredients only",
                },
                {
                  icon: Users,
                  title: "Trusted by 10k+",
                  description: "Happy customers worldwide",
                },
                {
                  icon: Headphones,
                  title: "24/7 Support",
                  description: "Always here to help",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="text-center space-y-6 group hover:scale-105 transition-transform duration-300">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#BBC2B6] rounded-full group-hover:bg-[#AB8872] transition-colors duration-300 shadow-lg">
                    <feature.icon className="h-10 w-10 text-[#62664B] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-[#62664B]">
                    {feature.title}
                  </h3>
                  <p className="text-[#62664B]/70 text-lg">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#EFECE4]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#62664B] mb-6 text-balance">
                What Our Customers Say
              </h2>
              <p className="text-[#62664B]/80 text-lg lg:text-xl max-w-2xl mx-auto text-pretty">
                Real results from real people
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Elora Zelalem",
                  review:
                    "You-Care transformed my skincare routine. My skin has never looked better!",
                  rating: 5,
                },
                {
                  name: "Michael Kebede",
                  review:
                    "The supplements are top quality and I feel more energetic than ever.",
                  rating: 5,
                },
                {
                  name: "Tsion Birhanu",
                  review:
                    "Fast shipping, great products, and amazing customer service. Highly recommend!",
                  rating: 5,
                },
              ].map((testimonial) => (
                <Card
                  key={testimonial.name}
                  className="bg-white border-0 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-[#62664B]/80 mb-6 italic text-lg leading-relaxed">
                      &quot;{testimonial.review}&quot;
                    </p>
                    <p className="font-semibold text-[#62664B] text-lg">
                      - {testimonial.name}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#AB8872]">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
                Stay in the Glow
              </h2>
              <p className="text-white/90 text-lg lg:text-xl text-pretty">
                Get exclusive offers, beauty tips, and wellness insights
                delivered to your inbox.
              </p>
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
                <Input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="bg-white border-0 rounded-full px-6 py-4 text-[#62664B] placeholder:text-[#62664B]/60 focus:outline-none focus:ring-2 focus:ring-white text-lg"
                />
                <Button
                  type="submit"
                  className="bg-[#62664B] hover:bg-[#62664B]/90 text-white rounded-full px-8 py-4 whitespace-nowrap font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#62664B] text-white py-10 sm:py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-2">
                <Leaf className="h-6 w-6" />
                <span className="text-xl font-bold">You-Care</span>
              </div>
              <p className="text-white/80 text-sm sm:text-base leading-snug">
                Your trusted partner for holistic health and beauty.
              </p>
              <div className="flex items-center space-x-3">
                <Instagram className="h-5 w-5 text-white/80 hover:text-[#AB8872]" />
                <Facebook className="h-5 w-5 text-white/80 hover:text-[#AB8872]" />
                <Twitter className="h-5 w-5 text-white/80 hover:text-[#AB8872]" />
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-sm sm:text-base font-semibold">
                Quick Links
              </h3>
              <div className="space-y-1">
                <a
                  href="#"
                  className="block text-white/80 text-sm sm:text-base hover:text-[#AB8872]">
                  Shop
                </a>
                <a
                  href="#"
                  className="block text-white/80 text-sm sm:text-base hover:text-[#AB8872]">
                  About Us
                </a>
                <a
                  href="#"
                  className="block text-white/80 text-sm sm:text-base hover:text-[#AB8872]">
                  Contact
                </a>
                <a
                  href="#"
                  className="block text-white/80 text-sm sm:text-base hover:text-[#AB8872]">
                  FAQ
                </a>
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-sm sm:text-base font-semibold">Support</h3>
              <div className="space-y-1">
                <a
                  href="#"
                  className="block text-white/80 text-sm sm:text-base hover:text-[#AB8872]">
                  Help Center
                </a>
                <a
                  href="#"
                  className="block text-white/80 text-sm sm:text-base hover:text-[#AB8872]">
                  Shipping Info
                </a>
                <a
                  href="#"
                  className="block text-white/80 text-sm sm:text-base hover:text-[#AB8872]">
                  Returns
                </a>
                <a
                  href="#"
                  className="block text-white/80 text-sm sm:text-base hover:text-[#AB8872]">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-6 pt-4 text-center">
            <p className="text-white/80 text-sm sm:text-base">
              © 2024 You-Care. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
