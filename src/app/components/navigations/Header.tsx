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
import { products } from "@/app/data/products"; // ✅ import product list

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const cartCount = useCartStore((state) => state.getTotalItems());

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <header className="bg-[#111111] shadow-md border-b border-gray-200 relative">
      <Topbar />

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Mobile Menu */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
        <div className="hidden md:block relative flex-1 mx-8 text-white">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setTimeout(() => setSearchFocused(false), 150)}
            className="w-full border border-primary rounded px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-primary"
          />

          {searchTerm && searchFocused && (
            <ul className="absolute z-20 bg-black shadow-lg w-full rounded mt-1 max-h-60 overflow-y-auto text-sm text-white">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <li key={product.id}>
                    <Link
                      href={`/product/${product.id}`}
                      className="block px-4 py-2 hover:bg-primary"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-gray-500">No results found.</li>
              )}
            </ul>
          )}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          {/* Mobile Search Toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Mobile Search Input */}
          {mobileSearchOpen && (
            <div className="absolute top-16 left-4 right-4 z-20">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border px-4 py-2 text-sm rounded shadow-md bg-white"
              />
              <ul className="bg-white shadow rounded mt-1 max-h-60 overflow-y-auto text-sm text-black">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <li key={product.id}>
                      <Link
                        href={`/product/${product.id}`}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {product.name}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 text-gray-500">No results found.</li>
                )}
              </ul>
            </div>
          )}

          <Link href="/account" className="text-secondary hover:text-primary hidden md:inline">
            <User className="w-5 h-5" />
          </Link>

          <Link href="/cart" className="relative text-secondary hover:text-primary">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
              {cartCount}
            </span>
          </Link>
        </div>
      </div>

      {mobileMenuOpen && (
        <MobileNav navItems={navItems} onClose={() => setMobileMenuOpen(false)} />
      )}

      <DesktopNav navItems={navItems} />
    </header>
  );
}
