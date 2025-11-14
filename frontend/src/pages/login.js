import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import groundImg from "../img/cricket1.avif";
const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      navigate("/dashboard"); // or wherever you want after login
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex">
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

      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="max-w-md w-full p-8">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">
            Welcome
          </h2>
          <p className="text-center text-gray-500 mb-6">Login with your email</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
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
            {/* <button className="border px-4 py-2 rounded-lg hover:bg-gray-50">
              Apple
            </button>
            <button className="border px-4 py-2 rounded-lg hover:bg-gray-50">
              LinkedIn
            </button> */}
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

// import { GoogleLogin } from "@react-oauth/google";
// import jwtDecode from "jwt-decode";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import groundImg from "../img/cricket1.avif";

// const Login = () => {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/login", form);
//       localStorage.setItem("token", res.data.token);
//       alert("Login successful!");
//       navigate("/dashboard");
//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   const handleGoogleLogin = async (credentialResponse) => {
//     try {
//       const res = await axios.post("http://localhost:5000/auth/google", {
//         credential: credentialResponse.credential,
//       });

//       localStorage.setItem("token", res.data.token);
//       alert(`Welcome ${res.data.user.name}!`);
//       navigate("/dashboard");
//     } catch (err) {
//       alert("Google Login failed. Try again.");
//       console.error(err);
//     }
//   };

//   return (
//     <div className="min-h-screen flex">
//       <div
//         className="hidden md:flex w-1/2 bg-cover bg-center relative"
//         style={{
//           backgroundImage: `url(${groundImg})`,
//         }}
//       >
//         <div className="bg-black bg-opacity-50 w-full flex items-center justify-center">
//           <div className="text-center text-white">
//             <h1 className="text-4xl font-bold mb-3">Welcome Back!</h1>
//             <p className="text-lg">Manage your cricket ground bookings easily</p>
//           </div>
//         </div>
//       </div>

//       <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
//         <div className="max-w-md w-full p-8">
//           <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">
//             Welcome
//           </h2>
//           <p className="text-center text-gray-500 mb-6">Login with your email</p>

//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//               className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />

//             <div className="flex justify-between items-center text-sm">
//               <label className="flex items-center">
//                 <input type="checkbox" className="mr-2" /> Remember me
//               </label>
//               <a href="#" className="text-blue-600 hover:underline">
//                 Forgot password?
//               </a>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
//             >
//               Login
//             </button>
//           </form>

//           <div className="text-center text-gray-400 text-sm mt-6">OR</div>

//           {/* <div className="flex justify-center mt-4">
//             <GoogleLogin
//               onSuccess={handleGoogleLogin}
//               onError={() => alert("Google Sign-In Failed")}
//             />
//           </div> */}

//           <div className="text-center text-sm text-gray-600 mt-6">
//             Don’t have an account?{" "}
//             <Link to="/signup" className="text-blue-600 hover:underline">
//               Register Now
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
