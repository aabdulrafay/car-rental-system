"use client";
import { useState } from "react";
import Image from "next/image";
import FilterSidebar from "@/components/FilterSidebar";
import ReviewList from "@/components/ReviewList";
import { Heart } from "lucide-react";
import CarCategorySection from "@/components/CarCategorySection";

export default function CarDetailClient({ car, cars, recommendedCars }) {
  // Filter state for recent cars
  const [filters, setFilters] = useState({
    types: [],
    capacity: "",
    maxPrice: 100,
  });

  // Filtering logic for recent cars (exclude current car)
  const filteredCars = cars.filter(c => {
    if (c.id === car.id) return false;
    const typeMatch = filters.types.length === 0 || (c.type && filters.types.includes(c.type));
    const capacityMatch = !filters.capacity || (c.capacity && c.capacity.startsWith(filters.capacity));
    const priceMatch = c.price <= filters.maxPrice;
    return typeMatch && capacityMatch && priceMatch;
  });

  // Filtering logic for recommended cars
  const filteredRecommended = recommendedCars.filter(c => {
    const typeMatch = filters.types.length === 0 || (c.type && filters.types.includes(c.type));
    const capacityMatch = !filters.capacity || (c.capacity && c.capacity.startsWith(filters.capacity));
    const priceMatch = c.price <= filters.maxPrice;
    return typeMatch && capacityMatch && priceMatch;
  });

  const [isFav, setIsFav] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock data for Figma-style detail
  const description =
    "NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the 'race track'.";
  const headline = "Sports car with the best design and acceleration";
  const subheadline = "Safety and comfort while driving a futuristic and elegant sports car";
  const rating = 4;
  const reviewerCount = 440;

  return (
    <main className="w-full flex-1 flex min-h-screen overflow-x-hidden">
      <div className="flex flex-col md:flex-row gap-6 items-stretch w-full min-h-screen">
        {/* Sidebar */}
        <aside className="w-full md:w-64 md:min-w-[220px] md:max-w-xs lg:min-w-[260px] lg:max-w-sm bg-white h-full z-10 flex flex-col">
          <FilterSidebar filters={filters} setFilters={setFilters} />
        </aside>
        {/* Main Content */}
        <div className="flex-1 min-w-0 w-full flex flex-col items-center h-full py-6 space-y-6 px-4 md:px-8">
          {/* Car Detail Top Section (Figma style) */}
          <section className="w-full max-w-4xl flex flex-col gap-6 mb-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Left: Big Card with background, headline, car image, gallery */}
              <div className="flex-1 flex flex-col gap-4 min-w-0">
                <div className="bg-blue-600 rounded-2xl p-4 sm:p-6 flex flex-col justify-between min-h-[220px] sm:min-h-[300px] relative overflow-hidden">
                  <h2 className="text-white text-lg sm:text-2xl font-bold mb-2">{headline}</h2>
                  <p className="text-blue-100 text-xs sm:text-base mb-4">{subheadline}</p>
                  <div className="flex justify-center items-center flex-1 w-full">
                    <Image
                      src={car.gallery?.[selectedImage] || car.image}
                      alt={car.name}
                      width={340}
                      height={160}
                      className="object-contain w-[220px] h-[100px] sm:w-[340px] sm:h-[160px]"
                    />
                  </div>
                </div>
                {/* Gallery Thumbnails */}
                <div className="flex gap-2 sm:gap-4 mt-2 overflow-x-auto pb-2">
                  {car.gallery?.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`rounded-lg min-w-[80px] sm:min-w-[120px] transition p-0 border-none bg-transparent outline-none`}
                      tabIndex={0}
                      style={{ outline: 'none' }}
                    >
                      <div className={`rounded-lg transition ${selectedImage === i ? 'bg-blue-600 p-1' : 'bg-white'}`}>
                        <div className={`rounded-md transition ${selectedImage === i ? 'bg-white p-1' : ''}`}>
                          <Image src={img} alt="Gallery" width={120} height={80} className="object-cover w-full h-[60px] sm:h-[80px]" />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              {/* Right: White Card with car info */}
              <div className="w-full max-w-[500px] mx-auto md:flex-1 bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow flex flex-col justify-between min-h-[220px] sm:min-h-[300px] mt-4 md:mt-0 md:items-end md:text-right">
                <div className="w-full">
                  <div className="flex items-center justify-between mb-2 w-full">
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-900">{car.name}</h3>
                    <span onClick={() => setIsFav(fav => !fav)} className="cursor-pointer">
                      <Heart className={`w-6 h-6 sm:w-7 sm:h-7 transition ${isFav ? 'text-red-500' : 'text-gray-500'} hover:text-red-500`} fill={isFav ? '#ef4444' : 'none'} />
                    </span>
                  </div>
                  {/* Centered rating and description */}
                  <div className="flex flex-col items-center mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-yellow-400 text-base sm:text-lg">{'★'.repeat(rating)}{'☆'.repeat(5-rating)}</span>
                      <span className="text-gray-500 text-xs sm:text-sm font-medium">{reviewerCount}+ Reviewer</span>
                    </div>
                    <p className="text-gray-500 text-justify text-xs sm:text-base mb-0 max-w-xl">{description}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-gray-500 text-sm mb-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <span className="font-medium">Type Car</span>
                      <span className="font-bold text-gray-900">{car.type || '-'}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <span className="font-medium">Capacity</span>
                      <span className="font-bold text-gray-900">{car.capacity ? car.capacity.replace('People', 'Person') : '-'}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <span className="font-medium">Steering</span>
                      <span className="font-bold text-gray-900">{car.transmission || '-'}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <span className="font-medium">Gasoline</span>
                      <span className="font-bold text-gray-900">{car.fuel || '-'}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 gap-2 w-full">
                  <div>
                    <span className="text-xl sm:text-2xl font-bold text-gray-900">${car.price}.00</span>
                    <span className="text-gray-400 text-base sm:text-lg font-semibold ml-2 line-through">${car.price + 20}.00</span>
                    <span className="text-gray-400 text-xs sm:text-sm ml-1">/ days</span>
                  </div>
                  <button
                    className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-base font-semibold"
                    onClick={() => window.location.assign(`/car/${car.id}/payment`)}
                  >
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* Reviews Section (below car detail, Figma style) */}
          <ReviewList reviews={car.reviews} />
          {/* Recent Cars Section */}
          <CarCategorySection title="Recent Cars" cars={filteredCars} viewAllLink="/category-car-rent" isSlider={true} maxCards={3} />
          {/* Recommended Cars Section */}
          <CarCategorySection title="Recommended Cars" cars={filteredRecommended} viewAllLink="/category-car-rent" isSlider={true} maxCards={3} />
        </div>
      </div>
    </main>
  );
} 