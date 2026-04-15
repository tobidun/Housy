import React from "react";
import { ArrowRight } from "lucide-react";
import { playfair } from "@/lib/fonts";

const CallToActionSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2
            className={`${playfair.className} text-[36px] font-normal text-gray-900 mb-4`}
          >
            Ready to Find Your Haven?
          </h2>
          <p className="text-[18px] text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether it's a night, a semester, or a lifetime - we have the
            <br />
            perfect space for you.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-[#C0581B] hover:bg-[#a84615] text-white !px-10 !py-3 rounded-lg font-semibold text-[14px] transition-colors flex items-center">
              Browse Properties
            </button>
            <button className="border border-gray-200 text-gray-700 hover:bg-gray-50 px-8 !py-3 rounded-lg font-semibold text-[14px] transition-colors">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
