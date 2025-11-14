import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import groundImg from "../img/cricket2.avif";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";


const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ✅ Backend API call to Express server

      const res = await axios.post("http://localhost:5000/signup", form, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.status === 200) {
        alert("Signup successful!");
        navigate("/login");
      }
    } catch (err) {
      // ✅ Proper error message handling
      alert(err.response?.data?.message || "Signup failed. Try again.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex">
      <div
        className="hidden md:flex w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url(${groundImg})`,
        }}
      >
        <div className="bg-black bg-opacity-50 w-full flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold text-center px-4">
            Book your Cricket Ground easily & quickly!
          </h1>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="max-w-md w-full p-8">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">
            Sign Up
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Create your account to continue
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-600">Remember me</span>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>

          <div className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Sign In
            </Link>
          </div>

          <div className="mt-6 text-center text-gray-400 text-sm">OR</div>

          <div className="flex justify-center space-x-4 mt-4">
            <GoogleLogin
  onSuccess={async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      // console.log("Google user:", decoded);
     console.log("Decoded Google JWT:", decoded);
      // Send user data to backend
      const res = await axios.post("http://localhost:5000/google-auth", {
        name: decoded.name,
        email: decoded.email,
      });

      if (res.status === 200) {
        alert("Google Sign-in successful!");
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Google login error:", err);
      alert("Google Sign-in failed!");
    }
  }}
  onError={() => {
    alert("Google Login Failed!");
  }}
/>

            {/* <button className="border px-4 py-2 rounded-lg hover:bg-gray-50">
              LinkedIn
            </button>
            <button className="border px-4 py-2 rounded-lg hover:bg-gray-50">
              SSO
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
