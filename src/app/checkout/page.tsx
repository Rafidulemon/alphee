"use client";

import { useEffect, useState } from "react";
import policestationDataRaw from "@/app/data/policestation.json";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCartStore } from "../store/cartStore";

interface PoliceStationData {
  [division: string]: {
    [district: string]: string[];
  };
}

export default function CheckoutPage() {
  const cartItems = useCartStore((state) => state.items);
  const [sizes] = useState<Record<string, string>>({});
  // const [quantities] = useState<Record<string, number>>({});

  const [location, setLocation] = useState("inside");
  const [district, setDistrict] = useState("");
  const [policeStation, setPoliceStation] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const policestationData: PoliceStationData = policestationDataRaw;

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
    "EPZ",
  ];

  const districts = Object.keys(policestationData);
  const policeStationsForDistrict = district
    ? Object.values(policestationData[district] || {}).flat()
    : [];

  useEffect(() => {
    setPoliceStation("");
    if (location === "inside") setDistrict("");
  }, [location]);

  useEffect(() => {
    setPoliceStation("");
  }, [district]);

  const deliveryCharge = location === "inside" ? 50 : 100;

  const subtotal = cartItems.reduce((total, item) => {
    const qty = item.quantity;
    const price = item.discountedPrice || item.regularPrice;
    return total + price * qty;
  }, 0);


  const totalPrice = subtotal + deliveryCharge;
  const clearCart = useCartStore((state) => state.clearCart);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phone.trim()) {
      alert("Please enter your contact number.");
      return;
    }
    if (!customerName.trim()) {
      alert("Please enter your name.");
      return;
    }
    if (!address.trim()) {
      alert("Please enter your address.");
      return;
    }
    if (!policeStation) {
      alert("Please select a police station.");
      return;
    }

    const orderDetails = cartItems.map((item) => {
      const price = item.discountedPrice || item.regularPrice;
      return {
        productId: item.id,
        productName: item.name,
        price,
        quantity: item.quantity,
        size: sizes[item.id],
      };
    });

    const customerInfo = {
      customerName,
      phone,
      email: email.trim() || null,
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
        body: JSON.stringify({ orderDetails, customerInfo }),
      });

      if (!res.ok) throw new Error("Order submission failed");

      setShowModal(true);
      setTimeout(() => {
        clearCart();
        setShowModal(false);
        router.push("/");
      }, 3000);
      
    } catch (error) {
      console.error("Order error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-center text-2xl font-bold mb-4 text-primary">Checkout</h1>
      <form
        className="space-y-6 bg-[#131313] p-6 rounded-xl text-white"
        onSubmit={handleSubmit}
      >
        {/* Cart Items Summary */}
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 bg-[#1a1a1a] rounded-xl p-4 items-center"
            >
              <div className="relative w-24 h-24 rounded overflow-hidden flex-shrink-0">
                <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-lg text-secondary">{item.name}</h3>
                <div className="flex items-center gap-3 mt-2">
                  <label className="text-sm text-gray-400">Size:</label>
                  <h3 className="font-medium text-lg text-secondary">{item.size}</h3>

                  <label className="text-sm text-gray-400">Qty:</label>
                  <h3 className="font-medium text-lg text-secondary">{item.quantity}</h3>
                </div>
                <p className="text-white font-semibold mt-2">
                  Price: ৳
                  {(item.discountedPrice || item.regularPrice) *
                    (item.quantity || 1)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Details */}
        <div className="space-y-4 pt-6 border-t border-gray-600">
          <div>
            <label className="text-sm block mb-1">Name</label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full p-2 rounded bg-[#222] border border-gray-600 text-sm text-white"
              placeholder="Your full name"
              name="customerName"
              required
            />
          </div>
          <div>
            <label className="text-sm block mb-1">Contact Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 rounded bg-[#222] border border-gray-600 text-sm text-white"
              placeholder="Phone number"
              name="phone"
              required
            />
          </div>
          <div>
            <label className="text-sm block mb-1">Email (optional)</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded bg-[#222] border border-gray-600 text-sm text-white"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="text-sm block mb-1">Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 rounded bg-[#222] border border-gray-600 text-sm text-white"
              placeholder="Your full address"
              name="address"
              required
            />
          </div>
        </div>

        {/* Delivery Location */}
        <div className="pt-6 border-t border-gray-600">
          <label className="text-sm block mb-2">Delivery Location</label>
          <div className="flex gap-6">
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="location"
                value="inside"
                checked={location === "inside"}
                onChange={() => setLocation("inside")}
              />
              Inside city (Delivery: ৳50)
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="location"
                value="outside"
                checked={location === "outside"}
                onChange={() => setLocation("outside")}
              />
              Outside city (Delivery: ৳100)
            </label>
          </div>

          {location === "outside" && (
            <div className="mt-4">
              <label className="text-sm block mb-1">District</label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full p-2 rounded bg-[#222] border border-gray-600 text-sm text-white"
                name="district"
                required
              >
                <option value="">Select district</option>
                {districts.map((dist) => (
                  <option key={dist} value={dist}>
                    {dist}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="mt-4">
            <label className="text-sm block mb-1">Police Station</label>
            <select
              value={policeStation}
              onChange={(e) => setPoliceStation(e.target.value)}
              className="w-full p-2 rounded bg-[#222] border border-gray-600 text-sm text-white"
              name="policeStation"
              required
            >
              <option value="">Select police station</option>
              {location === "inside"
                ? policeStationsForInside.map((ps) => (
                    <option key={ps} value={ps}>
                      {ps}
                    </option>
                  ))
                : policeStationsForDistrict.map((ps) => (
                    <option key={ps} value={ps}>
                      {ps}
                    </option>
                  ))}
            </select>
          </div>
        </div>

        {/* Price Summary */}
        <div className="pt-6 border-t border-gray-600 space-y-1 text-right">
          <p className="text-white font-semibold">
            Subtotal: ৳{subtotal.toFixed(2)}
          </p>
          <p className="text-white font-semibold">
            Delivery Charge: ৳{deliveryCharge.toFixed(2)}
          </p>
          <p className="text-primary text-xl font-bold">
            Total: ৳{totalPrice.toFixed(2)}
          </p>
        </div>

        <button
          type="submit"
          disabled={!customerName || !phone || !address || !policeStation}
          className="cursor-pointer w-full bg-primary text-black font-semibold py-3 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Place Order
        </button>
      </form>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#222] p-8 rounded-lg text-center max-w-sm w-full">
            <h2 className="text-2xl font-bold text-green-500 mb-4">Thank you!</h2>
            <p className="text-white">
              Your order has been placed successfully.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
