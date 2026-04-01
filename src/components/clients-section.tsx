"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";

const ClientsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on client side
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Continuous scroll functionality - optimized for mobile
  useEffect(() => {
    if (!api) return;
    
    // Start from a random position only once
    if (!isInitialized) {
      const randomStart = Math.floor(Math.random() * reviews.length);
      api.scrollTo(randomStart);
      setIsInitialized(true);
    }
    
    // Use longer interval for mobile to reduce performance impact
    const intervalTime = isMobile ? 5000 : 4000;
    
    const interval = setInterval(() => {
      // Simply use scrollNext - the carousel's loop: true handles the infinite loop
      api.scrollNext();
    }, intervalTime);
    
    return () => clearInterval(interval);
  }, [api, isMobile]);

  const reviews = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai, India",
      rating: 5,
      comment: "The quality of the mangoes exported by KISAN CARTS is exceptional. They arrived fresh and perfectly ripe. Highly recommended for bulk exports!",
      role: "Fruit Wholesaler"
    },
    {
      name: "Ahmed Al-Sayed",
      location: "Dubai, UAE",
      rating: 5,
      comment: "Best supply chain for fresh vegetables. Their transparency and commitment to delivery schedules are top-notch in the industry.",
      role: "Import Manager"
    },
    {
      name: "Sarah Johnson",
      location: "London, UK",
      rating: 4,
      comment: "We've been sourcing exotic produce from KISAN CARTS for over a year. The consistency in quality is what keeps us coming back.",
      role: "Retail Chain Owner"
    },
    {
      name: "Amit Patel",
      location: "Ahmedabad, India",
      rating: 5,
      comment: "Excellent service and fair pricing. They work directly with farmers, which is evident in the freshness of their leafy greens.",
      role: "Local Distributor"
    },
    {
      name: "Chen Wei",
      location: "Singapore",
      rating: 5,
      comment: "Reliable partner for seasonal fruits. Their packaging ensures the produce remains fresh throughout the international transit.",
      role: "Procurement Specialist"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full" />
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Trusted by businesses worldwide for our commitment to quality and farm-fresh produce
          </p>
        </motion.div>

        <div className="relative px-4 sm:px-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              dragFree: false,
              containScroll: "trimSnaps",
              slidesToScroll: 1,
              duration: 40,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full flex flex-col relative overflow-hidden group">
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-110" />
                      <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10" />
                      
                      {/* Star Rating */}
                      <div className="flex space-x-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} 
                          />
                        ))}
                      </div>

                      {/* Comment */}
                      <p className="text-gray-700 text-lg italic leading-relaxed mb-8 flex-grow">
                        &ldquo;{review.comment}&rdquo;
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center space-x-4 pt-6 border-t border-gray-50">
                        <div className="w-12 h-12 bg-primary-gradient rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg leading-none mb-1">
                            {review.name}
                          </h4>
                          <p className="text-primary text-sm font-semibold mb-1">
                            {review.role}
                          </p>
                          <p className="text-gray-500 text-xs">
                            {review.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: "150+", label: "Global Partners" },
            { number: "5000+", label: "Tons Exported" },
            { number: "99%", label: "Satisfaction" },
            { number: "24/7", label: "Global Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl lg:text-5xl font-bold text-primary mb-2 transition-transform duration-300 group-hover:scale-110">
                {stat.number}
              </div>
              <div className="text-gray-600 font-semibold uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
