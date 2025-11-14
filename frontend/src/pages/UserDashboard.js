import React, { useState } from "react";
import Navbar from "./Navbar";
import sunshineImage from '../img/ground2.jpg';

const UserDashboard = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [slots, setSlots] = useState([
    { time: "7:00 AM - 9:00 AM", booked: false, date: "2025-10-28" },
    { time: "9:00 AM - 11:00 AM", booked: true, date: "2025-10-28" },
    { time: "11:00 AM - 1:00 PM", booked: false, date: "2025-10-29" },
    { time: "4:00 PM - 6:00 PM", booked: false, date: "2025-10-29" },
  ]);

  const ground = {
    name: "Sunshine Cricket Ground",
    location: "Pune, India",
    price: "₹1200/hour",
    description:
      "Sunshine Cricket Ground offers a lush green outfield, well-maintained turf pitch, and modern facilities perfect for friendly and professional matches.Comfortable seating areas for spectators and dedicated dugouts for teams.High-quality practice nets and equipment to help players hone their skills.Ample parking, well-maintained washrooms, and an in-house cafeteria offering refreshments.A welcoming atmosphere suitable for players of all ages and abilities, perfect for both competitive and friendly matches.",

    amenities: ["Parking", "Restrooms", "Drinking Water", "Scoreboard"],
    facilities: ["Changing Rooms", "Flood Lights", "Seating Area"],
  };

  const handleBooking = (index) => {
    const updatedSlots = [...slots];
    updatedSlots[index].booked = !updatedSlots[index].booked;
    setSlots(updatedSlots);
  };

  const filteredSlots = selectedDate
    ? slots.filter((slot) => slot.date === selectedDate)
    : slots;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
       <img
  src={sunshineImage}
  alt="Sunshine Cricket Ground"
  className="ground-image"
/>

        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{ground.name}</h1>
          <p className="text-lg">{ground.location}</p>
          <p className="text-xl font-semibold mt-3">{ground.price}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6">
        {/* Description */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-blue-700">
            About the Ground
          </h2>
          <p className="text-gray-700">{ground.description}</p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-3 text-blue-700">🏏 Amenities</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {ground.amenities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-3 text-blue-700">⚙️ Facilities</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {ground.facilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Slot Section */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">
            📅 Available Time Slots
          </h2>

          {/* Filter by Date */}
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <label className="text-gray-700 font-medium">Filter by Date:</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            {selectedDate && (
              <button
                onClick={() => setSelectedDate("")}
                className="text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-lg"
              >
                Clear
              </button>
            )}
          </div>

          {/* Slots List */}
          <ul className="space-y-3">
            {filteredSlots.length > 0 ? (
              filteredSlots.map((slot, index) => (
                <li
                  key={index}
                  className={`flex justify-between items-center border p-3 rounded-lg ${
                    slot.booked
                      ? "bg-red-100 border-red-300"
                      : "bg-green-50 border-green-300"
                  }`}
                >
                  <span className="font-medium text-gray-700">{slot.time}</span>
                  <button
                    onClick={() => handleBooking(index)}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      slot.booked
                        ? "bg-red-600 hover:bg-red-700 text-white"
                        : "bg-green-600 hover:bg-green-700 text-white"
                    }`}
                  >
                    {slot.booked ? "Cancel Booking" : "Book Slot"}
                  </button>
                </li>
              ))
            ) : (
              <p className="text-gray-600 text-center">
                No slots available for this date.
              </p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
