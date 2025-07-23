"use client";
import { useParams, notFound, useRouter } from "next/navigation";
import { cars } from "@/data/cars";
import { useState, useEffect } from "react";
import BillingInfoForm from "@/components/BillingInfoForm";
import RentalInfoForm from "@/components/RentalInfoForm";
import PaymentMethodSelector from "@/components/PaymentMethodSelector";
import ConfirmationSection from "@/components/ConfirmationSection";
import RentalSummary from "@/components/RentalSummary";
import PaymentSuccess from "@/components/PaymentSuccess";

export default function PaymentPage() {
  const params = useParams();
  const carId = parseInt(params.id, 10);
  const car = cars.find((c) => c.id === carId);

  // Placeholder state for form fields
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [promo, setPromo] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const router = useRouter();

  if (!car) return notFound();

  useEffect(() => {
    if (showConfirmation) {
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
      </div>
      {/* Right: Rental Summary (on mobile, on top) */}
      <div className="w-full md:w-96">
        <RentalSummary car={car} promo={promo} setPromo={setPromo} />
      </div>
    </main>
  );
} 