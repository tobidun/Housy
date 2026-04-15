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

const AnnualRentalsDetailPage: React.FC<PropertyDetailPageProps> = ({
  params,
}) => {
  const resolvedParams = use(params);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [isInspectionModalOpen, setIsInspectionModalOpen] = useState(false);

  // Property data based on ID
  const properties: Record<string, any> = {
    "1": {
      id: "1",
      title: "The Residence - 3 Bed",
      location: "Lekki Phase 1, Lagos",
      price: "₦4,500,000",
      priceUnit: "/ per annum",
      beds: 3,
      baths: 3,
      sqft: 1800,
      guests: 6,
      mainImage: "/annual-rent-1.jpeg",
      description:
        "Premium 3-bedroom residence in the heart of Lekki Phase 1. This spacious apartment offers luxury living with modern amenities and excellent security for families seeking long-term comfort.",
      amenities: [
        "High-speed WiFi",
        "Smart TV with Netflix",
        "Fully equipped kitchen",
        "Air conditioning",
        "24/7 security",
        "Dedicated parking",
        "Gym access",
        "Swimming pool",
        "Children's play area",
        "Laundry facilities",
        "Generator backup",
        "Storage space",
      ],
    },
    "2": {
      id: "2",
      title: "Executive 2-Bed Flat",
      location: "Ikoyi, Lagos",
      price: "₦6,000,000",
      priceUnit: "/ per annum",
      beds: 2,
      baths: 2,
      sqft: 1500,
      guests: 4,
      mainImage: "/annual-rent-2.jpeg",
      description:
        "Executive 2-bedroom apartment in prestigious Ikoyi location. Perfect for professionals and families seeking upscale living with premium finishes and world-class amenities.",
      amenities: [
        "High-speed WiFi",
        "Smart TV with Netflix",
        "Modern kitchen",
        "Air conditioning",
        "24/7 security",
        "Underground parking",
        "Gym access",
        "Rooftop terrace",
        "Concierge service",
        "Laundry facilities",
        "Power backup",
        "Guest parking",
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
        <section className="w-full  px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Content */}
            <div className="flex-1">
              {/* Title and Location */}
              <div className="mb-8">
                <h1
                  className={`text-[36px] font-bold text-gray-900 mb-1 ${playfair.className}`}
                >
                  {property.title}
                </h1>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-[16px] text-[#6a7181]">
                    {property.location}
                  </span>
                </div>
              </div>

              {/* Property Details Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
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
              <div className="mb-12">
                <h2
                  className={`${playfair.className} text-[20px] font-bold text-gray-900 mb-4`}
                >
                  About
                </h2>
                <p className="text-[16px] text-[#6a7181] leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Amenities */}
              <div className="mb-12">
                <h2
                  className={`${playfair.className} text-[20px] font-bold text-gray-900 mb-4`}
                >
                  {" "}
                  Amenities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.amenities.map((amenity: any, index: any) => (
                    <div key={index} className="flex items-center">
                      <Check className="w-4 h-4 text-[#C0581B] mr-3" />
                      <span className="text-[14px] text-[#6a7181]">
                        {amenity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Summary Card */}
            <div className="lg:w-[420px]">
              <div className="bg-[#FBFAF9] border border-[#E5E7EB] rounded-lg shadow-sm p-6 lg:sticky lg:top-24">
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <p
                      className={`${playfair.className} text-[30px] font-bold text-gray-900`}
                    >
                      {property.price}
                    </p>
                    <p className="text-[14px] text-[#6a7181] mr-6">
                      {property.priceUnit}
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={() => setIsReservationModalOpen(true)}
                    className="w-full text-[14px] bg-[#C0581B] hover:bg-[#a84615] text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    <CalendarDays className="h-4 w-4 mr-2" />
                    Apply for Lease
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsInspectionModalOpen(true)}
                    className="w-full border text-[14px] border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Schedule Viewing
                  </button>
                </div>

                {/* Additional Info */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>Lease Term</span>
                    <span className="font-medium">12 months</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Available</span>
                    <span className="font-medium">Immediate</span>
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

export default AnnualRentalsDetailPage;
