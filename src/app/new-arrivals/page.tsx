"use client";

import ProductCard from "../components/product/ProductCard";

const newArrivalProducts = [
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

export default function NewArrivalsPage() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white px-4 sm:px-8 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
            New Arrivals
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Discover what’s fresh. Stay ahead of trends with our latest collection.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {newArrivalProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
