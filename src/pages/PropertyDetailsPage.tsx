import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Bed,
  Bath,
  Ruler,
  ParkingCircle,
  Dumbbell,
  ShieldCheck,
  Waves,
} from "lucide-react";

// Placeholder property data (replace with real data source as needed)
const properties = [
  {
    id: 0,
    title: "3-Bedroom Apartment in Kileleshwa",
    for: "For Sale",
    price: "Ksh 10M",
    location: "Kileleshwa, Nairobi",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    dsq: true,
    description:
      "A modern, spacious 3-bedroom apartment in the heart of Kileleshwa. Features a large balcony, modern kitchen, and secure neighborhood. Perfect for families seeking comfort and convenience.",
    images: [
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/3.jpg",
      "/images/4.jpg",
      "/images/5.jpg",
    ],
  },
  {
    id: 1,
    title: "4-Bedroom Villa in Karen Water Front",
    for: "For Sale",
    price: "Ksh 15M",
    location: "Karen, Nairobi",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2500,
    dsq: true,
    description:
      "A luxurious 4-bedroom villa with a private garden, large windows, premium finishing, and a stunning water front view. Ideal for those who value privacy and elegance.",
    images: [
      "/images/4.jpg",
      "/images/5.jpg",
      "/images/6.jpg",
      "/images/1.jpg",
      "/images/2.jpg",
    ],
  },
  // Add more properties as needed
];

const amenitiesList = [
  { label: "Parking", icon: ParkingCircle },
  { label: "Gym", icon: Dumbbell },
  { label: "Swimming Pool", icon: Waves },
  { label: "24hr Security", icon: ShieldCheck },
  { label: "Balcony", icon: Ruler },
  { label: "Backup Generator", icon: ShieldCheck },
  { label: "Elevator", icon: Dumbbell },
  { label: "CCTV", icon: ShieldCheck },
  { label: "Garden", icon: Waves },
  { label: "Children's Play Area", icon: ParkingCircle },
  { label: "Internet", icon: Dumbbell },
  { label: "Gated Community", icon: ShieldCheck },
];

const PropertyDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const property = properties[Number(id)];
  const [heroIndex, setHeroIndex] = useState(0);
  const [mainImage, setMainImage] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Smooth image transition for hero
  useEffect(() => {
    setMainImage(heroIndex);
  }, [heroIndex]);

  if (!property) {
    return (
      <div className="max-w-2xl mx-auto py-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Property not found</h2>
        <button
          className="text-orange-700 underline"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  // Hero image carousel navigation
  const handlePrevHero = () => {
    setHeroIndex(
      (prev) => (prev - 1 + property.images.length) % property.images.length
    );
  };
  const handleNextHero = () => {
    setHeroIndex((prev) => (prev + 1) % property.images.length);
  };

  // Main image carousel navigation
  const handlePrevMain = () => {
    setMainImage(
      (prev) => (prev - 1 + property.images.length) % property.images.length
    );
  };
  const handleNextMain = () => {
    setMainImage((prev) => (prev + 1) % property.images.length);
  };

  return (
    <div className="bg-black min-h-screen w-full">
      {/* 1. Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-black/70 to-transparent" />
        <img
          src={property.images[heroIndex]}
          alt={property.title}
          className="w-full h-full object-cover transition-all duration-700 ease-in-out"
          style={{ opacity: 1 }}
        />
        <button
          onClick={handlePrevHero}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 p-3 text-white hover:bg-black/70 transition-colors z-20"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={handleNextHero}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 p-3 text-white hover:bg-black/70 transition-colors z-20"
        >
          <ChevronRight size={28} />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {property.images.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${
                heroIndex === idx ? "bg-orange-500" : "bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* 2. Property Summary Section */}
      <div className="w-full px-0 py-0">
        <div className="flex flex-row bg-black text-white overflow-hidden min-h-[140px] w-full items-center">
          {/* Vertical FOR SALE label, bottom-to-top */}
          <div className="flex items-center justify-center px-0">
            <span
              className="bg-orange-500 text-white font-bold text-xs md:text-sm py-6 px-2 tracking-widest uppercase"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                textOrientation: "mixed",
                letterSpacing: "0.2em",
              }}
            >
              {property.for}
            </span>
          </div>
          {/* Property name, location, price */}
          <div className="flex flex-col justify-center pl-8 pr-4 py-6 min-w-[260px]">
            <h1 className="text-2xl md:text-3xl font-bold font-playfair mb-2 uppercase tracking-wide">
              {property.title}
            </h1>
            <div className="text-lg text-gray-200 mb-2 uppercase tracking-wider">
              {property.location}
            </div>
            <div className="text-3xl md:text-4xl font-bold text-white mt-2">
              {property.price}
            </div>
          </div>
          {/* Property icons/details (horizontal row, right-aligned) */}
          <div className="flex-1 flex items-center justify-end gap-12 pr-10">
            <span className="flex items-center gap-2 text-orange-500">
              <Bed className="inline-block align-middle" size={28} />
              <span className="text-white text-lg">
                {property.bedrooms} BED
              </span>
            </span>
            <span className="flex items-center gap-2 text-orange-500">
              <Bath className="inline-block align-middle" size={28} />
              <span className="text-white text-lg">
                {property.bathrooms} BATH
              </span>
            </span>
            <span className="flex items-center gap-2 text-orange-500">
              <Ruler className="inline-block align-middle" size={28} />
              <span className="text-white text-lg">{property.sqft} SQFT</span>
            </span>
            <span className="flex items-center gap-2 text-orange-500">
              <ShieldCheck className="inline-block align-middle" size={28} />
              <span className="text-white text-lg">
                {property.dsq ? "DSQ" : "No DSQ"}
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* 3. Property Description */}
      <div className="w-full px-0">
        <div className="bg-black text-white p-8 mt-0 w-full flex justify-center">
          <div className="max-w-3xl w-full flex flex-col items-center">
            {/* Title Block */}
            <div className="flex items-center gap-4 mb-6">
              <div className="border-l-4 border-orange-500 h-12" />
              <div className="text-center">
                <div className="uppercase text-lg font-semibold tracking-widest font-playfair">
                  {property.title}
                </div>
                <div className="uppercase text-sm text-gray-300 tracking-wider">
                  {property.location}
                </div>
              </div>
            </div>
            {/* Paragraph */}
            <p className="text-white text-base leading-relaxed font-lato mb-8 text-center">
              {property.description}
            </p>
            {/* Bottom Border Removed */}
          </div>
        </div>
      </div>

      {/* 4. Main Image Section (large, edge-to-edge) + 5. Additional Image Carousel */}
      <div className="w-full p-6">
        <div className="relative w-full h-[450px] md:h-[600px] overflow-hidden">
          <img
            src={property.images[mainImage]}
            alt={property.title}
            className="w-full h-full object-cover transition-all duration-700 ease-in-out"
          />
          <button
            onClick={handlePrevMain}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 p-2 text-white hover:bg-black/70 transition-colors"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={handleNextMain}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 p-2 text-white hover:bg-black/70 transition-colors"
          >
            <ChevronRight size={22} />
          </button>
        </div>
        {/* Additional Image Carousel */}
        <div className="w-full pb-8 pt-4">
          <div className="flex gap-3 overflow-x-auto hide-scrollbar">
            {property.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Property thumbnail ${idx + 1}`}
                className={`w-48 h-36 object-cover cursor-pointer border-2 transition-all duration-300 ${
                  mainImage === idx ? "border-orange-700" : "border-transparent"
                }`}
                onClick={() => setMainImage(idx)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 6. Amenities Section */}
      <section className="p-6">
        <div className="w-full px-12 py-8 bg-white shadow mb-8">
          <div className="flex items-center gap-4 mb-6 max-w-2xl w-full mx-auto">
            <div className="border-l-4 border-orange-500 h-12" />
            <div className="text-left">
              <div className="uppercase text-lg font-semibold tracking-widest font-playfair">
                Amenities
              </div>
              <div className="uppercase text-sm text-gray-300 tracking-wider">
                {property.title}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenitiesList.map(({ label, icon: Icon }, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <Icon size={32} className="text-orange-700" />
                <span className="text-gray-700 font-lato text-base">
                  {label}
                </span>
              </div>
            ))}
          </div>
          {/* 7. Book a Showing Button */}
          <div className="flex justify-center mt-8">
            <button
              className="px-8 py-3 bg-orange-700 text-white font-bold uppercase tracking-wide transition-all duration-300 hover:bg-orange-500 focus:outline-none rounded-none"
              onClick={() => setShowModal(true)}
            >
              Book a Showing
            </button>
          </div>
        </div>
      </section>

      {/* Book a Showing Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white shadow-lg p-8 w-full max-w-md relative rounded-none">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold mb-4 font-playfair">
              Book a Showing
            </h3>
            <form className="flex flex-col gap-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="flex-1 border-b border-gray-300 focus:border-orange-700 outline-none py-2 px-2 bg-transparent"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="flex-1 border-b border-gray-300 focus:border-orange-700 outline-none py-2 px-2 bg-transparent"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="border-b border-gray-300 focus:border-orange-700 outline-none py-2 px-2 bg-transparent"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="border-b border-gray-300 focus:border-orange-700 outline-none py-2 px-2 bg-transparent"
              />
              <input
                type="date"
                className="border-b border-gray-300 focus:border-orange-700 outline-none py-2 px-2 bg-transparent"
              />
              <textarea
                placeholder="Message"
                className="border-b border-gray-300 focus:border-orange-700 outline-none py-2 px-2 bg-transparent resize-none min-h-[60px]"
              />
              <button
                type="submit"
                className="mt-2 px-6 py-3 bg-orange-700 text-white font-bold uppercase tracking-wide transition-all duration-300 hover:bg-orange-500 focus:outline-none rounded-none"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
      {/* 8. Request More Info Section */}
      <section className="relative bg-black py-24 px-8 lg:px-16 overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl font-playfair font-bold text-white mb-8 uppercase tracking-wide text-center">
            Request More Info
          </h2>
          <form className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex flex-col">
                <label className="text-white mb-2 font-lato text-sm">
                  First Name
                </label>
                <input
                  type="text"
                  className="bg-transparent border-0 border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-[#FF8800] transition-colors duration-300 py-2"
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white mb-2 font-lato text-sm">
                  Last Name
                </label>
                <input
                  type="text"
                  className="bg-transparent border-0 border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-[#FF8800] transition-colors duration-300 py-2"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white mb-2 font-lato text-sm">
                  Phone
                </label>
                <input
                  type="tel"
                  className="bg-transparent border-0 border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-[#FF8800] transition-colors duration-300 py-2"
                  placeholder="Phone"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white mb-2 font-lato text-sm">
                  Email
                </label>
                <input
                  type="email"
                  className="bg-transparent border-0 border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-[#FF8800] transition-colors duration-300 py-2"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="flex flex-col mb-8">
              <label className="text-white mb-2 font-lato text-sm">
                Message
              </label>
              <textarea
                rows={5}
                className="bg-transparent border border-white text-white placeholder-gray-400 focus:outline-none focus:border-[#FF8800] transition-colors duration-300 p-4 resize-none font-lato"
                placeholder="Type your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 px-0 bg-transparent border border-white text-white font-playfair text-lg uppercase tracking-widest transition-all duration-500 hover:bg-[#FF8800] hover:border-[#FF8800] hover:text-white rounded-none"
              style={{ borderRadius: 0 }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetailsPage;
