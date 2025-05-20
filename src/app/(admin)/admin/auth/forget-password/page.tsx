"use client";

import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { useRouter } from "next/navigation";

const AdminForgotPassword = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy logic, replace with real password reset email send logic
    if (email) {
      alert(`Password reset link sent to ${email}`);
      router.push("/admin/auth/reset-password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="relative bg-[#111827] text-white w-full max-w-sm rounded-xl overflow-hidden shadow-lg shadow-primary">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Forgot Password?</h2>
          <p className="text-gray-400 text-center mb-8">
            Enter your email address below and we&apos;ll send you a link to reset your password.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center bg-gray-800 px-3 py-2 rounded-md">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent focus:outline-none text-white w-full"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-yellow-500 text-black font-bold py-2 rounded-md transition cursor-pointer"
            >
              Send Reset Link
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-6">
            Remember your password?{" "}
            <button
              onClick={() => router.push("/admin/auth/login")}
              className="cursor-pointer text-white hover:underline"
            >
              Back to login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminForgotPassword;
