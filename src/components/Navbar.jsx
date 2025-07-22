import {
  Search,
  Heart,
  Bell,
  Settings,
  SlidersHorizontal,
} from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white px-8 md:px-16 py-4 flex items-center justify-between shadow-md">
      {/* Left Side: Logo + Search */}
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <div className="mr-20 text-2xl font-bold text-blue-700 font-plus-jakarta">
          MORENT
        </div>

        {/* Search Bar (not centered, wider) */}
        <div className="hidden md:flex items-center bg-white rounded-full px-4 py-2 w-[500px] border border-gray-300">
          <Search className="w-5 h-5 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search something here"
            className="bg-transparent outline-none w-full"
          />
          <SlidersHorizontal className="w-5 h-5 text-gray-500 ml-2" />
        </div>
      </div>

      {/* Right Side: Icons + Profile */}
      <div className="flex items-center space-x-5 text-gray-600">
        <div className="hidden md:flex items-center space-x-3">
          <IconCircle>
            <Heart className="w-4 h-4" />
          </IconCircle>

          <div className="relative">
            <IconCircle>
              <Bell className="w-4 h-4" />
            </IconCircle>
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-600 rounded-full border-2 border-white"></span>
          </div>

          <IconCircle>
            <Settings className="w-4 h-4" />
          </IconCircle>
        </div>

        {/* Profile Image */}
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-blue-700 cursor-pointer">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2IYhSn8Y9S9_HF3tVaYOepJBcrYcd809pBA&s"
            alt="Profile-Picture"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
}

// Reusable circle icon wrapper
function IconCircle({ children }) {
  return (
    <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 cursor-pointer hover:text-blue-700 hover:border-blue-700 transition">
      {children}
    </div>
  );
}
