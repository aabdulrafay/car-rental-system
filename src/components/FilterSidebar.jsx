"use client";

import { cars } from "@/data/cars";

export default function FilterSidebar({ filters, setFilters }) {
  // Handler for type (checkbox)
  const handleTypeChange = (type) => {
    if (filters.types.includes(type)) {
      setFilters({ ...filters, types: filters.types.filter(t => t !== type) });
    } else {
      setFilters({ ...filters, types: [...filters.types, type] });
    }
  };

  // Handler for capacity (checkbox)
  const handleCapacityChange = (cap) => {
    if (filters.capacity.includes(cap)) {
      setFilters({ ...filters, capacity: filters.capacity.filter(c => c !== cap) });
    } else {
      setFilters({ ...filters, capacity: [...filters.capacity, cap] });
    }
  };

  // Handler for price (range)
  const handlePriceChange = (e) => {
    setFilters({ ...filters, maxPrice: Number(e.target.value) });
  };

  // Count cars by type
  const typeCounts = ["Sport", "SUV", "MPV", "Sedan", "Coupe"].reduce((acc, type) => {
    acc[type] = cars.filter(car => car.type === type).length;
    return acc;
  }, {});

  // Count cars by capacity ("2", "4", "6", "8")
  const capacityCounts = ["2", "4", "6", "8"].reduce((acc, cap) => {
    // Match capacity like "4 People", "6 People", etc.
    acc[cap] = cars.filter(car => car.capacity && car.capacity.startsWith(cap)).length;
    return acc;
  }, {});

  return (
    <div className="p-4 space-y-6">
      {/* Car Type Filter */}
      <div>
        <h3 className="text-xs uppercase py-2 text-gray-500 mb-4">Type</h3>
        <ul className="space-y-2 text-gray-700 text-sm">
          {[
            "Sport",
            "SUV",
            "MPV",
            "Sedan",
            "Coupe"
          ].map((type) => (
            <li key={type}>
              <input
                type="checkbox"
                checked={filters.types.includes(type)}
                onChange={() => handleTypeChange(type)}
              />
              <span className="ml-2">{type} ({typeCounts[type]})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Capacity Filter */}
      <div>
        <h3 className="text-xs uppercase py-2 text-gray-500 mb-4">Capacity</h3>
        <ul className="space-y-2 text-gray-700 text-sm">
          {["2", "4", "6", "8"].map((cap) => (
            <li key={cap}>
              <input
                type="checkbox"
                checked={filters.capacity.includes(cap)}
                onChange={() => handleCapacityChange(cap)}
              />
              <span className="ml-2">{cap} Person{cap !== "2" ? "s" : ""} ({capacityCounts[cap]})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range Filter */}
      <div>
        <h3 className="text-xs uppercase py-2 text-gray-500 mb-4">Price</h3>
        <input
          type="range"
          min={0}
          max={100}
          value={filters.maxPrice}
          onChange={handlePriceChange}
          className="w-full accent-blue-600"
        />
        <div className="text-sm text-gray-500 mt-1">Max. ${filters.maxPrice}.00</div>
      </div>
    </div>
  );
}