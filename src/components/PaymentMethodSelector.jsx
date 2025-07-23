import React from "react";
import { siVisa, siMastercard, siPaypal, siBitcoin } from "simple-icons/icons";

export default function PaymentMethodSelector({ paymentMethod, setPaymentMethod }) {
  return (
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
  );
} 