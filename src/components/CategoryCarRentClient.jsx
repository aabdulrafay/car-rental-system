"use client";
import { useState } from "react";
import FilterSidebar from "@/components/FilterSidebar";
import BookingForm from "@/components/BookingForm";
import CarCard from "@/components/CarCard";

export default function CategoryCarRentClient({ cars }) {
  // Filter state
  const [filters, setFilters] = useState({
    types: [],
    capacity: "",
    maxPrice: 100,
  });

  // Filtering logic
  const filteredCars = cars.filter(car => {
    // Type filter
    const typeMatch = filters.types.length === 0 || (car.type && filters.types.includes(car.type));
    // Capacity filter (match string, e.g. "4 People")
    const capacityMatch = !filters.capacity || (car.capacity && car.capacity.startsWith(filters.capacity));
    // Price filter
    const priceMatch = car.price <= filters.maxPrice;
    return typeMatch && capacityMatch && priceMatch;
  });

  return (
    <main className="w-full flex-1 flex min-h-screen">
      <div className="flex flex-col md:flex-row gap-6 items-stretch w-full min-h-screen">
        {/* Sidebar */}
        <aside
          className="w-full md:w-64 min-w-[calc(100vw-2rem)] sm:min-w-[350px] bg-white h-full z-10 flex flex-col"
        >
          <FilterSidebar filters={filters} setFilters={setFilters} />
        </aside>
        {/* Main Content */}
        <div className="flex-1 w-full flex flex-col items-center h-full py-6 space-y-6 px-4 md:px-8">
          {/* Booking Form */}
          <div className="flex justify-center w-full">
            <BookingForm />
          </div>
          {/* Car Listing */}
          <div className="w-full flex justify-center">
            {filteredCars.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center text-gray-500 w-full">
                <svg className="w-12 h-12 mb-4 text-blue-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
                <h3 className="text-lg font-bold text-blue-700 mb-2">No results found</h3>
                <p className="text-sm text-gray-400">Try adjusting your filters or search to find cars that match your criteria.</p>
              </div>
            ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCars.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>
            )}
          </div>
          {/* Show More Section */}
          <section className="relative w-full mt-6 flex justify-center">
            <div className="flex justify-center">
              <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Show more car
              </button>
            </div>
            <span className="absolute right-0 bottom-2 text-gray-400 text-sm font-semibold">
              120 Car
            </span>
          </section>
        </div>
      </div>
    </main>
  );
} 