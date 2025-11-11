import { Link } from "react-router-dom";
import { useState } from "react";

function Routers() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-semibold tracking-wide text-white">
          TechFORUMX
        </div>

        {/* Nav Links */}
        <ul className="flex items-center space-x-4 bg-gray-800 px-4 py-2 rounded-2xl shadow-sm">
          <li>
            <Link
              to="/home"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Home
            </Link>
          </li>

          {/* Catalog Dropdown - click only */}
<li className="relative">
  <span
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className="cursor-pointer hover:text-gray-300 transition-colors duration-200 flex items-center select-none"
  >
    Catalog <span className="ml-1 text-sm">▼</span>
  </span>

  <ul
    className={`absolute left-0 mt-2 bg-gray-800 rounded-md shadow-lg py-2 w-40 text-sm transition-all duration-200 ease-in-out z-50 ${
      isMenuOpen
        ? "opacity-100 visible pointer-events-auto"
        : "opacity-0 invisible pointer-events-none"
    }`}
  >
    <li>
      <Link
        to="/posts"
        className="block px-4 py-2 hover:bg-gray-700 transition-colors"
        onClick={() => setIsMenuOpen(false)} // closes after click
      >
        Posts
      </Link>
    </li>
    <li>
      <Link
        to="/answers"
        className="block px-4 py-2 hover:bg-gray-700 transition-colors"
        onClick={() => setIsMenuOpen(false)}
      >
        Answers
      </Link>
    </li>
    <li>
      <Link
        to="/chats"
        className="block px-4 py-2 hover:bg-gray-700 transition-colors"
        onClick={() => setIsMenuOpen(false)}
      >
        Chats
      </Link>
    </li>
  </ul>
</li>


          <li>
            <Link
              to="/event-organization"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Event Organization
            </Link>
          </li>

          <li>
            <Link
              to="/event-tracking"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Event Tracking
            </Link>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-3">
          <Link
            to="/login"
            className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium shadow-md hover:bg-gray-200 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg font-medium shadow-md hover:bg-gray-300 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Routers;
