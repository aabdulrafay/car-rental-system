import CategoryCarRentClient from "@/components/CategoryCarRentClient";
import { cars } from "@/data/cars";

// Server component: no 'use client'
export default function CategoryPage() {
  return <CategoryCarRentClient cars={cars} />;
}