"use client";

import React, { useState } from "react";
import DatePicker from "./DatePicker";
import { X } from "lucide-react";
import { playfair } from "@/lib/fonts";

interface SimpleInspectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyTitle: string;
}

const SimpleInspectionModal: React.FC<SimpleInspectionModalProps> = ({
  isOpen,
  onClose,
  propertyTitle,
}) => {
  const [inspectionDate, setInspectionDate] = useState<Date | null>(null);
  const [preferredTime, setPreferredTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  return (
    <>
      {/* Disable body scroll when modal is open */}
      <style jsx global>{`
        body {
          overflow: hidden;
        }
      `}</style>

      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-lg max-w-lg w-full p-6"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2
              className={`text-[20px] font-semibold text-gray-900 ${playfair.className}`}
            >
              Schedule Inspection - {propertyTitle}
            </h2>
            <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-[14px] font-medium text-gray-700 mb-1">
                Full name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-[#C0581B] focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[14px] font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-[#C0581B] focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone number */}
            <div>
              <label className="block text-[14px] font-medium text-gray-700 mb-1">
                Phone number
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-[#C0581B] focus:border-transparent"
                placeholder="Enter your phone"
              />
            </div>

            {/* Preferred Date and Time on same line */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[14px] font-medium text-gray-700 mb-1">
                  Preferred date
                </label>
                <DatePicker
                  selectedDate={inspectionDate}
                  onDateChange={setInspectionDate}
                  placeholder="Select date"
                  className="text-sm"
                />
              </div>
              <div>
                <label className="block text-[14px] font-medium text-gray-700 mb-1">
                  Preferred time
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-[#C0581B] focus:border-transparent"
                >
                  <option value="">Select time</option>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-[14px] font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-[#C0581B] focus:border-transparent resize-none"
                placeholder="Enter your message"
              />
            </div>

            {/* Submit Button */}
            <div className="">
              <button
                type="submit"
                className="w-full px-4 py-3 bg-[#C0581B] text-white rounded-lg hover:bg-[#a84615]"
              >
                Request Inspection
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SimpleInspectionModal;
