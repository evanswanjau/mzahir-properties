import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const properties = [
  {
    name: "Doha Twin Towers",
    image: "/images/slider1.jpg",
  },
  {
    name: "Urban Sky",
    image: "/images/slider2.jpg",
  },
  {
    name: "Royal Rotana",
    image: "/images/slider3.jpg",
  },
  {
    name: "The Cove",
    image: "/images/slider4.webp",
  },
];

const SLIDE_INTERVAL = 6000; // 6 seconds for slower, elegant transitions

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  // Auto-slide with fade
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % properties.length);
    }, SLIDE_INTERVAL);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % properties.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + properties.length) % properties.length);

  return (
    <section className="h-screen w-full bg-[#1C1C1C] relative overflow-hidden">
      <AnimatePresence mode="wait">
        {properties.map((property, idx) =>
          idx === current ? (
            <motion.div
              key={property.name}
              className="absolute top-0 left-0 w-full h-full z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              aria-hidden={false}
            >
              <motion.img
                src={property.image}
                alt={property.name}
                className="w-full h-full object-cover object-center select-none"
                style={{ filter: "brightness(0.5)" }}
                draggable={false}
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                exit={{ scale: 1.05 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                <motion.h1
                  className="text-white font-playfair font-normal text-3xl md:text-4xl lg:text-5xl mb-6 text-center drop-shadow-lg tracking-wide"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  {property.name}
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                  <Button
                    className="border border-white bg-transparent text-white hover:bg-white hover:text-[#1C1C1C] px-8 py-4 rounded-none font-playfair text-base tracking-widest transition-colors duration-300 shadow-none"
                    style={{ boxShadow: "none" }}
                  >
                    View Our Exclusive Properties
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
      {/* Carousel Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-300 focus:outline-none"
        aria-label="Previous Slide"
        tabIndex={0}
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-300 focus:outline-none"
        aria-label="Next Slide"
        tabIndex={0}
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {properties.map((_, idx) => (
          <span
            key={idx}
            className={`block w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === current ? "bg-white scale-125" : "bg-white/30"
            }`}
            onClick={() => setCurrent(idx)}
            style={{ cursor: "pointer" }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
