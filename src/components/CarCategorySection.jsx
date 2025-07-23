"use client";

import CarCard from "./CarCard";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { useRef, useState } from "react";

export default function CarCategorySection({ title, cars, isSlider = false, viewAllLink = "/cars", maxCards }) {
  const displayCars = maxCards ? cars.slice(0, maxCards) : cars;
  const sliderRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Handler to check scroll position
  const handleScroll = () => {
    const el = sliderRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft + el.offsetWidth >= el.scrollWidth - 2);
  };

  return (
    <section className="w-full mb-8 sm:mb-10">
      {/* Title + View All */}
      <div className="flex justify-between items-center mb-4 px-2 sm:px-0">
        <h2 className="text-base sm:text-lg text-gray-400 font-semibold">{title}</h2>
        <Link href={viewAllLink} className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-500 flex items-center gap-1">
          View All <ArrowRight size={16} />
        </Link>
      </div>

      {displayCars.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center text-gray-500">
          <Search className="w-12 h-12 mb-4 text-blue-200" />
          <h3 className="text-lg font-bold text-blue-700 mb-2">No results found</h3>
          <p className="text-sm text-gray-400">Try adjusting your filters or search to find cars that match your criteria.</p>
        </div>
      ) : isSlider ? (
        <>
          {/* Mobile Slider */}
          <div className="relative md:hidden">
            {!atStart && (
              <div className="pointer-events-none absolute -left-1 top-0 h-full w-8 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
            )}
            {!atEnd && (
              <div className="pointer-events-none absolute -right-1 top-0 h-full w-6 bg-gradient-to-l from-white via-white/90 to-transparent z-10" />
            )}
            <div
              className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pr-2"
              ref={sliderRef}
              onScroll={handleScroll}
            >
              {displayCars.map((car) => (
                <div
                  key={car.id}
                  className="min-w-[248px] snap-start shrink-0"
                >
                  <CarCard car={car} />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid gap-4 md:gap-6 grid-cols-[repeat(auto-fit,minmax(248px,1fr))]">
            {displayCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </>
      ) : (
        // Always-grid section
        <div className="grid gap-4 md:gap-6 grid-cols-[repeat(auto-fit,minmax(248px,1fr))]">
          {displayCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </section>
  );
}
