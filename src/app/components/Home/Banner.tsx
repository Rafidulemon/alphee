"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const images = [
  "/images/banners/Banner2.png",
  "/images/banners/Banner4.png",
  "/images/banners/Banner1.png",
  "/images/banners/Banner3.png",
];

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="relative overflow-hidden">
      <div className="w-screen md:w-full flex items-center justify-center">
        {/* Image Slider Only */}
        <div
          className="relative w-full cursor-pointer"
          onClick={() => router.push("/shop")}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={images[current]}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.01 }}
              className="w-full h-auto"
            >
              <Image
                src={images[current]}
                alt={`Banner ${current + 1}`}
                width={1200}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </motion.div>
          </AnimatePresence>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute cursor-pointer left-2 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute cursor-pointer right-2 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
