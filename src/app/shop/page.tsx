"use client";

import { useState } from "react";
import ProductCard from "../components/product/ProductCard";
import productsData from "../data/products.json";

const products = [...productsData].sort(
  (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
);

const categories = ["All", ...new Set(products.map((p) => p.category))];

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="flex w-full mx-auto p-6">
      {/* Sidebar */}
      <div className="md:block hidden w-1/4 bg-[#131313] text-white rounded-xl p-6 mr-6">
        <h2 className="text-lg font-semibold">Categories</h2>
        <ul className="space-y-4 mt-4">
          {categories.map((category) => (
            <li key={category} className="flex items-center space-x-2">
              <input
                type="radio"
                name="category"
                value={category}
                id={category}
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
                className="text-primary"
              />
              <label htmlFor={category} className="cursor-pointer text-sm">
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Product Grid */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredProducts.length === 0 ? (
          <div className="col-span-full text-center text-lg text-gray-500">
            No products found for this category.
          </div>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        )}
      </div>
    </div>
  );
};

export default ShopPage;
