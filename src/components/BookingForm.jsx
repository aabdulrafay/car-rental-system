import { ArrowUpDown } from 'lucide-react';

export default function BookingForm() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
      
      {/* Pick-Up Section */}
      <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md w-full md:w-[48%] gap-4">
        <div className="w-full flex items-center">
          <div className="w-2 h-2 rounded-full bg-blue-800 border-[2px] border-sky-200 border-opacity-30 mr-1"></div>
          <label className="text-sm font-semibold text-gray-700">Pick - Up</label>
        </div>
        <SelectGroup />
      </div>

      {/* Mobile Switch Icon - positioned between cards */}
      <div className="block md:hidden absolute left-1/2 top-[50%] translate-x-[-50%] -translate-y-1/2 z-10">
        <div className="bg-blue-600 text-white p-3 rounded-md shadow-md hover:scale-105 transition-transform cursor-pointer">
          <ArrowUpDown />
        </div>
      </div>

      {/* Desktop Switch Icon */}
      <div className="hidden md:flex md:flex-col items-center justify-center">
        <div className="bg-blue-600 text-white p-3 rounded-md shadow-md hover:scale-105 transition-transform cursor-pointer">
          <ArrowUpDown />
        </div>
      </div>

      {/* Drop-Off Section */}
      <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md w-full md:w-[48%] gap-4 ">
        <div className="w-full flex items-center">
          <div className="w-2 h-2 rounded-full bg-blue-800 border-[2px] border-sky-200 border-opacity-30 mr-1"></div>
          <label className="text-sm font-semibold text-gray-700">Drop - Off</label>
        </div>
        <SelectGroup />
      </div>
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
