import React from "react";
import {
  Home,
  Users,
  GraduationCap,
  Calendar,
  Star,
  ArrowRight,
} from "lucide-react";
import { playfair } from "@/lib/fonts";

interface CategoryCard {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
}

const CategorySection: React.FC = () => {
  const categories: CategoryCard[] = [
    {
      icon: <Star className="h-5 w-5 text-[#8B4513]" />,
      title: "Short-Let Apartments",
      subtitle: "Luxury stays from 1 night to 6 months",
      description:
        "Fully furnished premium apartments for business travellers, tourists, and professionals seeking flexible stays.",
    },
    {
      icon: <Users className="h-5 w-5 text-[#C0581B]" />,
      title: "Co-Living Spaces",
      subtitle: "Community Living",
      description:
        "Modern shared living spaces with private rooms and communal areas for like-minded individuals.",
    },
    {
      icon: <GraduationCap className="h-5 w-5 text-[#C0581B]" />,
      title: "Student Accommodation",
      subtitle: "Study & Live",
      description:
        "Safe, affordable housing near universities with study-friendly environments and amenities.",
    },
    {
      icon: <Calendar className="h-5 w-5 text-[#C0581B]" />,
      title: "Annual Rentals",
      subtitle: "Long-term Homes",
      description:
        "Established residential properties for those seeking stability and a place to call home.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-full px-8">
        <div className="text-center mb-16">
          <h2
            className={`${playfair.className} text-[48px] font-bold text-gray-900`}
          >
            Find Your Perfect Stay
          </h2>
          <p className="text-[18px] font-normal text-[#6a7181] max-w-3xl mx-auto">
            Choose a category that matches your lifestyle and let us do the
            rest.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-[#FBFAF9] rounded-lg p-8 py-12 border border-[#EAE6E2] shadow-sm hover:border-[#C0581B] hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <div className="mb-4">{category.icon}</div>
              <h3
                className={`${playfair.className} text-[20px] font-normal mb-1`}
              >
                {category.title}
              </h3>
              <p className="text-[#C0581B] font-normal mb-4 text-[14px]">
                {category.subtitle}
              </p>
              <p className="text-[#6a7181] font-normal text-[14px] leading-relaxed">
                {category.description}
              </p>
              <a
                href={
                  category.title === "Short-Let Apartments"
                    ? "/short-let"
                    : category.title === "Co-Living Spaces"
                      ? "/co-living"
                      : category.title === "Student Accommodation"
                        ? "/student"
                        : category.title === "Annual Rentals"
                          ? "/annual-rentals"
                          : "#"
                }
                className="flex items-center text-[#C0581B] font-normal text-[14px] hover:gap-2 transition-all duration-200 opacity-0 group-hover:opacity-100 mt-4"
              >
                Browse
                <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
