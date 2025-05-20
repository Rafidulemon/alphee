"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "../components/product/ProductCard";
import productsData from "../data/products.json";

const rawProducts = [...productsData];
const categories = ["All", ...new Set(rawProducts.map((p) => p.category))];
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

type SortOption = "default" | "priceLowHigh" | "priceHighLow" | "nameAZ";

const ShopPage = () => {
  const searchParams = useSearchParams();
  const categoryFromQuery = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState<SortOption>("default");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    if (categoryFromQuery && categories.includes(categoryFromQuery)) {
      setSelectedCategory(categoryFromQuery);
    }
  }, [categoryFromQuery]);

  // Filter by category
  let filteredProducts =
    selectedCategory === "All"
      ? rawProducts
      : rawProducts.filter((product) => product.category === selectedCategory);

  // Filter by stock
  if (inStockOnly) {
    filteredProducts = filteredProducts.filter((product) => !product.isSoldOut);
  }

  // Sort
  switch (sortOption) {
    case "priceLowHigh":
      filteredProducts.sort(
        (a, b) => (a.discountedPrice || a.regularPrice) - (b.discountedPrice || b.regularPrice)
      );
      break;
    case "priceHighLow":
      filteredProducts.sort(
        (a, b) => (b.discountedPrice || b.regularPrice) - (a.discountedPrice || a.regularPrice)
      );
      break;
    case "nameAZ":
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      filteredProducts.sort(
        (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
      break;
  }

  return (
    <div className="flex flex-col md:flex-row w-full mx-auto p-4 md:p-6">
      {/* Mobile Filter Toggle */}
      <div className="md:hidden w-full mb-4">
        <button
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          className="bg-primary text-black px-4 py-2 rounded font-medium w-full"
        >
          {mobileFiltersOpen ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Sidebar Filters */}
      <div
        className={`${
          mobileFiltersOpen ? "block" : "hidden"
        } md:block w-full md:w-1/4 bg-[#131313] text-white rounded-xl p-6 mb-6 md:mb-0 md:mr-6`}
      >
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
                className="cursor-pointer text-primary"
              />
              <label htmlFor={category} className="cursor-pointer text-sm">
                {capitalize(category)}
              </label>
            </li>
          ))}
        </ul>

        {/* Stock Filter */}
        <div className="mt-6">
          <input
            type="checkbox"
            id="inStock"
            checked={inStockOnly}
            onChange={() => setInStockOnly(!inStockOnly)}
            className="mr-2"
          />
          <label htmlFor="inStock" className="text-sm">
            In Stock Only
          </label>
        </div>

        {/* Sort Options */}
        <div className="mt-6">
          <label className="block mb-2 text-sm font-semibold">Sort By</label>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value as SortOption)}
            className="w-full p-2 bg-[#1e1e1e] text-white border border-gray-600 rounded-md text-sm"
          >
            <option value="default">Newest</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="nameAZ">Name: A to Z</option>
          </select>
        </div>
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
