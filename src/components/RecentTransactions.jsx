"use client";
import Image from "next/image";

const transactions = [
  { id: 1, name: "Nissan GT – R", type: "Sport Car", date: "20 July", price: 80, image: "/car1.png" },
  { id: 2, name: "Koenigsegg", type: "Sport Car", date: "19 July", price: 99, image: "/car1.png" },
  { id: 3, name: "Rolls – Royce", type: "Coupe", date: "18 July", price: 96, image: "/car1.png" },
  { id: 4, name: "CR – V", type: "SUV", date: "17 July", price: 80, image: "/car2.png" },
];

export default function RecentTransactions() {
  return (
    <section className="bg-white rounded-2xl shadow p-6 flex flex-col gap-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold">Recent Transaction</h2>
        <a href="#" className="text-xs text-blue-600 hover:underline font-semibold">View All</a>
      </div>
      <ul className="divide-y divide-gray-100">
        {transactions.map(tx => (
          <li key={tx.id} className="flex items-center gap-4 py-3">
            <Image src={tx.image} alt={tx.name} width={48} height={32} className="rounded object-contain" />
            <div className="flex-1">
              <div className="font-semibold text-sm text-gray-900">{tx.name}</div>
              <div className="text-xs text-gray-400">{tx.type}</div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-xs text-gray-400">{tx.date}</span>
              <span className="font-bold text-base text-gray-900">${tx.price}.00</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
} 