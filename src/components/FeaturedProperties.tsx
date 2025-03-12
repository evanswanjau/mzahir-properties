import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Bed, MapPin } from "lucide-react";

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

  // Infinite slow scroll for properties
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 0.8;
    let animationId: number;

    const scroll = () => {
      if (isScrolling) {
        scrollPositionRef.current += scrollSpeed;
        const maxScroll = scrollContainer.scrollWidth / 2;

        // Seamless reset when reaching the halfway point
        if (scrollPositionRef.current >= maxScroll) {
          scrollPositionRef.current -= maxScroll; // Jump back by half the width
          scrollContainer.scrollLeft = scrollPositionRef.current; // Update immediately
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
      <h2 className="text-4xl text-gray-800 font-bold text-center mb-8">
        Featured Property Listings
      </h2>
      <p className=" text-lg text-center text-gray-600 mb-12 w-6/12 mx-auto">
        Explore our handpicked selection of premium properties in Nairobi.
        Whether you're looking for a modern apartment, a spacious villa, or a
        cozy home, we have something for everyone. Browse through our listings
        and find your dream property today.
      </p>
      <div
        className="relative max-w-[80%] mx-auto px-4 overflow-hidden"
        onMouseEnter={() => setIsScrolling(false)}
        onMouseLeave={() => setIsScrolling(true)}
      >
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth hide-scrollbar py-12"
          style={{ scrollBehavior: "auto" }}
        >
          {doubledProperties.map((property, index) => (
            <div
              key={index}
              className="min-w-[400px] bg-white p-4 rounded-xl transition-all duration-500 hover:shadow-2xl"
            >
              <div className="relative h-56 mb-4 rounded-lg overflow-hidden">
                <img
                  src={property.images[imageIndices[index % properties.length]]}
                  alt={`${property.title} - Image ${
                    imageIndices[index % properties.length] + 1
                  }`}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <button
                  onClick={() => handlePrevImage(index % properties.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => handleNextImage(index % properties.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <h3 className="text-xl font-semibold mb-1">{property.title}</h3>
              <p className="text-lg font-medium text-gray-800 mb-4">
                {property.price}
              </p>
              <p className="text-gray-600 flex items-center gap-2 mb-3">
                <Bed size={16} className="text-green-600" />
                {property.size}
              </p>
              <p className="text-gray-600 flex items-center gap-2 mb-3">
                <MapPin size={16} className="text-green-600" />
                {property.location}
              </p>
              <p className="text-gray-400 mb-4">{property.keyFeatures}</p>
              <div className="flex gap-4">
                <Button
                  variant="default"
                  className="bg-green-700 border border-green-700 cursor-pointer hover:bg-green-900 hover:border-green-900 flex-1 text-white font-body py-5 rounded-sm transition-all duration-500"
                >
                  View Details
                </Button>
                <Button
                  variant="outline"
                  className="border-green-700 cursor-pointer text-green-700 hover:bg-green-700 hover:text-white font-body rounded-sm py-5 transition-all duration-300 flex-1 shadow-none"
                >
                  Enquire Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
