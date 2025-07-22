import HeroCard from "@/components/HeroCard";
import BookingForm from "@/components/BookingForm";
import CarCategorySection from "@/components/CarCategorySection";
import { popularCars, recommendedCars } from "@/data/cars";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-2 md:px-4 lg:px-6 py-6 gap-10 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row flex-wrap gap-2 w-full justify-between items-center">
        <HeroCard
          title="The Best Platform for Car Rental"
          desc="Ease of doing a car rental safely and reliably. Of course at a low price."
          btnText="Rental Car"
          bgColor="#54A6FF"
          btnBgColor="#3563E9"
          image="/car1.png"
        />

        <HeroCard
          title="Easy way to rent a car at a low price"
          desc="Providing cheap car rental services and safe and comfortable facilities."
          btnText="Rental Car"
          bgColor="#3563E9"
          btnBgColor="#54A6FF"
          image="/car2.png"
        />
      </section>

      {/* Booking Section */}
      <BookingForm />

      {/* Car Category Sections */}
      <CarCategorySection
        title="Popular Car"
        cars={popularCars}
        isSlider={true}
        viewAllLink="/popular"
      />
      <CarCategorySection
        title="Recommendation Car"
        cars={recommendedCars}
        viewAllLink="/recommended"
      />

      <section className="w-full relative mt-6 px-4 sm:px-6 lg:px-8">
        {/* Centered Button */}
        <div className="flex justify-center">
          <button className="px-6 py-2 bg-blue-600 text-white text-sm sm:text-base rounded hover:bg-blue-700 transition">
            Show more car
          </button>
        </div>

        {/* Bottom-right Label */}
        <span className="hidden sm:inline absolute right-4 bottom-2 text-gray-400 text-xs sm:text-sm font-semibold">
          120 Car
        </span>
      </section>
    </main>
  );
}
