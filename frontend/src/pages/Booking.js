import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../pages/Booking";

const Booking = () => {
  const navigate = useNavigate();

  // Form states
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [slots, setSlots] = useState([
    "6:00 AM - 8:00 AM",
    "8:00 AM - 10:00 AM",
    "10:00 AM - 12:00 PM",
    "12:00 PM - 2:00 PM",
    "2:00 PM - 4:00 PM",
    "4:00 PM - 6:00 PM",
    "6:00 PM - 8:00 PM",
  ]);

  const handleBooking = (e) => {
    e.preventDefault();

    if (!selectedDate || !selectedSlot) {
      alert("Please select date and time slot.");
      return;
    }

    // Here you’ll later call backend API (POST /book)
    // For now navigate to confirmation page
    navigate("/payment", {
      state: { date: selectedDate, slot: selectedSlot },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-4xl mx-auto bg-white mt-10 p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          Book Cricket Ground
        </h2>

        <form onSubmit={handleBooking} className="space-y-6">
          {/* Select Date */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Select Date:
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Select Slot */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Select Time Slot:
            </label>
            <select
              value={selectedSlot}
              onChange={(e) => setSelectedSlot(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Select Slot --</option>
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>

          {/* Summary */}
          {selectedDate && selectedSlot && (
            <div className="bg-blue-50 p-4 rounded-lg text-gray-800">
              <p>
                <strong>Date:</strong> {selectedDate}
              </p>
              <p>
                <strong>Time Slot:</strong> {selectedSlot}
              </p>
              <p>
                <strong>Price:</strong> ₹1200/hour
              </p>
            </div>
          )}

          {/* Confirm Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
