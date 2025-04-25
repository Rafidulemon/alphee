"use client";

import ProductCard from "../components/product/ProductCard";

const bestSellingProducts = [
  {
    id: "1",
    name: "Black Premium Punjabi",
    imageUrl: "/images/products/punjabi/1.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
    label: "Best Selling",
  },
  {
    id: "2",
    name: "PK Polo - Iceberg Green",
    imageUrl: "/images/products/polo/1.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
    label: "Best Selling",
  },
  {
    id: "3",
    name: "PK Polo - Navy",
    imageUrl: "/images/products/polo/2.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
    label: "Best Selling",
  },
  {
    id: "4",
    name: "Premium Cuban Shirt - White",
    imageUrl: "/images/products/shirts/cuban_half/7.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
    label: "Best Selling",
  },
  {
    id: "5",
    name: "Black Premium Punjabi",
    imageUrl: "/images/products/punjabi/1.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
    label: "Best Selling",
  },
  {
    id: "6",
    name: "PK Polo - Iceberg Green",
    imageUrl: "/images/products/polo/1.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
    label: "Best Selling",
  },
  {
    id: "7",
    name: "PK Polo - Navy",
    imageUrl: "/images/products/polo/2.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
    label: "Best Selling",
  },
  {
    id: "8",
    name: "Premium Cuban Shirt - White",
    imageUrl: "/images/products/shirts/cuban_half/7.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
    label: "Best Selling",
  },

  {
    id: "9",
    name: "Black Premium Punjabi",
    imageUrl: "/images/products/punjabi/1.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
    label: "Best Selling",
  },
  {
    id: "10",
    name: "PK Polo - Iceberg Green",
    imageUrl: "/images/products/polo/1.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
    label: "Best Selling",
  },
  {
    id: "11",
    name: "PK Polo - Navy",
    imageUrl: "/images/products/polo/2.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
    label: "Best Selling",
  },
  {
    id: "12",
    name: "Premium Cuban Shirt - White",
    imageUrl: "/images/products/shirts/cuban_half/7.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
    label: "Best Selling",
  },
  {
    id: "13",
    name: "Black Premium Punjabi",
    imageUrl: "/images/products/punjabi/1.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
    label: "Best Selling",
  },
  {
    id: "14",
    name: "PK Polo - Iceberg Green",
    imageUrl: "/images/products/polo/1.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
    label: "Best Selling",
  },
  {
    id: "15",
    name: "PK Polo - Navy",
    imageUrl: "/images/products/polo/2.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
    label: "Best Selling",
  },
  {
    id: "16",
    name: "Premium Cuban Shirt - White",
    imageUrl: "/images/products/shirts/cuban_half/7.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
    label: "Best Selling",
  },
  {
    id: "17",
    name: "Black Premium Punjabi",
    imageUrl: "/images/products/punjabi/1.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
    label: "Best Selling",
  },
  {
    id: "18",
    name: "PK Polo - Iceberg Green",
    imageUrl: "/images/products/polo/1.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
    label: "Best Selling",
  },
  {
    id: "19",
    name: "PK Polo - Navy",
    imageUrl: "/images/products/polo/2.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
    label: "Best Selling",
  },
  {
    id: "20",
    name: "Premium Cuban Shirt - White",
    imageUrl: "/images/products/shirts/cuban_half/7.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
    label: "Best Selling",
  },
];

export default function BestSellingPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white px-4 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
            Best Selling Products
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Explore the favorites loved by our customers — top-trending pieces
            that never go out of style.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
          {bestSellingProducts.map((product) => (
            <div className="w-full flex items-center justify-center" key={product.id}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
