"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { ShoppingCart, ArrowRight } from "lucide-react";
import products from "@/app/data/products.json";
import ProductCard from "@/app/components/product/ProductCard";
import { useCartStore } from "@/app/store/cartStore";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const product = products.find((p) => p.id === id);
  const [mainImage, setMainImage] = useState<string | null>(
    product?.imageUrl || null
  );

  if (!product) {
    return (
      <div className="text-white text-center py-20">Product not found.</div>
    );
  }

  const handleBuyNow = () => {

  useCartStore.getState().addItem({
    id: product.id,
    name: product.name,
    imageUrl: product.imageUrl,
    regularPrice: product.regularPrice,
    discountedPrice: product.discountedPrice || product.regularPrice,
    availableSizes: product.size || [],
  });

  router.push(`/cart`);
};

  const images: string[] = [
    product.imageUrl,
    product.imageUrl2,
    product.imageUrl3,
  ].filter((img): img is string => typeof img === "string");

  return (
    <div className="text-white px-4 sm:px-8 py-10 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Image Gallery */}
        <div>
          <div className="relative w-full h-[200px] md:w-[400px] md:h-[400px] overflow-hidden group rounded-xl">
            <Image
              src={mainImage || product.imageUrl}
              alt={product.name}
              fill
              className="object-contain md:object-cover transition-transform duration-200 group-hover:scale-150 group-hover:cursor-zoom-in"
            />
          </div>

          <div className="flex gap-2 mt-4">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="w-20 h-20 border border-gray-700 rounded cursor-pointer overflow-hidden"
                onClick={() => setMainImage(img)}
              >
                <Image
                  src={img}
                  alt={`thumb-${idx}`}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Info Section */}
        <div className="space-y-5">
          <h1 className="text-2xl sm:text-3xl font-bold">{product.name}</h1>

          {/* Pricing */}
          <div className="flex items-center gap-4">
            <span className="text-primary text-2xl font-semibold">
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

          {/* Size Selector */}
          {product.size && (
            <div className="flex flex-col gap-2">
              <label className="text-sm">Available Sizes:</label>
              <div className="flex gap-2 flex-wrap">
                {product.size.map((sz) => (
                  <p
                    key={sz}
                    className={`px-3 py-1 rounded border border-gray-500 text-sm`}
                  >
                    {sz}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <div className="pt-4 border-t border-gray-700 text-gray-400 text-sm leading-relaxed">
            <p className="mb-2">{product.details}</p>
            <ul className="mt-3 space-y-1">
              {product.color && (
                <li>
                  <strong>Color:</strong> {product.color}
                </li>
              )}
              {product.composition && (
                <li>
                  <strong>Composition:</strong> {product.composition}
                </li>
              )}
              {product.gsm && (
                <li>
                  <strong>GSM:</strong> {product.gsm}
                </li>
              )}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                useCartStore.getState().addItem({
                  id: product.id,
                  name: product.name,
                  imageUrl: product.imageUrl,
                  regularPrice: product.regularPrice,
                  discountedPrice:
                    product.discountedPrice || product.regularPrice,
                  availableSizes: product.size || [],
                });
              }}
              className="cursor-pointer flex-1 text-sm text-primary font-medium border border-gray-300 hover:border-primary hover:bg-primary hover:text-white transition rounded px-3 py-2 flex items-center justify-center gap-1"
            >
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </button>

            <button
              onClick={handleBuyNow}
              className="cursor-pointer flex-1 text-sm font-medium bg-primary text-white hover:bg-[#c2a265] transition rounded px-3 py-2 flex items-center justify-center gap-1"
            >
              Buy Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      {/* Similar Products */}
      <div className="w-full mx-auto pt-16 items-center flex flex-col gap-6 justify-center">
        <h2 className="text-xl font-semibold mb-4">You May Also Like</h2>
        <div className="grid grid-cols-2 md:flex gap-6">
          {products
            .filter(
              (p) => p.category === product.category && p.id !== product.id
            )
            .slice(0, 4)
            .map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
                regularPrice={item.regularPrice}
                discountedPrice={item.discountedPrice}
                label={item.label}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
