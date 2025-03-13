import { useEffect, useRef, useState } from "react";
import PropertyListing from "@/components/PropertyListings";
import { motion } from "framer-motion";

interface Property {
  title: string;
  price: string;
  size: string;
  location: string;
  keyFeatures: string;
  images: string[];
}

const properties: Property[] = [
  {
    title: "3-Bedroom Apartment in Kileleshwa",
    price: "Ksh 10M",
    size: "3 Bedrooms, 2 Bathrooms",
    location: "Kileleshwa, Nairobi",
    keyFeatures: "Spacious balcony, modern kitchen, secure neighborhood",
    images: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"],
  },
  {
    title: "4-Bedroom Villa in Karen Water Front",
    price: "Ksh 15M",
    size: "4 Bedrooms, 3 Bathrooms",
    location: "Karen, Nairobi",
    keyFeatures:
      "Private garden, large windows, premium finishing and a water front view",
    images: ["/images/4.jpg", "/images/5.jpg", "/images/6.jpg"],
  },
  {
    title: "2-Bedroom Apartment in Westlands",
    price: "Ksh 8.5M",
    size: "2 Bedrooms, 2 Bathrooms",
    location: "Westlands, Nairobi",
    keyFeatures:
      "High-rise view, gym & swimming pool access, smart home features",
    images: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"],
  },
];

const FeaturedProperties = () => {
  const [imageIndices, setImageIndices] = useState<number[]>(
    properties.map(() => 0)
  );
  const [isScrolling, setIsScrolling] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 0.8;
    let animationId: number;

    const scroll = () => {
      if (isScrolling) {
        scrollPositionRef.current += scrollSpeed;
        const maxScroll = scrollContainer.scrollWidth / 2;

        if (scrollPositionRef.current >= maxScroll) {
          scrollPositionRef.current -= maxScroll;
          scrollContainer.scrollLeft = scrollPositionRef.current;
        } else {
          scrollContainer.scrollLeft = scrollPositionRef.current;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isScrolling]);

  const handlePrevImage = (index: number) => {
    setImageIndices((prev) =>
      prev.map((curr, i) =>
        i === index
          ? (curr - 1 + properties[i].images.length) %
            properties[i].images.length
          : curr
      )
    );
  };

  const handleNextImage = (index: number) => {
    setImageIndices((prev) =>
      prev.map((curr, i) =>
        i === index ? (curr + 1) % properties[i].images.length : curr
      )
    );
  };

  const doubledProperties = [...properties, ...properties];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[80%] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl text-gray-800 font-bold">
            Featured Property Listings
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-gray-600 mb-8 w-6/12 mx-auto"
        >
          <p>
            Explore our handpicked selection of premium properties in Nairobi.
            Whether you're looking for a modern apartment, a spacious villa, or
            a cozy home, we have something for everyone. Browse through our
            listings and find your dream property today.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden"
        >
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth hide-scrollbar py-12"
            style={{ scrollBehavior: "auto" }}
            onMouseEnter={() => setIsScrolling(false)}
            onMouseLeave={() => setIsScrolling(true)}
          >
            {doubledProperties.map((property, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <PropertyListing
                  property={property}
                  index={index % properties.length}
                  onPrevImage={handlePrevImage}
                  onNextImage={handleNextImage}
                  currentImageIndex={imageIndices[index % properties.length]}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
