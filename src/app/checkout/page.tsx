"use client";

import { useState } from "react";
import { CreditCard, Truck, WalletCards } from "lucide-react";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/order-confirmation");
    }, 2000); // Simulate submission delay
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white px-4 sm:px-8 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column - Shipping Info */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Shipping Information
          </h2>

          {/* Shipping Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400">Full Name</label>
              <input
                type="text"
                name="name"
                value={shippingInfo.name}
                onChange={handleChange}
                className="w-full text-sm bg-[#1a1a1a] text-white border border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400">
                Shipping Address
              </label>
              <input
                type="text"
                name="address"
                value={shippingInfo.address}
                onChange={handleChange}
                className="w-full text-sm bg-[#1a1a1a] text-white border border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your address"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={shippingInfo.phone}
                onChange={handleChange}
                className="w-full text-sm bg-[#1a1a1a] text-white border border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Payment Info */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Payment Method</h2>

          {/* Payment Method Selection */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400">
                Choose Payment Method
              </label>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="creditCard"
                    checked={paymentMethod === "creditCard"}
                    onChange={handlePaymentChange}
                    className="text-primary"
                  />
                  <CreditCard size={20} />
                  Credit Card
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="creditCard"
                    checked={paymentMethod === "creditCard"}
                    onChange={handlePaymentChange}
                    className="text-primary"
                  />
                  <WalletCards size={20} />
                  Cash On Delivery
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-[#1a1a1a] p-4 rounded-xl">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between text-sm text-gray-400">
              <span>Subtotal</span>
              <span>৳2500</span>
            </div>
            <div className="flex justify-between text-sm text-gray-400">
              <span>Shipping</span>
              <span>৳100</span>
            </div>
            <div className="border-t border-gray-700 pt-4 flex justify-between text-lg font-medium">
              <span>Total</span>
              <span className="text-primary">৳2600</span>
            </div>
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-[#c2a265] text-white text-sm py-3 rounded-xl transition flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <span>Processing...</span>
            ) : (
              <>
                Confirm Order
                <Truck size={20} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
