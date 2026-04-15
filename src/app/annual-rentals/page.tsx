import React from "react";
import { Header } from "@/components/Header";
import PropertyCard from "@/components/PropertyCard";
import Footer from "@/components/Footer";
import { playfair } from "@/lib/fonts";

const AnnualRentalsPage: React.FC = () => {
  const properties = [
    {
      id: 1,
      image: "/annual-rent-1.jpeg",
      price: "N4,500,000 / per annum",
      title: "The Residence - 3 Bed",
      location: "Lekki Phase 1, Lagos",
    },
    {
      id: 2,
      image: "/annual-rent-2.jpeg",
      price: "N6,000,000 / per annum",
      title: "Executive 2-Bed Flat",
      location: "Ikoyi, Lagos",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-12">
        {/* Page Header */}
        <section className="bg-white py-16">
          <div className="w-full px-8">
            <div className="text-left">
              <p className="text-[14px] font-semibold text-[#C0581B] tracking-wider">
                LONG-TERM RESIDENTIAL LEASES
              </p>
              <h1
                className={`${playfair.className} text-[48px] font-bold text-gray-900 mb-2`}
              >
                Annual Rentals
              </h1>
              <p className="text-[#6a7181] text-[18px] max-w-2xl">
                Established residential properties for those seeking stability
                and a place to call home.
              </p>
            </div>
          </div>
        </section>

        {/* Properties Grid */}
        <section className="-mt-4 pb-16">
          <div className="w-full px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property) => (
                <PropertyCard
                  key={property.id}
                  id={property.id.toString()}
                  image={property.image}
                  price={property.price}
                  title={property.title}
                  location={property.location}
                  category="annual-rentals"
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

export default AnnualRentalsPage;
