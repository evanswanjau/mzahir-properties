import PropertyListing from "@/components/PropertyListings";
import FeaturedBlogs from "@/components/sections/FeaturedBlogs";
import { useState } from "react";

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

const BuyPropertyPage = () => {
  const [imageIndices, setImageIndices] = useState<number[]>(
    properties.map(() => 0)
  );

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

  return (
    <>
      <section className="py-24 min-h-screen">
        <div className="max-w-[80%] mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Discover Properties to Buy
            </h1>
            <p className="text-gray-600 mb-8 w-4xl mx-auto">
              Explore our curated selection of premium properties across Nairobi
              with M. Zahir Properties. We offer a range of homes and
              investments tailored to your needs. Find your perfect property
              today and take the first step toward ownership.
            </p>
          </div>

          <div className="w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {properties.map((property, index) => (
                <PropertyListing
                  key={index}
                  property={property}
                  index={index}
                  onPrevImage={handlePrevImage}
                  onNextImage={handleNextImage}
                  currentImageIndex={imageIndices[index]}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <FeaturedBlogs />
    </>
  );
};

export default BuyPropertyPage;
