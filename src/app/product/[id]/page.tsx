"use client";

import Image from "next/image";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { useState } from "react";

const product = {
  id: "1",
  name: "Premium Oversized Tee",
  imageUrl: "/images/products/shirts/cuban_half/7.jpg",
  regularPrice: 1200,
  discountedPrice: 950,
  label: "Best Selling",
  description:
    "Crafted from ultra-soft cotton, this oversized tee is your perfect companion for both style and comfort. Ideal for layering or wearing solo.",
};

export default function ProductDetailsPage() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white px-4 sm:px-8 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Product Image */}
        <div className="relative w-full h-[400px] sm:h-[500px]">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-contain rounded-xl"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {product.name}
            </h2>

            {/* Pricing */}
            <div className="flex items-center gap-4">
              <span className="text-primary text-xl font-semibold">
                ৳{product.discountedPrice}
              </span>
              <span className="line-through text-gray-400 text-base">
                ৳{product.regularPrice}
              </span>
              <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
                {Math.round(
                  ((product.regularPrice - product.discountedPrice) /
                    product.regularPrice) *
                    100
                )}
                % OFF
              </span>
            </div>

            {/* Label */}
            {product.label && (
              <span className="inline-block bg-yellow-600 text-white text-xs font-medium px-2 py-1 rounded">
                {product.label}
              </span>
            )}
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-3">
            <label className="text-sm">Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min={1}
              className="w-16 text-center bg-transparent border border-gray-500 rounded py-1 px-2"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 text-sm text-primary font-medium border border-gray-300 hover:border-primary hover:bg-primary hover:text-white transition rounded px-3 py-2 flex items-center justify-center gap-1">
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </button>
            <button className="flex-1 text-sm font-medium bg-primary text-white hover:bg-[#c2a265] transition rounded px-3 py-2 flex items-center justify-center gap-1">
              Buy Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Description */}
          <div className="pt-6 border-t border-gray-700 text-gray-400 text-sm leading-relaxed">
            {product.description}
          </div>
        </div>
      </div>
    </div>
  );
}
