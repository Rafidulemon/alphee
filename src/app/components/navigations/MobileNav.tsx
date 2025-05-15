"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  HomeIcon,
  Tag,
  Package,
  Flame,
  Star,
  X,
  ChevronDown,
  ChevronUp,
  User,
  ShoppingCart,
} from "lucide-react";
import { NavItem } from "@/app/types/NavItem";

const iconMap = {
  home: HomeIcon,
  tag: Tag,
  package: Package,
  flame: Flame,
  star: Star,
};

export default function MobileNav({
  navItems,
  onClose,
}: {
  navItems: NavItem[];
  onClose: () => void;
}) {
  const [dropdownOpen, setDropdownOpen] = useState<Record<string, boolean>>({});

  const toggleDropdown = (label: string) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <nav className="md:hidden fixed top-0 left-0 h-full w-[70%] bg-[#050505] z-50 px-4 py-4 text-sm font-medium text-gray-200 shadow-lg overflow-y-auto">
      {/* Topbar: Logo + Close button */}
      <div className="flex justify-between items-center mb-6">
        <Link href="/" onClick={onClose}>
          <Image
            src="/images/logo.png"
            alt="Alphée Logo"
            width={90}
            height={40}
            className="object-contain"
          />
        </Link>
        <button onClick={onClose} className="text-primary">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Items */}
      {navItems.map((item) => {
        const Icon = iconMap[item.icon as keyof typeof iconMap];

        if (item.dropdown) {
          const isOpen = dropdownOpen[item.label];

          return (
            <div key={item.label} className="mb-4">
              <button
                className="flex justify-between items-center w-full font-semibold gap-2 hover:text-primary"
                onClick={() => toggleDropdown(item.label)}
              >
                <div className="flex items-center gap-2">
                  <Icon size={16} /> {item.label}
                </div>
                {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {isOpen && (
                <div className="flex flex-col gap-2 mt-2 ml-6">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem}
                      href={`/shop?category=${encodeURIComponent(subItem.toLowerCase())}`}
                      className="hover:text-primary"
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        }

        return (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-2 mb-4 hover:text-primary"
            onClick={onClose}
          >
            <Icon size={16} /> {item.label}
          </Link>
        );
      })}

      {/* Account & Cart Section */}
      <div className="mt-8 border-t pt-4 space-y-4">
        <Link
          href="/account"
          className="flex items-center gap-2 hover:text-primary"
          onClick={onClose}
        >
          <User size={16} /> Account
        </Link>
        <Link
          href="/cart"
          className="flex items-center gap-2 hover:text-primary"
          onClick={onClose}
        >
          <ShoppingCart size={16} /> Cart
        </Link>
      </div>
    </nav>
  );
}
