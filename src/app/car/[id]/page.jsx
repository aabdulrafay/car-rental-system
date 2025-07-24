import { notFound } from "next/navigation";
import { cars, recommendedCars } from "@/data/cars";
import CarDetailClient from "@/components/CarDetailClient";

export default async function CarDetailPage({ params }) {
  const { id } = await params;
  const carId = parseInt(id, 10);
  const car = cars.find((c) => c.id === carId);
  if (!car) return notFound();
  return (
    <CarDetailClient car={car} cars={cars} recommendedCars={recommendedCars} />
  );
}