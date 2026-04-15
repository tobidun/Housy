import React from "react";
import Image from "next/image";
import { MapPin, Bed, Bath, Users } from "lucide-react";
import { playfair } from "@/lib/fonts";

interface PropertyCardProps {
  image: string;
  price: string;
  title: string;
  location: string;
  id: string;
  category: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  price,
  title,
  location,
  id,
  category,
}) => {
  return (
    <a href={`/${category}/${id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        {/* Image with Price Overlay */}
        <div className="relative h-72 sm:h-80 overflow-hidden">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 bg-[#C0581B] px-3 py-1 rounded-full shadow-md">
            <p className="text-white text-[12px] font-normal">{price}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 bg-[#FBFAF9]">
          <h3
            className={`text-[16px] sm:text-[18px] font-semibold text-gray-900 mb-2 ${playfair.className}`}
          >
            {title}
          </h3>
          <p className="text-[#6a7181] text-sm mb-3 flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-[#C0581B]" />
            {location}
          </p>
          <p className="text-[#6a7181] text-sm mb-4 leading-relaxed ">
            An exquisitely furnished one-bedroom suite with modern amenities and
            stunning city views.
          </p>

          {/* Amenities */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 gap-2 sm:gap-4">
            <div className="flex items-center text-gray-600">
              <Bed className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="text-xs sm:text-sm">2 Beds</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Bath className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="text-xs sm:text-sm">1 Bath</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="text-xs sm:text-sm">2 Guests</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default PropertyCard;
