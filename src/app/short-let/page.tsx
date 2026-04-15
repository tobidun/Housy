import React from "react";
import { Header } from "@/components/Header";
import PropertyCard from "@/components/PropertyCard";
import Footer from "@/components/Footer";
import { playfair } from "@/lib/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Short-Let Apartments - Housy",
  description:
    "Find premium short-let apartments for temporary stays. Luxury furnished apartments in prime locations with flexible booking options.",
};

const ShortLetPage: React.FC = () => {
  const properties = [
    {
      id: 1,
      image: "/shortlet-1.jpeg",
      price: "N85,000 / per night",
      title: "Luxury Downtown Apartment",
      location: "Victoria Island, Lagos",
    },
    {
      id: 2,
      image: "/shortlet-2.jpeg",
      price: "N150,000 / per night",
      title: "Cozy Studio Suite",
      location: "Ikoyi, Lagos",
    },
    {
      id: 3,
      image: "/shortlet-3.jpeg",
      price: "N55,000 / per night",
      title: "Penthouse Paradise",
      location: "Lekki Phase 1, Lagos",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-12">
        {/* Page Header */}
        <section className="bg-white py-12 sm:py-16">
          <div className="w-full px-4 sm:px-8">
            <div className="text-left">
              <p className="text-[12px] sm:text-[14px] font-semibold text-[#C0581B] tracking-wider">
                LUXURY STAYS FROM 1 NIGHT TO 6 MONTHS
              </p>
              <h1
                className={`${playfair.className} text-[36px] sm:text-[48px] font-bold text-gray-900 mb-2`}
              >
                Short-Let Apartments
              </h1>
              <p className="text-[#6a7181] text-[16px] sm:text-[18px] max-w-2xl">
                Fully furnished premium apartments for business travellers,
                tourists, and professionals seeking flexible stays.
              </p>
            </div>
          </div>
        </section>

        {/* Properties Grid */}
        <section className="-mt-4 pb-12 sm:pb-16">
          <div className="w-full px-4 sm:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {properties.map((property) => (
                <PropertyCard
                  key={property.id}
                  id={property.id.toString()}
                  image={property.image}
                  price={property.price}
                  title={property.title}
                  location={property.location}
                  category="short-let"
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ShortLetPage;
