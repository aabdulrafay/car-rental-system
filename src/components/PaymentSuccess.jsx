import React from "react";
import { CheckCircle } from "lucide-react";

export default function PaymentSuccess({ onHome }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-12 text-center">
      <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
      <h2 className="text-3xl font-bold mb-2 text-gray-800">Payment Successful!</h2>
      <p className="text-lg text-gray-600 mb-6">Thank you for your rental. A confirmation email has been sent to you.</p>
      <button
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-base font-semibold"
        onClick={onHome}
      >Go to Home</button>
    </div>
  );
} 