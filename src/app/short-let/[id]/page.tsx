"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Bed,
  Bath,
  Square,
  Users,
  Calendar,
  Eye,
  MapPin,
  Check,
  CalendarDays,
} from "lucide-react";
import { playfair } from "@/lib/fonts";
import SimpleReservationModal from "@/components/SimpleReservationModal";
import SimpleInspectionModal from "@/components/SimpleInspectionModal";

interface PropertyDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const PropertyDetailPage: React.FC<PropertyDetailPageProps> = ({ params }) => {
  const resolvedParams = use(params);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [isInspectionModalOpen, setIsInspectionModalOpen] = useState(false);

  // Property data based on ID
  const properties: Record<string, any> = {
    "1": {
      id: "1",
      title: "Luxury Downtown Apartment",
      location: "Victoria Island, Lagos",
      price: "₦85,000",
      priceUnit: "/ per night",
      beds: 2,
      baths: 2,
      sqft: 1200,
      guests: 4,
      mainImage: "/shortlet-1.jpeg",
      description:
        "Experience luxury living in this stunning downtown apartment located in the heart of Victoria Island. This beautifully designed space combines modern elegance with comfort, offering breathtaking views of the city skyline.",
      amenities: [
        "High-speed WiFi",
        "Smart TV with Netflix",
        "Fully equipped kitchen",
        "Air conditioning",
        "24/7 security",
        "Parking space",
        "Gym access",
        "Swimming pool",
        "Concierge service",
        "Laundry facilities",
      ],
    },
    "2": {
      id: "2",
      title: "Cozy Studio Suite",
      location: "Ikoyi, Lagos",
      price: "₦150,000",
      priceUnit: "/ per night",
      beds: 1,
      baths: 1,
      sqft: 800,
      guests: 2,
      mainImage: "/shortlet-2.jpeg",
      description:
        "Perfect for business travelers, this studio offers comfort and convenience in a prime location. Modern amenities and thoughtful design make it ideal for both short and extended stays.",
      amenities: [
        "High-speed WiFi",
        "Smart TV with Netflix",
        "Kitchenette",
        "Air conditioning",
        "24/7 security",
        "Parking space",
        "Gym access",
        "Work desk",
        "Laundry facilities",
      ],
    },
    "3": {
      id: "3",
      title: "Penthouse Paradise",
      location: "Lekki Phase 1, Lagos",
      price: "₦55,000",
      priceUnit: "/ per night",
      beds: 3,
      baths: 3,
      sqft: 2000,
      guests: 6,
      mainImage: "/shortlet-3.jpeg",
      description:
        "Exclusive penthouse with panoramic views, private terrace, and world-class facilities. This luxurious space offers the ultimate in comfort and style for discerning guests.",
      amenities: [
        "High-speed WiFi",
        "Smart TV with Netflix",
        "Fully equipped kitchen",
        "Air conditioning",
        "24/7 security",
        "Dedicated parking",
        "Gym access",
        "Private terrace",
        "Concierge service",
        "Laundry facilities",
        "Home theater",
      ],
    },
  };

  const property = properties[resolvedParams.id] || properties["1"];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero Image */}
        <section className="relative h-96 sm:h-96 md:h-80 lg:h-[470px]">
          <Image
            src={property.mainImage}
            alt={property.title}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </section>

        {/* Property Content */}
        <section className="w-full px-4 sm:px-8 py-8 sm:py-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="flex-1">
              {/* Title and Location */}
              <div className="mb-6 sm:mb-8">
                <h1
                  className={`text-[28px] sm:text-[36px] font-bold text-gray-900 mb-1 ${playfair.className}`}
                >
                  {property.title}
                </h1>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-[14px] sm:text-[16px] text-[#6a7181]">
                    {property.location}
                  </span>
                </div>
              </div>

              {/* Property Details Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-6 sm:mb-8">
                <div className="bg-[#F6F5F4] rounded-lg p-3 text-center shadow-sm">
                  <Bed className="h-5 w-5 text-[#C0581B] mx-auto mb-1.5" />
                  <p className="text-[13px] font-normal text-[#6a7181]">
                    {property.beds} Beds
                  </p>
                </div>

                <div className="bg-[#F6F5F4] rounded-lg p-3 text-center shadow-sm">
                  <Bath className="h-5 w-5 text-[#C0581B] mx-auto mb-1.5" />
                  <p className="text-[13px] font-normal text-[#6a7181]">
                    {property.baths} Baths
                  </p>
                </div>

                <div className="bg-[#F6F5F4] rounded-lg p-3 text-center shadow-sm">
                  <Square className="h-5 w-5 text-[#C0581B] mx-auto mb-1.5" />
                  <p className="text-[13px] font-normal text-[#6a7181]">
                    {property.sqft} sqft
                  </p>
                </div>

                <div className="bg-[#F6F5F4] rounded-lg p-3 text-center shadow-sm">
                  <Users className="h-5 w-5 text-[#C0581B] mx-auto mb-1.5" />
                  <p className="text-[13px] font-normal text-[#6a7181]">
                    {property.guests} Guests
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8 sm:mb-12">
                <h2
                  className={`${playfair.className} text-[18px] sm:text-[20px] font-bold text-gray-900 mb-4`}
                >
                  About
                </h2>
                <p className="text-[14px] sm:text-[16px] text-[#6a7181] leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Amenities */}
              <div className="mb-8 sm:mb-12">
                <h2
                  className={`${playfair.className} text-[18px] sm:text-[20px] font-bold text-gray-900 mb-4`}
                >
                  {" "}
                  Amenities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                  {property.amenities.map((amenity: any, index: any) => (
                    <div key={index} className="flex items-center">
                      <Check className="w-4 h-4 text-[#C0581B] mr-3" />
                      <span className="text-[12px] sm:text-[14px] text-[#6a7181]">
                        {amenity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Summary Card */}
            <div className="lg:w-[420px]">
              <div className="bg-[#FBFAF9] border border-[#E5E7EB] rounded-lg shadow-sm p-4 sm:p-6 lg:sticky lg:top-24">
                {/* Price */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex items-baseline gap-2">
                    <p
                      className={`${playfair.className} text-[24px] sm:text-[30px] font-bold text-gray-900`}
                    >
                      {property.price}
                    </p>
                    <p className="text-[12px] sm:text-[14px] text-[#6a7181] mr-4 sm:mr-6">
                      {property.priceUnit}
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={() => setIsReservationModalOpen(true)}
                    className="w-full text-[12px] sm:text-[14px] bg-[#C0581B] hover:bg-[#a84615] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    <CalendarDays className="h-4 w-4 mr-2" />
                    Reserve Now
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsInspectionModalOpen(true)}
                    className="w-full border text-[12px] sm:text-[14px] border-gray-300 text-gray-700 hover:bg-gray-50 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Schedule Inspection
                  </button>
                </div>

                {/* Additional Info */}
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 mb-2">
                    <span>Check-in</span>
                    <span className="font-medium">3:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600">
                    <span>Check-out</span>
                    <span className="font-medium">11:00 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <SimpleReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
        propertyTitle={property.title}
        propertyPrice={property.price}
      />

      <SimpleInspectionModal
        isOpen={isInspectionModalOpen}
        onClose={() => setIsInspectionModalOpen(false)}
        propertyTitle={property.title}
      />
    </div>
  );
};

export default PropertyDetailPage;
