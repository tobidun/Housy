import React from "react";
import { Header } from "@/components/Header";
import PropertyCard from "@/components/PropertyCard";
import Footer from "@/components/Footer";
import { playfair } from "@/lib/fonts";

const StudentPage: React.FC = () => {
  const properties = [
    {
      id: 1,
      image: "/student-1.jpeg",
      price: "N45,000 / per month",
      title: "Student Studio Apartment",
      location: "University of Lagos, Lagos",
    },
    {
      id: 2,
      image: "/student-2.jpeg",
      price: "N35,000 / per month",
      title: "Shared Student Dorm",
      location: "Yaba College of Technology, Lagos",
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
                STUDY & LIVE COMFORTABLY
              </p>
              <h1
                className={`${playfair.className} text-[48px] font-bold text-gray-900 mb-2`}
              >
                Student Accommodation
              </h1>
              <p className="text-[#6a7181] text-[18px] max-w-2xl">
                Safe, affordable housing near universities with study-friendly
                environments and amenities designed for student success.
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
                  category="student"
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

export default StudentPage;
