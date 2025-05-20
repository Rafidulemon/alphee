"use client";
import React from "react";
import Header from "../components/navigations/Header";
import Footer from "../components/navigations/Footer";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useCartStore } from "./store/cartStore";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cartCount = useCartStore((state) => state.getTotalItems());
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        <div className="bg-black min-h-screen">{children}</div>
        <Footer />
        <Link
          href="/cart"
          className="fixed right-1 md:right-2 top-1/2 transform -translate-y-1/2 z-50 bg-primary text-black p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaShoppingCart className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
        <a
          href="https://m.me/61572945527439"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-2 md:right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
          aria-label="Chat on Messenger"
        >
          {/* Messenger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M16 0C7.163 0 0 6.716 0 15c0 4.337 1.946 8.21 5.063 10.914V32l4.64-2.54c1.987.548 4.098.832 6.297.832 8.837 0 16-6.716 16-15S24.837 0 16 0zm1.168 20.662l-4.543-4.846-7.525 4.846 8.978-9.579 4.59 4.822 7.408-4.822-8.908 9.579z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
