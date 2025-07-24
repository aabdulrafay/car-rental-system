import { notFound } from "next/navigation";
import { cars } from "@/data/cars";
import PaymentPageClient from "@/components/PaymentPageClient";

export default async function PaymentPage({ params }) {
  const { id } = await params;
  const carId = parseInt(id, 10);
  const car = cars.find((c) => c.id === carId);

  if (!car) return notFound();

  // Move all interactive/payment logic to PaymentPageClient
  return <PaymentPageClient car={car} />;
} 