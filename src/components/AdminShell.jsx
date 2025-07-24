"use client";
import { useState, useRef, useEffect } from "react";
import Sidebar from "@/components/Sidebar";

export default function AdminShell({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const drawerRef = useRef(null);

  // Focus trap for accessibility
  useEffect(() => {
    if (sidebarOpen && drawerRef.current) {
      drawerRef.current.focus();
    }
  }, [sidebarOpen]);

  return (
    <div className="flex flex-col md:flex-row bg-gray-50 w-full">
      {/* Sidebar for desktop, drawer for mobile */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="md:hidden w-full">
        {/* Top bar with menu button */}
        <div className="flex items-center justify-between px-4 py-3 bg-white border-b w-full">
          <button
            className="text-blue-600 focus:outline-none"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="flex-1 text-center font-bold text-base xs:text-lg sm:text-xl text-blue-700 truncate px-2">
            Admin Panel
          </span>
          <span className="w-7 h-7" /> {/* Spacer */}
        </div>
        {/* Sidebar drawer with animation and improved style */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 flex">
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-30 transition-opacity duration-300"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar overlay"
            />
            {/* Drawer */}
            <div
              ref={drawerRef}
              tabIndex={-1}
              className="relative h-full w-4/5 max-w-xs bg-white shadow-2xl rounded-r-2xl z-50 outline-none transform transition-transform duration-300 ease-in-out translate-x-0 animate-slideInLeft flex flex-col"
              style={{ minWidth: 240 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-blue-700"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close sidebar"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="overflow-y-auto h-full pt-10 pb-4 px-2">
                <Sidebar />
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Main content: full width on mobile, flex-1 on desktop */}
      <main className="w-full flex-1 p-2 sm:p-4 md:p-8">{children}</main>
    </div>
  );
}

// Add slide-in animation
if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes slideInLeft {
      from { transform: translateX(-100%); }
      to { transform: translateX(0); }
    }
    .animate-slideInLeft {
      animation: slideInLeft 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
  `;
  if (!document.getElementById("admin-shell-slidein")) {
    style.id = "admin-shell-slidein";
    document.head.appendChild(style);
  }
} 