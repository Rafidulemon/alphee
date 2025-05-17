"use client";

import { useEffect, useState } from "react";
import products from "@/app/data/products.json";
import policestationDataRaw from "@/app/data/policestation.json";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  regularPrice: number;
  discountedPrice?: number;
  size: string[];
  details: string;
}

interface PoliceStationData {
  [division: string]: {
    [district: string]: string[];
  };
}

export default function BuyNowPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [location, setLocation] = useState("inside");
  const [district, setDistrict] = useState("");
  const [policeStation, setPoliceStation] = useState("");
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const policestationData: PoliceStationData = policestationDataRaw;

  const districts = Object.keys(policestationData);
 const policeStationsForInside = [
  "Bakalia",
  "Bayazid Bostami",
  "Chandgaon",
  "Chawkbazar",
  "Double Mooring",
  "Halishahar",
  "Khulshi",
  "Kotwali",
  "Pahartali",
  "Panchlaish",
  "Patenga",
  "EPZ"
];
  const policeStationsForDistrict = district
  ? Object.values(policestationData[district] || {}).flat()
  : [];

  console.log(policeStationsForDistrict);

  useEffect(() => {
    const url = new URL(window.location.href);
    const productId = url.pathname.split("/").pop();
    const found = products.find((p) => p.id === productId);
    if (found) setProduct(found as Product);
  }, []);

  // Reset police station & district on location change
  useEffect(() => {
    setPoliceStation("");
    if (location === "inside") {
      setDistrict(""); // no district needed if inside
    }
  }, [location]);

  // Reset police station when district changes (outside)
  useEffect(() => {
    setPoliceStation("");
  }, [district]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }

    if (!policeStation) {
      alert("Please select a police station.");
      return;
    }

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const customerName = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const address = formData.get("address") as string;

    const deliveryCharge = location === "inside" ? 50 : 100;
    const totalPrice = (product!.discountedPrice || product!.regularPrice) * quantity + deliveryCharge;

    const orderDetails = {
      productId: product!.id,
      productName: product!.name,
      price: product!.discountedPrice || product!.regularPrice,
      quantity,
      size: selectedSize,
      customerName,
      phone,
      email,
      address,
      location,
      district,
      policeStation,
      deliveryCharge,
      totalPrice,
    };

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderDetails),
      });

      if (!res.ok) throw new Error("Order submission failed");

      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        router.push("/");
      }, 3000);
    } catch (error) {
      console.error("Order error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  if (!product) {
    return <div className="text-center py-10 text-lg text-gray-400">Loading product...</div>;
  }

  const deliveryCharge = location === "inside" ? 50 : 100;
  const totalPrice = (product.discountedPrice || product.regularPrice) * quantity + deliveryCharge;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-center text-2xl font-bold mb-4 text-primary">Buy Now</h1>
      <div className="grid md:grid-cols-2 gap-6 bg-[#131313] text-white p-6 rounded-xl shadow">
        {/* Product Summary */}
        <div>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-xl object-cover"
          />
          <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
          <p className="text-sm text-gray-400 mb-2">{product.details}</p>
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-primary">
              ৳{product.discountedPrice || product.regularPrice}
            </span>
            {product.discountedPrice && (
              <span className="line-through text-sm text-gray-400">৳{product.regularPrice}</span>
            )}
          </div>
        </div>

        {/* Order Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm">Product ID</label>
            <input
              value={product.id}
              name="productId"
              required
              readOnly
              className="w-full p-2 rounded bg-[#222] border border-gray-600 text-sm"
            />
          </div>

          <div>
            <label className="text-sm">Size</label>
            <select
              value={selectedSize}
              name="size"
              required
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full p-2 rounded bg-[#222] border border-gray-600 text-sm"
            >
              <option value="">Select Size</option>
              {product.size.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm">Quantity</label>
            <input
              type="number"
              name="quantity"
              required
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              min={1}
              className="w-full p-2 rounded bg-[#222] border border-gray-600 text-sm"
            />
          </div>

          <div>
            <label className="text-sm">Name</label>
            <input
              required
              name="name"
              className="w-full p-2 rounded bg-[#222] border border-gray-600 text-sm"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="text-sm">Contact Number</label>
            <input
              required
              name="phone"
              className="w-full p-2 rounded bg-[#222] border border-gray-600 text-sm"
              placeholder="Phone number"
            />
          </div>

          <div>
            <label className="text-sm">Email (optional)</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 rounded bg-[#222] border border-gray-600 text-sm"
              placeholder="Email"
            />
          </div>

          <div>
            <label className="text-sm">Address</label>
            <textarea
              required
              name="address"
              className="w-full p-2 rounded bg-[#222] border border-gray-600 text-sm"
              placeholder="Your address"
            ></textarea>
          </div>

          <div>
            <label className="text-sm">Delivery Location</label>
            <div className="flex gap-4 mt-1">
              <label className="flex items-center gap-2 text-sm">
                <input
                  name="location"
                  type="radio"
                  value="inside"
                  checked={location === "inside"}
                  onChange={() => setLocation("inside")}
                />
                Inside Chittagong City
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  name="location"
                  type="radio"
                  value="outside"
                  checked={location === "outside"}
                  onChange={() => setLocation("outside")}
                />
                Outside Chittagong City
              </label>
            </div>
          </div>

          {location === "inside" ? (
            <div>
              <label className="text-sm">Police Station</label>
              <select
                required
                name="policeStation"
                value={policeStation}
                onChange={(e) => setPoliceStation(e.target.value)}
                className="w-full p-2 rounded bg-[#222] border border-gray-600 text-sm"
              >
                <option value="">Select Police Station</option>
                {policeStationsForInside.map((ps:string) => (
                  <option key={ps} value={ps}>
                    {ps}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <>
              <div>
                <label className="text-sm">District</label>
                <select
                  required
                  name="district"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full p-2 rounded bg-[#222] border border-gray-600 text-sm"
                >
                  <option value="">Select District</option>
                  {districts.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm">Police Station</label>
                <select
                  required
                  name="policeStation"
                  value={policeStation}
                  onChange={(e) => setPoliceStation(e.target.value)}
                  disabled={!district}
                  className="w-full p-2 rounded bg-[#222] border border-gray-600 text-sm disabled:opacity-50"
                >
                  <option value="">Select Police Station</option>
                  {policeStationsForDistrict.map((ps: string) => (
                    <option key={ps} value={ps}>
                      {ps}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}

          <div className="pt-4 border-t border-gray-600">
            <p className="text-sm">
              Delivery Charge:{" "}
              <span className="font-medium text-primary">৳{deliveryCharge}</span>
            </p>
            <p className="text-sm">
              Total:{" "}
              <span className="font-bold text-primary text-lg">৳{totalPrice}</span>
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-[#c2a265] text-white text-sm font-medium py-2 px-4 rounded mt-2"
          >
            Submit Order
          </button>
        </form>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-black text-black p-6 rounded-2xl shadow-xl text-center max-w-xs w-full animate-fade-in">
            <h2 className="text-lg font-bold mb-2 text-white">✅ Order Placed Successfully!</h2>
            <p className="text-sm text-white">You will be redirected to homepage shortly...</p>
          </div>
        </div>
      )}

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
