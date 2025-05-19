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
      </body>
    </html>
  );
}
