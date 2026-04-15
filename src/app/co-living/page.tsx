import React from "react";
import { Header } from "@/components/Header";
import PropertyCard from "@/components/PropertyCard";
import Footer from "@/components/Footer";
import { playfair } from "@/lib/fonts";

const CoLivingPage: React.FC = () => {
  const properties = [
    {
      id: 1,
      image: "/coliving-1.jpeg",
      price: "N120,000 / per month",
      title: "Modern Co-Living Space",
      location: "Victoria Island, Lagos",
    },
    {
      id: 2,
      image: "/coliving-2.jpeg",
      price: "N95,000 / per month",
      title: "Community Living Hub",
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
                COMMUNITY LIVING AT ITS BEST
              </p>
              <h1
                className={`${playfair.className} text-[48px] font-bold text-gray-900 mb-2`}
              >
                Co-Living Spaces
              </h1>
              <p className="text-[#6a7181] text-[18px] max-w-2xl">
                Modern shared living spaces with private rooms and communal
                areas for like-minded individuals seeking community and
                convenience.
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
                  category="co-living"
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

export default CoLivingPage;
