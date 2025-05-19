"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-10">
      <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 space-y-10">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-b border-gray-700 pb-10">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Alphee Logo"
                width={100}
                height={40}
                className="mb-4"
              />
            </Link>
            <div>
              <p className="text-gray-200 text-sm mt-2">
                Hajee Amju Miah Tower (4th Floor), Holding No. 584
                <br />
                Arakan Road, Ward No: 07, Patiya
                <br />
                Chittagong-4370
              </p>
              <p className="text-gray-200 text-sm mt-2">
                Email:{" "}
                <a
                  href="mailto:alphee.bd@gmail.com"
                  className="hover:underline"
                >
                  alphee.bd@gmail.com
                </a>
                <br />
                Phone:{" "}
                <a href="tel:+8801973547022" className="hover:underline">
                  +880 1973-547022
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="flex flex-col justify-between">
              <h3 className="text-secondary font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="transform transition-transform duration-300 hover:scale-105 hover:text-primary hover:font-bold">
                  <Link href="/">Home</Link>
                </li>

                <li className="transform transition-transform duration-300 hover:scale-105 hover:text-primary hover:font-bold">
                  <Link href="/shop">Shop</Link>
                </li>
                <li className="transform transition-transform duration-300 hover:scale-105 hover:text-primary hover:font-bold">
                  <Link href="/best-selling">Best Selling</Link>
                </li>
                <li className="transform transition-transform duration-300 hover:scale-105 hover:text-primary hover:font-bold">
                  <Link href="/flash-sale">Flash Sale</Link>
                </li>
              </ul>
            </div>

            <div className="flex-1">
              <h3 className="text-white font-semibold mt-4 md:mt-6">
                Follow Us On:
              </h3>
              <div className="flex flex-row space-x-4 mt-2">
                <FaFacebook
                  className="w-5 h-5 text-[#1877F2] hover:text-white cursor-pointer"
                  href="https://www.facebook.com/profile.php?id=61572945527439"
                  target="_blank"
                  aria-label="Facebook"
                />
                <FaInstagram
                  className="w-5 h-5 text-[#DD2A7B] hover:text-white cursor-pointer"
                  href="https://www.instagram.com/alphee.bd/"
                  target="_blank"
                  aria-label="Instagram"
                />

                <FaTwitter className="w-5 h-5 text-[#1DA1F2] hover:text-white cursor-pointer" />

                <FaLinkedin className="w-5 h-5 text-[#0077B5] hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-secondary font-semibold mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="transform transition-transform duration-300 hover:scale-105 hover:text-primary hover:font-bold">
                <Link href="/about-us">About Us</Link>
              </li>
              <li className="transform transition-transform duration-300 hover:scale-105 hover:text-primary hover:font-bold">
                <Link href="/terms">Terms & Conditions</Link>
              </li>
              <li className="transform transition-transform duration-300 hover:scale-105 hover:text-primary hover:font-bold">
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="transform transition-transform duration-300 hover:scale-105 hover:text-primary hover:font-bold">
                <Link href="/refund-policy">Cancellation & Refund Policy</Link>
              </li>
              <li className="transform transition-transform duration-300 hover:scale-105 hover:text-primary hover:font-bold">
                <Link href="/faq">FAQS</Link>
              </li>
              <li className="transform transition-transform duration-300 hover:scale-105 hover:text-primary hover:font-bold">
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li className="transform transition-transform duration-300 hover:scale-105 hover:text-primary hover:font-bold">
                <Link href="/location">Store Locator</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-6">
          <p className="text-gray-400 text-sm mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} Alphee. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm text-center">
            Design and Developed by{" "}
            <Link
              href="https://rafidul-portfolio.vercel.app/"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              Md. Rafidul Islam
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
