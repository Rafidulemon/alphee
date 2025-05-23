"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MdDeleteForever } from "react-icons/md";
import { useCartStore } from "../store/cartStore";

export default function CartPage() {
  const cartItems = useCartStore((state) => state.items);
  console.log(cartItems);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateSize = useCartStore((state) => state.updateSize);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0
  );

  const allSizesSelected = cartItems.every((item) => !!item.size);

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="min-h-screen bg-[#0e0e0e] text-white px-4 sm:px-8 py-10">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <Image
              src="/images/empty_cart.png"
              alt="Empty Cart"
              width={500}
              height={500}
              className="object-contain"
            />
            <p className="text-white text-lg md:text-2xl mt-4">
              Your cart is empty.
            </p>
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-[#0e0e0e] text-white px-4 sm:px-8 py-10">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold mb-8">Your Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Items List */}
              <div className="lg:col-span-2 space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 bg-[#1a1a1a] rounded-xl p-4 relative"
                  >
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded overflow-hidden">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-medium text-sm sm:text-base text-secondary">
                        {item.name}
                      </h3>
                      <div className="text-sm text-gray-400">
                        ৳{item.discountedPrice} x {item.quantity} ={" "}
                        <span className="text-white font-semibold">
                          ৳{item.discountedPrice * item.quantity}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <label className="text-sm text-gray-400">Qty:</label>
                        <input
                          type="number"
                          value={item.quantity}
                          min={1}
                          onChange={(e) =>
                            updateQuantity(item.id, parseInt(e.target.value))
                          }
                          className="w-16 text-center bg-transparent border border-gray-600 rounded py-1 px-2"
                        />
                      </div>

                      {/* Size Selection */}
                      <div className="flex items-center gap-2 mt-2">
                        <label className="text-sm text-gray-400">Size:</label>
                        <select
                          value={item.size ?? ""}
                          onChange={(e) => updateSize(item.id, e.target.value)}
                          className="cursor-pointer bg-black border border-gray-600 rounded py-1 px-2 text-sm text-white"
                        >
                          <option value="" disabled className="bg-black">
                            Select size
                          </option>
                          {item.availableSizes?.map((size) => (
                            <option
                              key={size}
                              value={size}
                              className="bg-black"
                            >
                              {size}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="cursor-pointer absolute top-2 right-2 text-gray-400 hover:text-red-500"
                    >
                      <MdDeleteForever size={20} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="bg-[#1a1a1a] rounded-xl p-6 space-y-4 h-fit">
                <h2 className="text-lg font-semibold">Order Summary</h2>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Subtotal</span>
                  <span>৳{subtotal}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Discount</span>
                  <span>-৳0</span>
                </div>
                <div className="border-t border-gray-700 pt-4 flex justify-between text-base font-medium">
                  <span>Total</span>
                  <span className="text-primary">৳{subtotal}</span>
                </div>

                {!allSizesSelected && (
                  <p className="text-sm text-red-500">
                    Please select sizes for all items to proceed.
                  </p>
                )}

                <Link href={allSizesSelected ? "/checkout" : "#"}>
                  <button
                    disabled={!allSizesSelected}
                    className={`cursor-pointer w-full flex justify-center items-center gap-2 ${
                      allSizesSelected
                        ? "bg-primary hover:bg-[#c1a160]"
                        : "bg-gray-600 cursor-not-allowed"
                    } text-white text-sm py-2 px-4 rounded transition`}
                  >
                    Proceed to Checkout
                    <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
