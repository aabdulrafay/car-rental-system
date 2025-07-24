"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import BillingInfoForm from "@/components/BillingInfoForm";
import RentalInfoForm from "@/components/RentalInfoForm";
import PaymentMethodSelector from "@/components/PaymentMethodSelector";
import ConfirmationSection from "@/components/ConfirmationSection";
import RentalSummary from "@/components/RentalSummary";
import PaymentSuccess from "@/components/PaymentSuccess";

export default function PaymentPageClient({ car }) {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [promo, setPromo] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (showConfirmation) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const timer = setTimeout(() => {
        router.push("/");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showConfirmation, router]);

  if (showConfirmation) {
    return <PaymentSuccess onHome={() => router.push("/")} />;
  }

  return (
    <main className="flex flex-col-reverse md:flex-row gap-6 max-w-7xl mx-auto px-2 py-6">
      {/* Left: Form Sections (on mobile, below summary) */}
      <div className="flex-1 flex flex-col gap-6">
        <BillingInfoForm />
        <RentalInfoForm />
        <PaymentMethodSelector paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
        <ConfirmationSection onConfirm={() => setShowConfirmation(true)} />
        {/* Security Info Section (moved below confirmation) */}
        <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
          {/* Shield Icon */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1"><path d="M16 28C16 28 26 23.3333 26 16V8L16 4L6 8V16C6 23.3333 16 28 16 28Z" stroke="#3563E9" strokeWidth="2" strokeLinejoin="round"/><path d="M12 16L15 19L20 14" stroke="#3563E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <div>
            <div className="font-semibold text-base text-gray-900 mb-1">All your data are safe</div>
            <div className="text-sm text-gray-400">We are using the most advanced security to provide you the best experience ever.</div>
          </div>
        </div>
      </div>
      {/* Right: Rental Summary (on mobile, on top) */}
      <div className="w-full md:w-96">
        <RentalSummary car={car} promo={promo} setPromo={setPromo} />
      </div>
    </main>
  );
} 