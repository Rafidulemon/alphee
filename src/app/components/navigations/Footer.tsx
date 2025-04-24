"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-10">
      <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pb-10 border-b border-gray-700">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Alphee Logo"
                width={150}
                height={40}
                className="mb-4"
              />
            </Link>
            <p className="text-gray-200 text-md">
              Fusion of Class & Style.
            </p>
            <div>
            <p className="text-gray-400 text-sm mt-2">
              Tanisha Bhaban, Munsef Bazar<br />
              Ward No: 04, Patiya<br />
              Chittagong-4370
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Email: alphee.bd@gmail.com<br />
              Phone: +880 1973-547022
            </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/best-selling">Best Selling</Link></li>
              <li><Link href="/flash-sale">Flash Sale</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/refund-policy">Refund Policy</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
              <li><Link href="/sitemap">Sitemap</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Alphee. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white" />
            </Link>
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
            </Link>
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
