"use client";
import Image from "next/image";

export default function DetailsRental() {
  return (
    <section className="bg-white rounded-2xl shadow p-6 flex flex-col gap-6">
      <h2 className="text-lg font-bold mb-2">Details Rental</h2>
      {/* Map Placeholder */}
      <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
        {/* More realistic dummy map SVG */}
        <svg width="100%" height="100%" viewBox="0 0 320 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="320" height="100" rx="12" fill="#E5EFFF" />
          {/* Water/river */}
          <path d="M0 60 Q80 80 160 60 T320 60" stroke="#B4D8F8" strokeWidth="16" fill="none" />
          {/* Roads */}
          <path d="M40 90 Q100 40 180 80 T300 30" stroke="#3563E9" strokeWidth="4" fill="none" />
          <path d="M60 20 Q120 60 200 20 T320 80" stroke="#90A3BF" strokeWidth="3" fill="none" />
          {/* Parks/blocks */}
          <rect x="60" y="30" width="30" height="18" fill="#B7E4C7" rx="4" />
          <rect x="200" y="60" width="40" height="20" fill="#B7E4C7" rx="4" />
          {/* Route */}
          <path d="M30 80 Q60 40 120 60 T210 40 Q250 80 290 20" stroke="#3563E9" strokeWidth="4" fill="none" />
          {/* Start/End points */}
          <circle cx="30" cy="80" r="6" fill="#54A6FF" />
          <circle cx="290" cy="20" r="6" fill="#54A6FF" />
        </svg>
      </div>
      {/* Car Info */}
      <div className="flex items-center gap-4 mb-4">
        <Image src="/car1.png" alt="Nissan GT-R" width={80} height={40} className="rounded-lg object-contain" />
        <div>
          <div className="font-bold text-base">Nissan GT – R</div>
          <div className="text-xs text-gray-500">Sport Car</div>
        </div>
        <span className="ml-auto text-xs text-gray-400 font-semibold">#9761</span>
      </div>
      {/* Pick-Up & Drop-Off */}
      <div className="flex flex-col gap-2 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <input type="radio" checked readOnly className="accent-blue-600" />
            <span className="font-semibold text-sm text-black">Pick – Up</span>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-1 text-xs text-gray-700">
            <div>
              <div className="text-gray-400">Locations</div>
              Kota Semarang
            </div>
            <div>
              <div className="text-gray-400">Date</div>
              20 July 2022
            </div>
            <div>
              <div className="text-gray-400">Time</div>
              07.00
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1 mt-2">
            <input type="radio" checked readOnly className="accent-blue-600" />
            <span className="font-semibold text-sm text-black">Drop – Off</span>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-1 text-xs text-gray-700">
            <div>
              <div className="text-gray-400">Locations</div>
              Kota Semarang
            </div>
            <div>
              <div className="text-gray-400">Date</div>
              21 July 2022
            </div>
            <div>
              <div className="text-gray-400">Time</div>
              01.00
            </div>
          </div>
        </div>
      </div>
      {/* Total Price */}
      <div className="flex justify-between items-center border-t pt-4 mt-2">
        <div>
          <div className="text-xs text-gray-400">Overall price and includes rental discount</div>
          <div className="font-bold text-base mt-1">Total Rental Price</div>
        </div>
        <div className="text-2xl font-extrabold text-gray-900">$80.00</div>
      </div>
    </section>
  );
} 