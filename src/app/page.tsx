"use client";

import CategoryCard from "./components/CategoryCard";
import Banner from "./components/Home/Banner";
import ProductCard from "./components/product/ProductCard";
import { useRouter } from "next/navigation";
import productsData from "../app/data/products.json";
import TestimonialSection from "./components/Home/Testimonial";

const best_selling = productsData
  .filter((product) => product.isBestSelling)
  .slice(0, 4);

const new_arrivals = productsData
  .filter((product) => product.label === "New Arrivals")
  .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
  .slice(0, 4);

const flash_sale = productsData
  .filter((product) => product.label === "Flash Sale")
  .slice(0, 4);

const categories = [
  {
    name: "Accessories",
    slug: "accessories",
    imageUrl: "/images/categories/accesories.jpg",
  },
  { name: "Watch", slug: "watch", imageUrl: "/images/categories/watch.jpg" },
  { name: "Shirt", slug: "shirt", imageUrl: "/images/categories/shirt.jpg" },
  { name: "Pant", slug: "pant", imageUrl: "/images/categories/pant.jpg" },
  {
    name: "Punjabi",
    slug: "punjabi",
    imageUrl: "/images/categories/punjabi.jpg",
  },
  { name: "Polo", slug: "polo", imageUrl: "/images/categories/polo.jpg" },
  {
    name: "T-shirt",
    slug: "t-shirt",
    imageUrl: "/images/categories/tshirt.jpg",
  },
  { name: "Belt", slug: "belt", imageUrl: "/images/categories/belt.jpg" },
  {
    name: "Wallet",
    slug: "wallet",
    imageUrl: "/images/categories/wallet.jpeg",
  },
];

export default function Home() {
  const router = useRouter();

  const ProductSection = ({
    title,
    products,
    url,
  }: {
    title: string;
    products: typeof new_arrivals;
    url: string;
  }) => (
    <div className="p-10 flex flex-col gap-6 w-full justify-center items-center">
      <span className="text-2xl font-bold text-[#d3b47f] text-center">
        {title}
      </span>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} label={product.label} />
        ))}
      </div>
      <button
        className="text-primary cursor-pointer"
        onClick={() => router.push(url)}
      >
        View All
      </button>
    </div>
  );

  const CategorySection = () => (
    <div className="p-10 flex flex-col gap-6 w-full justify-center items-center">
      <span className="text-2xl font-bold text-[#d3b47f] text-center">
        CATEGORIES
      </span>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </div>
  );
  return (
    <div className="w-full text-red-500">
      <Banner />
      <ProductSection
        title="NEW ARRIVALS"
        products={new_arrivals}
        url="/new-arrivals"
      />
      <CategorySection />
      <ProductSection
        title="BEST SELLING"
        products={best_selling}
        url="/best-selling"
      />
      <ProductSection
        title="🔥FLASH SALE🔥"
        products={flash_sale}
        url="flash-sale"
      />
      <TestimonialSection />
    </div>
  );
}
