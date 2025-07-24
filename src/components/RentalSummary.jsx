import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function RentalSummary({ car, promo, setPromo }) {
  return (
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
        <motion.span
          className="text-2xl sm:text-3xl font-extrabold text-gray-900"
          initial={{ scale: 0.9, color: '#2563eb', opacity: 0 }}
          animate={{ scale: [1.1, 1], color: ['#2563eb', '#111827', '#2563eb'], opacity: 1 }}
          transition={{ duration: 1, times: [0, 0.7, 1] }}
          key={car.price}
        >
          ${car.price}.00
        </motion.span>
      </div>
      <div className="text-xs text-gray-400 mt-2">Overall price and includes rental discount</div>
    </section>
  );
} 