"use client";

import { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";

const AdminSignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    router.push("/admin/auth/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-4">
      <div className="relative bg-[#111827] text-white w-full max-w-sm rounded-xl overflow-hidden shadow-lg shadow-primary">
        <div className="p-8">
          {/* Logo */}
          <div className="text-center mb-6">
            <div className="text-3xl font-bold text-white flex justify-center items-center space-x-2">
              <Image
                src="/images/logo.png"
                alt="Alphee Logo"
                width={100}
                height={60}
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold mt-2">SIGN UP</h2>
            <p className="text-sm text-gray-400">Create your admin account</p>
          </div>

          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="flex items-center bg-gray-800 px-3 py-2 rounded-md">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="bg-transparent focus:outline-none text-white w-full"
                required
              />
            </div>

            <div className="flex items-center bg-gray-800 px-3 py-2 rounded-md">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent focus:outline-none text-white w-full"
                required
              />
            </div>

            <div className="flex items-center bg-gray-800 px-3 py-2 rounded-md">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="bg-transparent focus:outline-none text-white w-full"
                required
              />
            </div>

            <div className="flex items-center bg-gray-800 px-3 py-2 rounded-md">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="bg-transparent focus:outline-none text-white w-full"
                required
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center -mt-2">{error}</p>
            )}

            <button
              type="submit"
              className="cursor-pointer w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded-md transition"
            >
              Request to Create Account
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-6">
            Already have an account?{" "}
            <button
              onClick={() => router.push("/admin/auth/login")}
              className="cursor-pointer text-blue-400 hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminSignUp;
