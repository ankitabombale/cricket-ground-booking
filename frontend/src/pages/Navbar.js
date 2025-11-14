import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear token or session storage (if implemented)
    localStorage.removeItem("userToken");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / App Name */}
        <Link to="/dashboard" className="text-2xl font-bold text-blue-700">
          🏏 MyCricketGround
        </Link>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/dashboard" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/booking" className="hover:text-blue-600">
            Book Ground
          </Link>
          <Link to="/profile" className="hover:text-blue-600">
            Profile
          </Link>
          <Link to="/mybookings" className="hover:text-blue-600">
            My Bookings
          </Link>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
