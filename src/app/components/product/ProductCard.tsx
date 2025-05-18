"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/store/cartStore";

interface ProductCardProps {
  id: string;
  name: string;
  imageUrl: string;
  regularPrice: number;
  discountedPrice?: number;
  label?: string;
  availableSizes?: string[];
}

export default function ProductCard({
  id,
  name,
  imageUrl,
  regularPrice,
  discountedPrice,
  label,
  availableSizes,
}: ProductCardProps) {
  const discountPercentage = discountedPrice
    ? Math.round(((regularPrice - discountedPrice) / regularPrice) * 100)
    : null;
  const router = useRouter();

  return (
    <div className="w-[150px] h-[350px] md:w-[300px] md:h-[450px] group block rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 bg-[#131313] flex flex-col justify-between">
      {/* Product Image & Labels */}
      <div className="w-full flex flex-col">
        <Link href={`/product/${id}`}>
          <div className="relative w-full h-40 md:h-64">
            <Image
              src={imageUrl}
              alt={name}
              fill
              placeholder="blur"
              blurDataURL="/images/landscape-placeholder.svg"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Discount Badge (Top Left) */}
            {discountPercentage && (
              <span className="absolute top-2 left-2 bg-red-600 text-white text-xs md:text-sm px-2 py-0.5 rounded-full shadow">
                -{discountPercentage}%
              </span>
            )}

            {/* Label Badge (Top Right) */}
            {label && (
              <span className="absolute top-2 right-2 bg-yellow-500 text-black text-xs md:text-sm px-2 py-0.5 rounded-full shadow font-semibold">
                {label}
              </span>
            )}
          </div>
        </Link>

        {/* Product Info */}
        <div className="p-4">
          <Link href={`/product/${id}`}>
            <h3 className="text-center font-medium text-sm text-secondary pb-2">
              {name}
            </h3>
          </Link>

          <div className="flex items-center justify-center gap-4">
            {discountedPrice ? (
              <>
                <span className="text-primary font-semibold text-sm md:text-base">
                  ৳{discountedPrice}
                </span>
                <span className="text-gray-400 line-through text-xs md:text-sm">
                  ৳{regularPrice}
                </span>
              </>
            ) : (
              <span className="text-gray-300 font-medium text-sm md:text-base">
                ৳{regularPrice}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-3 flex flex-col gap-2 px-4 pb-4">
        <button
          className="cursor-pointer flex-1 text-sm text-primary font-medium border border-gray-300 hover:border-primary hover:bg-primary hover:text-white transition rounded px-3 py-1 flex items-center justify-center space-x-1"
          onClick={() =>
            useCartStore.getState().addItem({
              id,
              name,
              imageUrl,
              regularPrice,
              discountedPrice: discountedPrice || regularPrice,
              availableSizes: availableSizes,
            })
          }
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>
        <button
          className="cursor-pointer flex-1 text-sm font-medium bg-primary text-white hover:bg-[#c2a265] transition rounded px-3 py-1 flex items-center justify-center space-x-1"
          onClick={() => {
            useCartStore.getState().addItem({
              id,
              name,
              imageUrl,
              regularPrice,
              discountedPrice: discountedPrice || regularPrice,
              availableSizes: availableSizes,
            });
            router.push("/cart");
          }}
        >
          <span>Buy Now</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
