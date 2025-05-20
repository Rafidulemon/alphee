"use client";

import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy logic
    if (username === "admin" && password === "admin123") {
      router.push("/admin/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 bg-gradient-to-br from-gray-900 to-gray-800 px-4">
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
            <h2 className="text-xl font-bold mt-2">ADMIN PANEL</h2>
            <p className="text-sm text-gray-400">Control panel login</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="flex items-center bg-gray-800 px-3 py-2 rounded-md">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-transparent focus:outline-none text-white w-full"
                required
              />
            </div>

            <div className="flex items-center bg-gray-800 px-3 py-2 rounded-md">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent focus:outline-none text-white w-full"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-300">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                  className="form-checkbox text-primary"
                />
                <span>Remember me</span>
              </label>
              <button type="button" onClick={() => router.push("/admin/auth/forget-password")} className="cursor-pointer hover:underline text-blue-400">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="cursor-pointer w-full bg-primary hover:bg-yellow-500 text-black font-bold py-2 rounded-md transition"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-6">
            Don&apos;t have an account?{" "}
            <button onClick={() => router.push("/admin/auth/signup")} className="cursor-pointer text-white hover:underline">Sign up</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
