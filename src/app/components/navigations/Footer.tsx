"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

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
                width={150}
                height={40}
                className="mb-4"
              />
            </Link>
            <p className="text-gray-200 text-md">Fusion of Class & Style.</p>
            <div>
              <p className="text-gray-400 text-sm mt-2">
                Tanisha Bhaban, Munsef Bazar<br />
                Ward No: 04, Patiya<br />
                Chittagong-4370
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Email: <a href="mailto:alphee.bd@gmail.com" className="hover:underline">alphee.bd@gmail.com</a><br />
                Phone: <a href="tel:+8801973547022" className="hover:underline">+880 1973-547022</a>
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

        {/* Map Section */}
        <div className="rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.72382665834687!2d91.98129678825846!3d22.293847802776842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad230009b2e35b%3A0x1632e5e805ad9bd!2sAlphee!5e0!3m2!1sen!2sbd!4v1747390765145!5m2!1sen!2sbd"
            width="100%"
            height="300"
            loading="lazy"
            allowFullScreen
            className="w-full h-72 border-none"
          ></iframe>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6 border-t border-gray-700">
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
