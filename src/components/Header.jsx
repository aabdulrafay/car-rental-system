"use client";
import { X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [show, setShow] = useState(true);

  // Format today's date
  const today = new Date();
  const updatedDate = today.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (!show) return null;

  return (
    <div className="w-full h-auto bg-white text-black px-4 md:px-6 text-sm font-sf-pro">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0 py-4">
        {/* Left Section: Button + Title */}
        <div className="flex items-center">
          <button onClick={() => setShow(false)} className="font-bold mr-2">
            <X size={24} color="#7C5CFC" />
          </button>
          <span className="text-xl md:text-3xl font-bold">
            High Fidelity Dashboard - Home Rent
          </span>
        </div>

        {/* Right Section: Date */}
        <span className="text-gray-500 self-start md:self-center">
          Latest Updated: <strong className="text-black">{updatedDate}</strong>
        </span>
      </div>
    </div>
  );
}
