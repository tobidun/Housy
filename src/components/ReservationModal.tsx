"use client";

import React, { useState } from "react";
import DatePicker from "./DatePicker";
import { X, Users, Calendar, Clock } from "lucide-react";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyTitle: string;
  propertyPrice: string;
}

const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  propertyTitle,
  propertyPrice,
}) => {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [guests, setGuests] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  if (!isOpen) return null;

  const calculateNights = () => {
    if (checkInDate && checkOutDate) {
      const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
    return 0;
  };

  const calculateTotal = () => {
    const nights = calculateNights();
    const pricePerNight = parseInt(propertyPrice.replace(/[^0-9]/g, ""));
    return nights * pricePerNight;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reservation submission
    console.log("Reservation submitted:", {
      property: propertyTitle,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      guests,
      name,
      email,
      phone,
      total: calculateTotal(),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="relative bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                Reserve Property
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-6">
            {/* Property Info */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-1">
                {propertyTitle}
              </h3>
              <p className="text-gray-600">{propertyPrice} per night</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Date Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Check-in Date
                  </label>
                  <DatePicker
                    selectedDate={checkInDate}
                    onDateChange={setCheckInDate}
                    placeholder="Select check-in date"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Check-out Date
                  </label>
                  <DatePicker
                    selectedDate={checkOutDate}
                    onDateChange={setCheckOutDate}
                    placeholder="Select check-out date"
                  />
                </div>
              </div>

              {/* Guest Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Guests
                </label>
                <div className="flex items-center space-x-4">
                  <button
                    type="button"
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    -
                  </button>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-gray-500" />
                    <span className="text-lg font-medium text-gray-900 w-8 text-center">
                      {guests}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setGuests(guests + 1)}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Personal Information
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C0581B] focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C0581B] focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C0581B] focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Price Summary */}
              {checkInDate && checkOutDate && (
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Price Summary
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-gray-600">
                      <span>
                        {propertyPrice} x {calculateNights()} nights
                      </span>
                      <span>¥{calculateTotal().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Service fee</span>
                      <span>¥{(calculateTotal() * 0.1).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg text-gray-900 pt-2 border-t">
                      <span>Total</span>
                      <span>¥{(calculateTotal() * 1.1).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-[#C0581B] text-white rounded-lg hover:bg-[#a84615] transition-colors font-semibold"
                >
                  Complete Reservation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
