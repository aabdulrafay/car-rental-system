"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Car, PieChart, Inbox, Calendar, Settings, HelpCircle, LogOut, Sun, Moon } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="bg-white min-h-screen w-full md:w-64 min-w-[calc(100vw-2rem)] sm:min-w-[350px] flex flex-col py-8 px-4 border-r">
      <nav className="flex-1">
        <div className="text-xs text-gray-400 mb-2">MAIN MENU</div>
        <ul className="space-y-2">
          <SidebarLink href="/admin" icon={<Home />} label="Dashboard" active={pathname === "/admin"} />
          <SidebarLink href="/admin/cars" icon={<Car />} label="Car Rent" active={pathname.startsWith("/admin/cars")} />
          <SidebarLink href="/admin/insight" icon={<PieChart />} label="Insight" active={pathname.startsWith("/admin/insight")} />
          <SidebarLink href="/admin/reimburse" icon={<Inbox />} label="Reimburse" active={pathname.startsWith("/admin/reimburse")} />
          <SidebarLink href="/admin/calendar" icon={<Calendar />} label="Calender" active={pathname.startsWith("/admin/calendar")} />
        </ul>
        <div className="mt-10">
          <div className="text-xs text-gray-400 mb-2">PREFERENCES</div>
          <SidebarLink href="/admin/settings" icon={<Settings />} label="Settings" active={pathname.startsWith("/admin/settings")} />
          <SidebarLink href="/admin/help" icon={<HelpCircle />} label="Help & Center" active={pathname.startsWith("/admin/help")} />
        </div>
        {/* Dark Mode Toggle UI - styled to match other options */}
        <div className="flex items-center gap-3 px-1 py-2 rounded-lg transition-colors duration-200 hover:bg-blue-50 text-gray-700 font-medium mt-2">
          {/* Left icon */}
          <span className="flex items-center text-blue-600">
            <Sun className="w-5 h-5" />
          </span>
          {/* Center label */}
          <span className="flex-1 ml-2 text-base font-medium">Dark Mode</span>
          {/* Right mode selectors */}
          <span className="flex items-center gap-1">
            <span className="bg-blue-600 rounded-full w-7 h-7 flex items-center justify-center">
              <Sun className="w-4 h-4 text-white" />
            </span>
            <span className="bg-gray-200 rounded-full w-7 h-7 flex items-center justify-center">
              <Moon className="w-4 h-4 text-gray-500" />
            </span>
          </span>
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
      <Link href={href} className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200 ${active ? "bg-blue-600 text-white font-semibold" : "hover:bg-blue-50 text-gray-700"}`}>
        <span className={`transition-colors duration-200 ${active ? "text-white" : "text-blue-600"}`}>{icon}</span>
        <span className={`font-medium transition-colors duration-200 ${active ? "font-semibold" : "text-inherit"}`}>{label}</span>
      </Link>
    </li>
  );
} 