"use client";
import Link from "next/link";
import { Home, Car, PieChart, Inbox, Calendar, Settings, HelpCircle, LogOut } from "lucide-react";

export default function Sidebar({ active }) {
  return (
    <aside className="bg-white min-h-screen w-full md:w-64 min-w-[calc(100vw-2rem)] sm:min-w-[350px] flex flex-col py-8 px-4 border-r">
      <nav className="flex-1">
        <ul className="space-y-2">
          <SidebarLink href="/admin" icon={<Home />} label="Dashboard" active={active === "dashboard"} />
          <SidebarLink href="/admin/cars" icon={<Car />} label="Car Rent" active={active === "cars"} />
          <SidebarLink href="/admin/insight" icon={<PieChart />} label="Insight" />
          <SidebarLink href="/admin/reimburse" icon={<Inbox />} label="Reimburse" />
          <SidebarLink href="/admin/calendar" icon={<Calendar />} label="Calender" />
        </ul>
        <div className="mt-10">
          <div className="text-xs text-gray-400 mb-2">PREFERENCES</div>
          <SidebarLink href="/admin/settings" icon={<Settings />} label="Settings" />
          <SidebarLink href="/admin/help" icon={<HelpCircle />} label="Help & Center" />
        </div>
      </nav>
      <button className="flex items-center gap-2 text-gray-500 hover:text-blue-700 mt-10">
        <LogOut className="w-5 h-5" /> Log Out
      </button>
    </aside>
  );
}

function SidebarLink({ href, icon, label, active }) {
  return (
    <li>
      <Link href={href} className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${active ? "bg-blue-600 text-white" : "hover:bg-blue-50 text-gray-700"}`}>
        {icon}
        <span className="font-medium">{label}</span>
      </Link>
    </li>
  );
} 