import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Install lucide-react icons if not already

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-20">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-500 cursor-pointer">FitLife</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <button className="text-gray-700 hover:text-green-500 font-medium">Dashboard</button>
          <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
            Sign Up
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Login
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-6 bg-white shadow-md">
          <button className="text-gray-700 hover:text-green-500 font-medium">
            Dashboard
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
            Sign Up
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
