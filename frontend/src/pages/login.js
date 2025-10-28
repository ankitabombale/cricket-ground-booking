import React from "react";
import { Link } from "react-router-dom";
import groundImg from "../img/cricket1.avif";
const Login = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Image Section */}
      <div
        className="hidden md:flex w-1/2 bg-cover bg-center relative"
       style={{
    backgroundImage: `url(${groundImg})`,
  }}

      >
        <div className="bg-black bg-opacity-50 w-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-3">Welcome Back!</h1>
            <p className="text-lg">Manage your cricket ground bookings easily</p>
          </div>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="max-w-md w-full p-8">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">
            Welcome
          </h2>
          <p className="text-center text-gray-500 mb-6">Login with your email</p>

          <form className="space-y-4">
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

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

          <div className="text-center text-gray-400 text-sm mt-6">OR</div>

          <div className="flex justify-center space-x-4 mt-4">
            <button className="border px-4 py-2 rounded-lg hover:bg-gray-50">
              Google
            </button>
            <button className="border px-4 py-2 rounded-lg hover:bg-gray-50">
              Apple
            </button>
            <button className="border px-4 py-2 rounded-lg hover:bg-gray-50">
              LinkedIn
            </button>
          </div>

          <div className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
