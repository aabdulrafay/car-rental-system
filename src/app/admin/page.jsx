"use client";
import DetailsRental from "@/components/DetailsRental";
import TopCarRentalChart from "@/components/TopCarRentalChart";
import RecentTransactions from "@/components/RecentTransactions";

export default function AdminDashboard() {
  return (
    <main className="w-full p-0 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left: Details Rental */}
      <div className="flex flex-col gap-8">
        <DetailsRental />
      </div>
      {/* Right: Top 5 Car Rental and Recent Transactions */}
      <div className="flex flex-col gap-8">
        <TopCarRentalChart />
        <RecentTransactions />
      </div>
    </main>
  );
} 