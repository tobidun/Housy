import React from "react";
import { Star } from "lucide-react";
import { playfair } from "@/lib/fonts";

interface Testimonial {
  rating: number;
  quote: string;
  name: string;
  title: string;
}

const TestimonialSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      rating: 5,
      quote:
        "The perfect apartment for my business trip. Clean, modern, and exactly as advertised. Will definitely book again!",
      name: "Sarah Johnson",
      title: "Marketing Executive",
    },
    {
      rating: 5,
      quote:
        "Amazing co-living experience! Met wonderful people and the facilities are top-notch. Highly recommend for young professionals.",
      name: "Michael Chen",
      title: "Software Developer",
    },
    {
      rating: 5,
      quote:
        "Safe and comfortable student housing. Great location near campus and the study areas are perfect for late-night sessions.",
      name: "Emily Rodriguez",
      title: "Medical Student",
    },
    {
      rating: 5,
      quote:
        "Found my dream home here! The annual rental process was smooth and the property management team is incredibly responsive.",
      name: "David Thompson",
      title: "Architect",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "fill-[#C0581B] text-[#C0581B]" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-[#F6F5F4]">
      <div className="w-full px-8">
        <div className="text-center mb-16">
          <h2
            className={`${playfair.className} text-[48px] font-bold text-gray-900`}
          >
            {" "}
            What Our Guests Say
          </h2>
          <p className="text-[18px] font-normal text-[#6a7181] max-w-3xl mx-auto">
            Real stories from real residents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-[#EAE6E2] shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
              <p className="text-gray-700 text-[14px] font-normal italic mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-[14px] text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-gray-600 text-[12px]">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
