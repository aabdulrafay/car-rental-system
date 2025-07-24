import React, { useEffect } from "react";
import { CheckCircle, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

// SVG-based confetti burst using Lucide icons
function Confetti() {
  // Array of icon configs: [IconComponent, x, y, delay]
  const icons = [
    [Star, -60, -30, 0],
    [Sparkles, 60, -30, 0.1],
    [Star, -40, 40, 0.2],
    [Sparkles, 40, 40, 0.3],
    [Star, 0, -60, 0.15],
    [Sparkles, 0, 60, 0.25],
  ];
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10">
      {icons.map(([Icon, x, y, delay], i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 1], x, y }}
          transition={{ duration: 1.6, delay, times: [0, 0.3, 1] }}
          className="absolute"
        >
          <Icon className="w-7 h-7 text-blue-400 drop-shadow-md" />
        </motion.span>
      ))}
    </div>
  );
}

export default function PaymentSuccess({ onHome }) {
  useEffect(() => {
    if (onHome) {
      const timer = setTimeout(() => {
        onHome();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [onHome]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-2 py-8 relative">
      <Confetti />
      <motion.div
        className="w-full max-w-md bg-white/90 rounded-2xl shadow-xl flex flex-col items-center justify-center px-6 py-10 text-center relative"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Animated Check Icon */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: 'tween', ease: 'easeOut' }}
        >
          <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
        </motion.div>
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl font-bold mb-2 text-blue-700"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, type: 'tween', ease: 'easeOut' }}
          style={{ display: 'inline-block' }}
        >
          Payment Successful!
        </motion.h2>
        {/* Animated Message */}
        <motion.p
          className="text-lg text-gray-600 mb-6"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        >
          Thank you for your rental. A confirmation email has been sent to you.
        </motion.p>
        {/* Animated Button */}
        <motion.button
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-base font-semibold shadow-md"
          onClick={onHome}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
        >Go to Home</motion.button>
      </motion.div>
    </div>
  );
} 