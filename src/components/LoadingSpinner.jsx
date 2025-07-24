"use client";
import { useEffect, useState } from "react";

export default function LoadingSpinner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-white">
        <div className="relative flex items-center justify-center" style={{ width: 80, height: 80 }}>
          {/* Spinning Circle */}
          <div className="absolute animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-blue-600"></div>
          {/* Logo in Center */}
          <div className="relative z-10 flex items-center justify-center">
            <span className="text-base font-bold text-blue-700 font-plus-jakarta select-none">MORENT</span>
          </div>
        </div>
      </div>
    );
  }

  // After 1.5 seconds, let Next.js handle the transition to the page
  return null;
} 