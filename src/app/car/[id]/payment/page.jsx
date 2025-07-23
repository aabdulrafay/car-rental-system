"use client";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { cars } from "@/data/cars";
import { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import { siVisa, siMastercard, siPaypal, siBitcoin } from "simple-icons/icons";

export default function PaymentPage() {
  const params = useParams();
  const carId = parseInt(params.id, 10);
  const car = cars.find((c) => c.id === carId);

  // Placeholder state for form fields
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [promo, setPromo] = useState("");

  if (!car) return notFound();

  return (
    <main className="flex flex-col-reverse md:flex-row gap-6 max-w-7xl mx-auto px-2 py-6">
      {/* Left: Form Sections (on mobile, below summary) */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Billing Info */}
        <section className="bg-white rounded-2xl shadow p-6">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h2 className="text-lg font-bold">Billing Info</h2>
              <div className="text-xs text-gray-400">Please enter your billing info</div>
            </div>
            <span className="text-xs text-gray-400 font-semibold">Step 1 of 4</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div>
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Phone Number</label>
              <input className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50" placeholder="Phone number" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold mb-1">Address</label>
              <input className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50" placeholder="Address" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Town / City</label>
              <input className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50" placeholder="Town or city" />
            </div>
          </div>
        </section>
        {/* Rental Info */}
        <section className="bg-white rounded-2xl shadow p-6">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h2 className="text-lg font-bold">Rental Info</h2>
              <div className="text-xs text-gray-400">Please select your rental date</div>
            </div>
            <span className="text-xs text-gray-400 font-semibold">Step 2 of 4</span>
          </div>
          <div className="flex flex-col gap-4 mt-2">
            {/* Pick-Up */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <input type="radio" checked readOnly className="accent-blue-600" />
                <span className="font-semibold text-sm">Pick – Up</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Locations</label>
                  <select className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50">
                    <option>Select your city</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Date</label>
                  <input type="date" className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50" />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Time</label>
                  <input type="time" className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50" />
                </div>
              </div>
            </div>
            {/* Drop-Off */}
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-2">
                <input type="radio" checked readOnly className="accent-blue-600" />
                <span className="font-semibold text-sm">Drop – Off</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Locations</label>
                  <select className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50">
                    <option>Select your city</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Date</label>
                  <input type="date" className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50" />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Time</label>
                  <input type="time" className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Payment Method */}
        <section className="bg-white rounded-2xl shadow p-6">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h2 className="text-lg font-bold">Payment Method</h2>
              <div className="text-xs text-gray-400">Please enter your payment method</div>
            </div>
            <span className="text-xs text-gray-400 font-semibold">Step 3 of 4</span>
          </div>
          <div className="flex flex-col gap-3 mt-2">
            {/* Credit Card Option */}
            <label
              className={`flex items-center justify-between border rounded-lg px-4 py-3 cursor-pointer transition ${
                paymentMethod === "credit"
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "credit"}
                  onChange={() => setPaymentMethod("credit")}
                  className="accent-blue-600"
                />
                <span className="font-semibold text-sm">Credit Card</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path d={siVisa.path} fill="#1A1F71" />
                </svg>
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path d={siMastercard.path} fill="#EB001B" />
                </svg>
              </div>
            </label>
            {paymentMethod === "credit" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-4 rounded-lg border border-gray-100 mt-2">
                <div>
                  <label className="block text-sm font-semibold mb-1">Card Number</label>
                  <input className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50" placeholder="Card number" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Expiration Date</label>
                  <input className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50" placeholder="DD / MM / YY" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Card Holder</label>
                  <input className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50" placeholder="Card holder" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">CVC</label>
                  <input className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50" placeholder="CVC" />
                </div>
              </div>
            )}
            {/* PayPal Option */}
            <label
              className={`flex items-center justify-between border rounded-lg px-4 py-3 cursor-pointer transition ${
                paymentMethod === "paypal"
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "paypal"}
                  onChange={() => setPaymentMethod("paypal")}
                  className="accent-blue-600"
                />
                <span className="font-semibold text-sm">PayPal</span>
              </div>
              <svg width={28} height={28} viewBox="0 0 24 24" fill="none">
                <path d={siPaypal.path} fill="#003087" />
              </svg>
            </label>
            {/* Bitcoin Option */}
            <label
              className={`flex items-center justify-between border rounded-lg px-4 py-3 cursor-pointer transition ${
                paymentMethod === "bitcoin"
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "bitcoin"}
                  onChange={() => setPaymentMethod("bitcoin")}
                  className="accent-blue-600"
                />
                <span className="font-semibold text-sm">Bitcoin</span>
              </div>
              <svg width={28} height={28} viewBox="0 0 24 24" fill="none">
                <path d={siBitcoin.path} fill="#F7931A" />
              </svg>
            </label>
          </div>
        </section>
        {/* Confirmation */}
        <section className="bg-white rounded-2xl shadow p-6">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h2 className="text-lg font-bold">Confirmation</h2>
              <div className="text-xs text-gray-400">Please review and confirm your rental details</div>
            </div>
            <span className="text-xs text-gray-400 font-semibold">Step 4 of 4</span>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              I agree with sending and receiving rental emails.
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              I agree with terms and conditions and privacy policy.
            </label>
          </div>
          <button className="w-full px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-base font-semibold">Rent Now</button>
        </section>
      </div>
      {/* Right: Rental Summary (on mobile, on top) */}
      <div className="w-full md:w-96">
        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-bold mb-2">Rental Summary</h2>
          <div className="text-xs text-gray-400 mb-4">Prices may change depending on the length of the rental and the price of your rental car.</div>
          <div className="flex items-center gap-4 mb-4">
            <Image src={car.image} alt={car.name} width={80} height={40} className="rounded-lg object-contain" />
            <div>
              <div className="font-bold text-base">{car.name}</div>
              <div className="flex items-center gap-1 text-yellow-400 text-xs">
                {[...Array(4)].map((_, i) => <Star key={i} className="w-4 h-4" />)}
                <span className="text-gray-500 ml-2">440+ Reviewer</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span>Subtotal</span>
            <span>${car.price}.00</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span>Tax</span>
            <span>$0</span>
          </div>
          <div className="flex justify-between text-sm mb-2 gap-2">
            <input
              type="text"
              className="border border-gray-200 rounded-lg px-2 py-1 text-xs w-32"
              placeholder="Apply promo code"
              value={promo}
              onChange={e => setPromo(e.target.value)}
            />
            <button className="px-3 py-1 bg-gray-100 rounded text-xs font-semibold hover:bg-blue-600 hover:text-white transition">Apply now</button>
          </div>
          <div className="flex justify-between text-base font-bold mt-4">
            <span>Total Rental Price</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-gray-900">${car.price}.00</span>
          </div>
          <div className="text-xs text-gray-400 mt-2">Overall price and includes rental discount</div>
        </section>
      </div>
    </main>
  );
} 