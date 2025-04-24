import CategoryCard from "./components/CategoryCard";
import Banner from "./components/Home/Banner";
import ProductCard from "./components/product/ProductCard";

const new_arrivals = [
  {
    id: "PDS001",
    name: "Premium Drop Shoulder - Chocolate",
    imageUrl: "/images/products/tshirts/1.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
  },
  {
    id: "PDS002",
    name: "Premium Drop Shoulder - Lavanderash",
    imageUrl: "/images/products/tshirts/2.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
  },
  {
    id: "PDS003",
    name: "Premium Drop Shoulder - Ice Berg Green",
    imageUrl: "/images/products/tshirts/3.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
  },
  {
    id: "PDS004",
    name: "Premium Drop Shoulder - Silver",
    imageUrl: "/images/products/tshirts/4.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
  },
];

const best_selling = [
  {
    id: "punjabi1",
    name: "Black Premium Punjabi",
    imageUrl: "/images/products/punjabi/1.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
  },
  {
    id: "polo001",
    name: "PK Polo - Iceberg Green",
    imageUrl: "/images/products/polo/1.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
  },
  {
    id: "punjabi3",
    name: "PK Polo - Navy",
    imageUrl: "/images/products/polo/2.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
  },
  {
    id: "punjabi4",
    name: "Premium Cuban Shirt - White",
    imageUrl: "/images/products/shirts/cuban_half/7.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
  },
];

const flash_sale = [
  {
    id: "punjabi1",
    name: "Premium Cotton Punjabi",
    imageUrl: "/images/products/punjabi/7.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
  },
  {
    id: "punjabi2",
    name: "Premium Cotton Punjabi",
    imageUrl: "/images/products/punjabi/4.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
  },
  {
    id: "punjabi3",
    name: "Premium Cotton Punjabi",
    imageUrl: "/images/products/punjabi/3.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
  },
  {
    id: "punjabi4",
    name: "Premium Cotton Punjabi",
    imageUrl: "/images/products/punjabi/1.jpg",
    regularPrice: 2200,
    discountedPrice: 1800,
  },
];

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

const ProductSection = ({
  title,
  products,
}: {
  title: string;
  products: typeof new_arrivals;
}) => (
  <div className="p-10 flex flex-col gap-6 w-full justify-center items-center">
    <span className="text-2xl font-bold text-[#d3b47f] text-center">
      {title}
    </span>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
    <button className="text-primary cursor-pointer">View All</button>
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

export default function Home() {
  return (
    <div className="w-full text-red-500">
      <Banner />
      <ProductSection title="NEW ARRIVALS" products={new_arrivals} />
      <CategorySection />
      <ProductSection title="BEST SELLING" products={best_selling} />
      <ProductSection title="🔥FLASH SALE🔥" products={flash_sale} />
    </div>
  );
}
