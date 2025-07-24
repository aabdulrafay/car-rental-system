"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftCircle, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-2 py-8">
      <motion.div
        className="w-full max-w-md bg-white/90 rounded-2xl shadow-xl flex flex-col items-center justify-center px-6 py-10 text-center"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Animated Icon */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: [10, 0, 10], opacity: 1 }}
          transition={{ duration: 2.2, delay: 0.1, repeat: Infinity, repeatType: 'loop', type: 'tween', ease: 'easeInOut' }}
          className="mb-4"
        >
          <Search className="w-14 h-14 text-blue-200 mx-auto" />
        </motion.div>
        {/* Logo */}
        <motion.h1
          className="text-3xl font-bold text-blue-700 font-plus-jakarta mb-1"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          MORENT
        </motion.h1>
        {/* 404 Heading */}
        <motion.h2
          className="text-5xl font-extrabold text-gray-800 mb-3"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
        >
          404
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-7"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
        >
          Sorry, we couldn't find that page.<br />
          <span className="text-base text-gray-500">Try checking the URL or go back to where you were.</span>
        </motion.p>
        {/* Go Back Button */}
        <motion.button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 bg-blue-700 text-white px-5 py-3 rounded-full font-medium hover:bg-blue-800 transition shadow-md"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
        >
          <ArrowLeftCircle className="w-5 h-5" />
          Go Back
        </motion.button>
      </motion.div>
    </div>
  );
}
