import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#20242C] text-white py-16">
      <div className="w-full  px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="text-2xl font-bold">
                <span className="text-white">Hous</span>
                <span className="text-[#C0581B]">y</span>
              </span>
            </div>
            <p className="text-[#fff9] text-sm leading-relaxed">
              Premium apartment living, tailored to your lifestyle. From one
              night to a lifetime.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-[14px] mb-4">CATEGORIES</h3>
            <ul className="space-y-0.5">
              <li>
                <a
                  href="#"
                  className="text-[14px] text-[#fff9] hover:text-[#C0581B] transition-colors"
                >
                  Short-Let
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[14px] text-[#fff9] hover:text-[#C0581B] transition-colors"
                >
                  Co-Living
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[14px] text-[#fff9] hover:text-[#C0581B] transition-colors"
                >
                  Student
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[14px] text-[#fff9] hover:text-[#C0581B] transition-colors"
                >
                  Annual Rentals
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-[14px] mb-4">COMPANY</h3>
            <ul className="space-y-0.5">
              <li>
                <a
                  href="#"
                  className="text-[14px] text-[#fff9] hover:text-[#C0581B] transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[14px] text-[#fff9] hover:text-[#C0581B] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[14px] text-[#fff9] hover:text-[#C0581B] transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="font-semibold text-[14px] mb-4">GET IN TOUCH</h3>
            <div className="space-y-0.5">
              <p className="text-[#fff9] text-[14px]">
                <a
                  href="mailto:hello@havenresidences.com"
                  className="hover:text-[#C0581B] transition-colors"
                >
                  hello@havenresidences.com
                </a>
              </p>
              <p className="text-[#fff9] text-[14px]">
                <a
                  href="tel:+2348012345678"
                  className="hover:text-[#C0581B] transition-colors"
                >
                  +234 801 234 5678
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Housy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
