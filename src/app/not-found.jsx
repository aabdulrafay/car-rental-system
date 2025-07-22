"use client";

import Link from "next/link";
import { ArrowLeftCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-12 text-center">
      {/* Logo */}
      <h1 className="text-4xl font-bold text-blue-700 font-plus-jakarta mb-2">
        MORENT
      </h1>

      {/* 404 Heading */}
      <h2 className="text-6xl font-extrabold text-gray-800 mb-4">404</h2>
      <p className="text-xl text-gray-600 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>

      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-blue-700 text-white px-5 py-3 rounded-full font-medium hover:bg-blue-800 transition"
      >
        <ArrowLeftCircle className="w-5 h-5" />
        Go back to home
      </Link>
    </div>
  );
}
