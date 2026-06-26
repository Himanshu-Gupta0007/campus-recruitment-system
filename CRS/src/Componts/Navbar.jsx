import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold cursor-pointer">
          Campus Recruitment
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li className="hover:text-yellow-300 cursor-pointer">Home</li>
          <li className="hover:text-yellow-300 cursor-pointer">Companies</li>
          <li className="hover:text-yellow-300 cursor-pointer">Jobs</li>
          <li className="hover:text-yellow-300 cursor-pointer">Students</li>
          <li className="hover:text-yellow-300 cursor-pointer">Contact</li>
        </ul>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-blue-600 transition">
            Login
          </button>

          <button className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;