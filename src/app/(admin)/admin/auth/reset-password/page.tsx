"use client";

import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { useRouter } from "next/navigation";

const AdminResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Password has been reset successfully!");
    router.push("/admin/auth/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="relative bg-[#111827] text-white w-full max-w-sm rounded-xl overflow-hidden shadow-lg shadow-primary">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
          <p className="text-gray-400 text-center mb-8">
            Enter your new password below.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center bg-gray-800 px-3 py-2 rounded-md">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent focus:outline-none text-white w-full"
                required
              />
            </div>

            <div className="flex items-center bg-gray-800 px-3 py-2 rounded-md">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-transparent focus:outline-none text-white w-full"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-yellow-500 text-black font-bold py-2 rounded-md transition cursor-pointer"
            >
              Reset Password
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-6">
            Go back to{" "}
            <button
              onClick={() => router.push("/admin/auth/login")}
              className="cursor-pointer text-white hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminResetPassword;
