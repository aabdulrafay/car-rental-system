import React from "react";

export default function RentalInfoForm() {
  return (
    <section className="bg-white rounded-2xl shadow p-6">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h2 className="text-lg font-bold">Rental Info</h2>
          <div className="text-xs text-gray-400">Please select your rental date</div>
        </div>
        <span className="text-xs text-gray-400 font-semibold">Step 2 of 4</span>
      </div>
      <div className="flex flex-col gap-4 mt-2">
        {/* Pick-Up */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <input type="radio" checked readOnly className="accent-blue-600" />
            <span className="font-semibold text-sm">Pick – Up</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Locations</label>
              <select className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50">
                <option>Select your city</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Date</label>
              <input type="date" className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50" />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Time</label>
              <input type="time" className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50" />
            </div>
          </div>
        </div>
        {/* Drop-Off */}
        <div className="mt-4">
          <div className="flex items-center gap-2 mb-2">
            <input type="radio" checked readOnly className="accent-blue-600" />
            <span className="font-semibold text-sm">Drop – Off</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Locations</label>
              <select className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50">
                <option>Select your city</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Date</label>
              <input type="date" className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50" />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Time</label>
              <input type="time" className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 