"use client"

import { Heart, Fuel, Users, Gauge } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CarCard({ car }) {
  const router = useRouter();
  const hasDiscount = car.discountPrice && car.discountPrice < car.price;
  const [isFav, setIsFav] = useState(false);

  return (
    <div
      className="relative min-w-[248px] max-w-sm w-full bg-white rounded-2xl shadow-md overflow-hidden group transition hover:shadow-lg cursor-pointer"
      onClick={() => router.push(`/car/${car.id}`)}
      tabIndex={0}
      role="button"
    >
      {/* Favorite Icon */}
      <span
        className="absolute top-4 right-4 z-10 text-gray-500 hover:text-red-500 transition cursor-pointer"
        onClick={e => {
          e.stopPropagation();
          setIsFav(fav => !fav);
        }}
      >
        <Heart className={`w-5 h-5 transition ${isFav ? 'text-red-500' : 'text-gray-500'}`} fill={isFav ? '#ef4444' : 'none'} />
      </span>
      {/* Card Content */}
      <div>
        {/* Title & Type */}
        <div className="pt-4 px-4">
          <h3 className="text-lg font-bold text-gray-900">{car.name}</h3>
          <p className="text-sm text-gray-400 font-semibold">{car.type}</p>
        </div>
        {/* Car Image */}
        <div className="p-4 pb-0">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-36 object-contain"
          />
        </div>
        {/* Car Info */}
        <div className="p-4 space-y-2">
          {/* Specs */}
          <div className="flex justify-between text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" /> {car.seats} Seats
            </span>
            <span className="flex items-center gap-1">
              <Fuel className="w-4 h-4" /> {car.fuel}
            </span>
            <span className="flex items-center gap-1">
              <Gauge className="w-4 h-4" /> {car.mileage}km
            </span>
          </div>
          {/* Pricing & Rent Button */}
          <div className="flex justify-between items-end pt-2">
            <div className="text-blue-700 font-bold text-lg">
              {hasDiscount ? (
                <>
                  ${car.discountPrice}
                  <span className="text-gray-500 text-sm font-normal">/day</span>
                  <div className="text-sm text-gray-400 line-through">
                    ${car.price}
                  </div>
                </>
              ) : (
                <>
                  ${car.price}
                  <span className="text-gray-500 text-sm font-normal">/day</span>
                </>
              )}
            </div>
            {/* Rent Now Button */}
            <button
              className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition cursor-pointer"
              onClick={e => {
                e.stopPropagation();
                router.push(`/car/${car.id}/payment`);
              }}
            >
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
