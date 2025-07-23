import React from "react";

export default function BillingInfoForm() {
  return (
    <section className="bg-white rounded-2xl shadow p-6">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h2 className="text-lg font-bold">Billing Info</h2>
          <div className="text-xs text-gray-400">Please enter your billing info</div>
        </div>
        <span className="text-xs text-gray-400 font-semibold">Step 1 of 4</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
        <div>
          <label className="block text-sm font-semibold mb-1">Name</label>
          <input className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Phone Number</label>
          <input className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50" placeholder="Phone number" />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold mb-1">Address</label>
          <input className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50" placeholder="Address" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Town / City</label>
          <input className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50" placeholder="Town or city" />
        </div>
      </div>
    </section>
  );
} 