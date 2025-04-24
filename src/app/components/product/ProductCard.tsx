"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, ArrowRight } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  imageUrl: string;
  regularPrice: number;
  discountedPrice?: number;
}

export default function ProductCard({
  id,
  name,
  imageUrl,
  regularPrice,
  discountedPrice,
}: ProductCardProps) {
  return (
    <div className="w-[150px] md:w-[300px] group block rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 bg-[#131313]">
      {/* Product Image */}
      <Link href={`/product/${id}`}>
        <div className="relative w-full h-40 md:h-64">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4 space-y-">
        <Link href={`/product/${id}`}>
          <h3 className="text-center font-medium text-sm text-secondary pb-2">
            {name}
          </h3>
        </Link>

        <div className="flex items-center space-x-2">
          {discountedPrice ? (
            <div className="w-full flex items-center justify-center gap-4">
              <span className="text-primary font-semibold text-sm md:text-base">
                ৳{discountedPrice}
              </span>
              <span className="text-gray-400 line-through text-xs md:text-sm">
                ৳{regularPrice}
              </span>
            </div>
          ) : (
            <span className="text-gray-800 font-medium text-sm md:text-base">
              ৳{regularPrice}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-3 flex flex-col md:flex-row gap-2">
          <button className="cursor-pointer flex-1 text-sm text-primary font-medium border border-gray-300 hover:border-primary hover:bg-primary hover:text-white transition rounded px-3 py-1 flex items-center justify-center space-x-1">
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
          <button className="cursor-pointer flex-1 text-sm font-medium bg-primary text-white hover:bg-[#c2a265] transition rounded px-3 py-1 flex items-center justify-center space-x-1">
            <span>Buy Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
