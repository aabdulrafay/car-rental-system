"use client";

import {
  Search,
  Heart,
  Bell,
  Settings,
  SlidersHorizontal,
} from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";

export default function Navbar() {
  // For search bar focus animation
  const searchInputRef = useRef(null);
  const searchControls = useAnimation();

  function handleFocus() {
    searchControls.start({ width: 540 });
  }
  function handleBlur() {
    searchControls.start({ width: 500 });
  }

  return (
    <nav className="bg-white px-8 md:px-16 py-4 flex items-center justify-between shadow-md z-30 relative">
      {/* Left Side: Logo + Search */}
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <a href="/">
          <motion.div
            className="mr-20 text-2xl font-bold text-blue-700 font-plus-jakarta"
            initial={{ opacity: 0, y: 16, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            MORENT
          </motion.div>
        </a>

        {/* Search Bar (not centered, wider) */}
        <motion.div
          className="hidden md:flex items-center bg-white rounded-full px-4 py-2 w-[500px] border border-gray-300"
          animate={searchControls}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={{ overflow: 'hidden' }}
        >
          <Search className="w-5 h-5 text-gray-500 mr-2" />
          <motion.input
            type="text"
            placeholder="Search something here"
            className="bg-transparent outline-none w-full"
            ref={searchInputRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            initial={false}
            animate={false}
            transition={false}
          />
          <SlidersHorizontal className="w-5 h-5 text-gray-500 ml-2" />
        </motion.div>
      </div>

      {/* Right Side: Icons + Profile */}
      <div className="flex items-center space-x-5 text-gray-600">
        <div className="hidden md:flex items-center space-x-3">
          <MotionIconCircle>
            <Heart className="w-4 h-4" />
          </MotionIconCircle>

          <div className="relative">
            <MotionIconCircle>
              <Bell className="w-4 h-4" />
            </MotionIconCircle>
            <motion.span
              className="absolute top-0 right-0 w-3 h-3 bg-red-600 rounded-full border-2 border-white"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, repeatType: 'loop', times: [0, 0.5, 1] }}
            ></motion.span>
          </div>

          <MotionIconCircle>
            <Settings className="w-4 h-4" />
          </MotionIconCircle>
        </div>

        {/* Profile Image */}
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-blue-700 cursor-pointer">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2IYhSn8Y9S9_HF3tVaYOepJBcrYcd809pBA&s"
            alt="Profile-Picture"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
}

// Reusable animated circle icon wrapper
function MotionIconCircle({ children }) {
  return (
    <motion.div
      className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 cursor-pointer hover:text-blue-700 hover:border-blue-700 transition"
      whileHover={{ scale: 1.13, color: '#2563eb', borderColor: '#2563eb' }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'tween', duration: 0.18 }}
    >
      {children}
    </motion.div>
  );
}
