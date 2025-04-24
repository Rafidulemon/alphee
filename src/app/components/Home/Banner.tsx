"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 py-12 md:py-24">
        {/* Left Content */}
        <motion.div
          className="text-center md:text-left md:w-1/2 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-200 leading-tight">
            Fusion of <span className="text-primary">Class</span> and{" "}
            <span className="text-primary">Style</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto md:mx-0">
            Discover the perfect blend of tradition and trend with Alphée. Elevate your wardrobe with our latest collections.
          </p>
          <Link
            href="/new-collection"
            className="inline-block bg-primary text-white px-6 py-3 rounded-2xl shadow hover:bg-[#b99c67] transition"
          >
            Shop Now
          </Link>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/rafid1.png" // Make sure to add this image in the public/images folder
            alt="Banner Model"
            width={600}
            height={500}
            className="w-full h-auto object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
