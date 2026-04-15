"use client";

import React, { useState } from "react";
import DatePicker from "./DatePicker";
import { X } from "lucide-react";
import { playfair } from "@/lib/fonts";

interface SimpleReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyTitle: string;
  propertyPrice: string;
}

const SimpleReservationModal: React.FC<SimpleReservationModalProps> = ({
  isOpen,
  onClose,
  propertyTitle,
  propertyPrice,
}) => {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [guests, setGuests] = useState("");

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
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 sm:p-6"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-lg max-w-md sm:max-w-xl w-full p-4 sm:p-6 mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2
              className={`text-xl font-semibold text-gray-900 ${playfair.className}`}
            >
              Reserve — {propertyTitle}
            </h2>
            <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {/* Dates */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[14px] font-medium text-gray-700 mb-1">
                  Check-in
                </label>
                <DatePicker
                  selectedDate={checkInDate}
                  onDateChange={setCheckInDate}
                  placeholder="Select date"
                  className="text-sm"
                />
              </div>
              <div>
                <label className="block text-[14px] font-medium text-gray-700 mb-1">
                  Check-out
                </label>
                <DatePicker
                  selectedDate={checkOutDate}
                  onDateChange={setCheckOutDate}
                  placeholder="Select date"
                  className="text-sm"
                />
              </div>
            </div>

            {/* Guests */}
            <div>
              <label className="block text-[14px] font-medium text-gray-700 mb-1">
                Number of guests
              </label>
              <input
                type="number"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C0581B]"
                placeholder="Enter number of guests"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 px-4 py-3 bg-[#C0581B] text-white rounded-lg hover:bg-[#a84615]"
              >
                Reserve now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SimpleReservationModal;
