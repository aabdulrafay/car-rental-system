"use client";
import { ArrowUpDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BookingForm() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Pick-Up Section */}
      <motion.div
        className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md w-full md:w-[48%] gap-4"
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="w-full flex items-center">
          <input type="radio" checked readOnly className="accent-blue-600 mr-2" />
          <span className="text-sm font-bold text-black">Pick - Up</span>
        </div>
        <SelectGroup />
      </motion.div>

      {/* Mobile Switch Icon - positioned between cards */}
      <div className="block md:hidden absolute left-1/2 top-[50%] translate-x-[-50%] -translate-y-1/2 z-10">
        <motion.div
          className="bg-blue-600 text-white p-3 rounded-md shadow-md hover:scale-105 transition-transform cursor-pointer"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: [ -10, 0, -5, 0 ], opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', times: [0, 0.5, 0.8, 1] }}
          whileHover={{ scale: 1.13 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUpDown />
        </motion.div>
      </div>

      {/* Desktop Switch Icon */}
      <div className="hidden md:flex md:flex-col items-center justify-center">
        <motion.div
          className="bg-blue-600 text-white p-3 rounded-md shadow-md hover:scale-105 transition-transform cursor-pointer"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: [ -10, 0, -5, 0 ], opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', times: [0, 0.5, 0.8, 1] }}
          whileHover={{ scale: 1.13 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUpDown />
        </motion.div>
      </div>

      {/* Drop-Off Section */}
      <motion.div
        className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md w-full md:w-[48%] gap-4 "
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
      >
        <div className="w-full flex items-center">
          <input type="radio" checked readOnly className="accent-blue-600 mr-2" />
          <span className="text-sm font-bold text-black">Drop - Off</span>
        </div>
        <SelectGroup />
      </motion.div>
    </section>
  );
}

function SelectGroup() {
  return (
    <div className="flex flex-wrap gap-3 w-full">
      <div className="flex-1 min-w-[147px] basis-0">
        <label className="block text-xs text-black font-bold mb-1">Location</label>
        <select className="w-full rounded-md px-3 py-2 text-sm focus:outline-none">
          <option>Select your city</option>
        </select>
      </div>

      <div className="flex-1 min-w-[147px] basis-0 border-gray-200 border-x-2 px-3">
        <label className="block text-xs text-black font-bold mb-1">Date</label>
        <input
          type="date"
          className="w-full rounded-md px-3 py-2 text-sm focus:outline-none"
        />
      </div>

      <div className="flex-1 min-w-[118px] basis-0">
        <label className="block text-xs text-black font-bold mb-1">Time</label>
        <input
          type="time"
          className="w-full rounded-md px-3 py-2 text-sm focus:outline-none"
        />
      </div>
    </div>
  );
}
