import React from "react";

export default function ConfirmationSection({ onConfirm }) {
  return (
    <section className="bg-white rounded-2xl shadow p-6">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h2 className="text-lg font-bold">Confirmation</h2>
          <div className="text-xs text-gray-400">Please review and confirm your rental details</div>
        </div>
        <span className="text-xs text-gray-400 font-semibold">Step 4 of 4</span>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          I agree with sending and receiving rental emails.
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          I agree with terms and conditions and privacy policy.
        </label>
      </div>
      <button
        className="w-full px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-base font-semibold"
        onClick={onConfirm}
      >Rent Now</button>
    </section>
  );
} 