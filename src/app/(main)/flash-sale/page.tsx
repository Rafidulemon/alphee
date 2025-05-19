import productsData from "../../data/products.json";
import ProductCard from "../../components/product/ProductCard";

export default function FlashSalePage() {
  const flashSaleProducts = productsData.filter(
    (product) => product.label === "Flash Sale"
  );

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white px-4 sm:px-8 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-red-500 mb-2">
            ⚡ Flash Sale
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Grab these hot deals before they’re gone. Limited time only!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {flashSaleProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
