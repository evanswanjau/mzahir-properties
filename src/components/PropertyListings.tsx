import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Bed, MapPin } from "lucide-react";

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

      <h3 className="text-xl font-semibold mb-1">{property.title}</h3>
      <p className="text-lg font-medium text-gray-800 mb-4">{property.price}</p>
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
  );
};

export default PropertyListing;
