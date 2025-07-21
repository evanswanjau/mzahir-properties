import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Bed, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Property {
  title: string;
  price: string;
  size: string;
  location: string;
  keyFeatures: string;
  images: string[];
}

interface PropertyListingProps {
  property: Property;
  index: number;
  onPrevImage: (index: number) => void;
  onNextImage: (index: number) => void;
  currentImageIndex: number;
}

const PropertyListing = ({
  property,
  index,
  onPrevImage,
  onNextImage,
  currentImageIndex,
}: PropertyListingProps) => {
  const navigate = useNavigate();
  return (
    <div className="min-w-[400px] bg-white p-4 rounded-xl transition-all duration-500 hover:shadow-2xl">
      <div className="relative h-56 mb-4 rounded-lg overflow-hidden">
        <img
          src={property.images[currentImageIndex]}
          alt={`${property.title} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <button
          onClick={() => onPrevImage(index)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => onNextImage(index)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <h3 className="text-lg font-playfair font-semibold mb-1">{property.title}</h3>
      <p className="text-base font-lato font-medium text-gray-800 mb-4">{property.price}</p>
      <p className="text-gray-600 flex items-center gap-2 mb-3 font-lato">
        <Bed size={16} className="text-green-600" />
        {property.size}
      </p>
      <p className="text-gray-600 flex items-center gap-2 mb-3 font-lato">
        <MapPin size={16} className="text-green-600" />
        {property.location}
      </p>
      <p className="text-gray-400 mb-4 font-lato">{property.keyFeatures}</p>
      <div className="flex gap-4">
        <Button
          variant="ghost"
          className="border border-white bg-transparent text-white hover:bg-white hover:text-black font-playfair rounded-none flex-1 py-5 transition-all duration-500"
          onClick={() => navigate(`/property/${index}`)}
        >
          View Details
        </Button>
        <Button
          variant="outline"
          className="border-green-700 cursor-pointer text-green-700 hover:bg-green-700 hover:text-white font-lato rounded-none py-5 transition-all duration-300 flex-1 shadow-none"
        >
          Enquire Now
        </Button>
      </div>
    </div>
  );
};

export default PropertyListing;
