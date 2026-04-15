import React from "react";
import Button from "./Button";
import { playfair } from "@/lib/fonts";

const HeroSection: React.FC = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center h-[85vh] sm:h-[90vh] md:h-[95vh] lg:h-[100vh] flex items-center"
        style={{ backgroundImage: "url('/hero-bg.jpeg')" }}
      >
        <div className="absolute inset-0 bg-slate-800/65 backdrop-saturate-75"></div>
        <div className="relative z-10 container mx-4 px-4 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-['Playfair_Display'] mb-4 max-w-2xl">
            Live <span className="text-[#C0581B]">Beautifully</span>, Anywhere.
          </h1>
          <p className="text-base sm:text-lg mb-8 max-w-xl text-white/80">
            Premium apartments for every chapter of your life - from a single
            night to a lifelong home.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <Button
              variant="primary"
              className="text-xs sm:text-sm px-4 sm:px-6"
              showArrow
            >
              Browse Properties
            </Button>
            <Button
              variant="primary"
              className="bg-white !text-[#C0581B] text-xs sm:text-sm px-3 sm:px-4"
            >
              Create Account
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#C0581B]">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p
                className={`${playfair.className} font-bold text-[36px] text-white mb-1 leading-[40px]`}
              >
                2,400+
              </p>
              <p className="text-[#ffffffb3] font-[12px] leading-[20px]">
                Happy Guests
              </p>
            </div>
            <div className="text-center">
              <p
                className={`${playfair.className} font-bold text-[36px] text-white mb-1 leading-[40px]`}
              >
                180+
              </p>
              <p className="text-[#ffffffb3] font-[12px] leading-[20px]">
                Apartment Managed
              </p>
            </div>
            <div className="text-center">
              <p
                className={`${playfair.className} font-bold text-[36px] text-white mb-1 leading-[40px]`}
              >
                5
              </p>
              <p className="text-[#ffffffb3] font-[12px] leading-[20px]">
                Cities
              </p>
            </div>
            <div className="text-center">
              <p
                className={`${playfair.className} font-bold text-[36px] text-white mb-1 leading-[40px]`}
              >
                1,800+
              </p>
              <p className="text-[#ffffffb3] font-[12px] leading-[20px]">
                5-Star Reviews
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
