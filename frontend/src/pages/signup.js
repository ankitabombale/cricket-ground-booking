import React from "react";
import { Link } from "react-router-dom";
import groundImg from "../img/cricket2.avif";

const Signup = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Image Side */}
      <div className="hidden md:flex w-1/2 bg-cover bg-center" 
           style={{
    backgroundImage: `url(${groundImg})`,
  }}>
        <div className="bg-black bg-opacity-50 w-full flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold text-center px-4">
            Book your Cricket Ground easily & quickly!
          </h1>
        </div>
      </div>

      {/* Right Form Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="max-w-md w-full p-8">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">
            Sign Up
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Create your account to continue
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <button className="border px-4 py-2 rounded-lg hover:bg-gray-50">
              Google
            </button>
            <button className="border px-4 py-2 rounded-lg hover:bg-gray-50">
              LinkedIn
            </button>
            <button className="border px-4 py-2 rounded-lg hover:bg-gray-50">
              SSO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
