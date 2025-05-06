"use client";

import { useParams } from "next/navigation";
import productsData from "@/app/data/products.json";
import ProductCard from "@/app/components/product/ProductCard";
import { notFound } from "next/navigation";

export default function CategoryPage() {
  const params = useParams();
  const slug = params?.slug;

  if (typeof slug !== "string") {
    notFound();
  }

  const category = slug.toLowerCase();

  const categoryProducts = productsData.filter(
    (product) => product.category.toLowerCase() === category
  );

  if (categoryProducts.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white px-4 sm:px-8 py-10">
      <h2 className="text-3xl font-bold text-center mb-6 capitalize">
        {category}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categoryProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            regularPrice={product.regularPrice}
            discountedPrice={product.discountedPrice}
            label={product.label}
          />
        ))}
      </div>
    </div>
  );
}
