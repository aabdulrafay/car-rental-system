"use client";
import { useState } from "react";

// Example dynamic data
const carRentalData = [
  { label: "Sport Car", value: 17439, color: "#54A6FF" },
  { label: "SUV", value: 9478, color: "#3563E9" },
  { label: "Coupe", value: 18197, color: "#FFB700" },
  { label: "Hatchback", value: 12510, color: "#90A3BF" },
  { label: "MPV", value: 14406, color: "#8B8BAA" },
];

export default function TopCarRentalChart() {
  const [hovered, setHovered] = useState(null);
  const total = carRentalData.reduce((sum, d) => sum + d.value, 0);

  // Calculate strokeDasharray for each segment
  let offset = 0;
  const circumference = 2 * Math.PI * 48; // r=48
  const segments = carRentalData.map((d, i) => {
    const percent = d.value / total;
    const length = percent * circumference;
    const seg = (
      <circle
        key={d.label}
        cx="60"
        cy="60"
        r="48"
        fill="none"
        stroke={d.color}
        strokeWidth={hovered === i ? 20 : 16}
        strokeDasharray={`${length} ${circumference}`}
        strokeDashoffset={offset}
        style={{ transition: "stroke-width 0.2s" }}
        onMouseEnter={() => setHovered(i)}
        onMouseLeave={() => setHovered(null)}
        aria-label={`${d.label}: ${d.value}`}
        tabIndex={0}
      />
    );
    offset -= length;
    return seg;
  });

  return (
    <section className="bg-white rounded-2xl shadow p-6 flex flex-col gap-6">
      <h2 className="text-lg font-bold mb-2">Top 5 Car Rental</h2>
      <div className="flex items-center gap-6">
        {/* Dynamic Donut Chart */}
        <div className="relative w-[120px] h-[120px] flex items-center justify-center">
          <svg width={120} height={120} viewBox="0 0 120 120" fill="none" aria-label="Top 5 Car Rental Chart">
            <circle cx="60" cy="60" r="48" fill="#F3F6FB" />
            {segments}
            <circle cx="60" cy="60" r="32" fill="#fff" />
            <text x="60" y="68" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#222">{total.toLocaleString()}</text>
            <text x="60" y="88" textAnchor="middle" fontSize="10" fill="#90A3BF">Rental Car</text>
          </svg>
          {/* Tooltip */}
          {hovered !== null && (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-16 bg-white border border-gray-200 rounded shadow px-3 py-1 text-xs font-semibold text-gray-900 pointer-events-none z-10">
              {carRentalData[hovered].label}: {carRentalData[hovered].value.toLocaleString()}
            </div>
          )}
        </div>
        {/* Dynamic Legend */}
        <div className="flex flex-col gap-2 text-xs">
          {carRentalData.map((d, i) => (
            <Legend
              key={d.label}
              color={d.color}
              label={d.label}
              value={d.value.toLocaleString()}
              active={hovered === i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Legend({ color, label, value, active, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className={`flex items-center gap-2 cursor-pointer ${active ? "font-bold" : ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      tabIndex={0}
      aria-label={`${label}: ${value}`}
    >
      <span className="inline-block w-3 h-3 rounded-full border-2 border-white shadow" style={{ background: color }}></span>
      <span className="w-20 text-gray-700">{label}</span>
      <span className="font-semibold text-gray-900">{value}</span>
    </div>
  );
} 