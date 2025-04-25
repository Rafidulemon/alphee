"use client";

import { useState } from "react";
import ProductCard from "../components/product/ProductCard";

const categories = ["All", "T-Shirts", "Jeans", "Jackets", "Shoes"];
const products = [
  { id: "1", name: "Classic T-Shirt", category: "T-Shirts", imageUrl: "/images/products/tshirts/7.jpg", regularPrice: 500 },
  { id: "2", name: "Slim Fit Jeans", category: "Jeans", imageUrl: "/images/product2.jpg", regularPrice: 1500 },
  { id: "3", name: "Leather Jacket", category: "Jackets", imageUrl: "/images/product3.jpg", regularPrice: 2500 },
  { id: "4", name: "Running Shoes", category: "Shoes", imageUrl: "/images/product4.jpg", regularPrice: 3000 },
  { id: "5", name: "Basic T-Shirt", category: "T-Shirts", imageUrl: "/images/products/tshirts/1.jpg", regularPrice: 400 },
  { id: "6", name: "Denim Jacket", category: "shirts", imageUrl: "/images/products/shirts/cuban_half/2.jpg", regularPrice: 2000 },
  { id: "7", name: "Casual Sneakers", category: "shirts", imageUrl: "/images/products/shirts/cuban_half/1.jpg", regularPrice: 1800 },
];

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === "All" 
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
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              regularPrice={product.regularPrice}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ShopPage;
