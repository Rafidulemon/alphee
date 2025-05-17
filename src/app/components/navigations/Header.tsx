"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import Topbar from "./Topbar";
import { navItems } from "@/app/constants/navItems";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useCartStore } from "@/app/store/cartStore";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const cartCount = useCartStore((state) => state.getTotalItems());

  return (
    <header className="bg-[#111111] shadow-md border-b border-gray-200">
      <Topbar />

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Mobile menu button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Alphee Logo"
            width={100}
            height={60}
            className="object-contain hidden md:flex"
          />
          <Image
            src="/images/logo.png"
            alt="Alphee Logo"
            width={80}
            height={60}
            className="object-contain md:hidden"
          />
        </Link>

        {/* Desktop Search */}
        <div className="hidden md:block flex-1 mx-8 text-white">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border border-primary rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          {/* Mobile Search Icon */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Mobile Search Input */}
          {mobileSearchOpen && (
            <input
              type="text"
              placeholder="Search..."
              className="absolute top-16 left-4 right-4 z-20 border px-4 py-2 text-sm rounded shadow-md bg-white md:hidden"
            />
          )}

          <Link
            href="/account"
            className="text-secondary hover:text-primary hidden md:inline"
          >
            <User className="w-5 h-5" />
          </Link>

          <Link
            href="/cart"
            className="relative text-secondary hover:text-primary"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
              {cartCount}
            </span>
          </Link>
        </div>
      </div>

      {mobileMenuOpen && (
        <MobileNav
          navItems={navItems}
          onClose={() => setMobileMenuOpen(false)}
        />
      )}

      <DesktopNav navItems={navItems} />
    </header>
  );
}
