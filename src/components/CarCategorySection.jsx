import CarCard from "./CarCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CarCategorySection({ title, cars, isSlider = false, viewAllLink = "/cars" }) {
  return (
    <section className="w-full mb-10">
      {/* Title + View All */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg text-gray-400 font-semibold">{title}</h2>
        <Link href={viewAllLink} className="text-sm font-semibold text-blue-600 hover:text-blue-500 flex items-center gap-1">
          View All <ArrowRight size={16} />
        </Link>
      </div>

      {/* Slider or Grid */}
      {isSlider ? (
        <>
          {/* Mobile Slider */}
          <div className="relative md:hidden">
            <div className="pointer-events-none absolute -left-1 top-0 h-full w-8 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
            <div className="pointer-events-none absolute -right-1 top-0 h-full w-6 bg-gradient-to-l from-white via-white/90 to-transparent z-10" />
            <div className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pr-2">
              {cars.map((car) => (
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
          <div className="hidden md:grid gap-6 grid-cols-[repeat(auto-fit,minmax(248px,1fr))]">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </>
      ) : (
        // Always-grid section
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(248px,1fr))]">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </section>
  );
}
