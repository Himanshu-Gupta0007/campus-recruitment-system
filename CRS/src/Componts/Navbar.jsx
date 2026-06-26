









import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-white text-blue-700 font-bold w-10 h-10 rounded-full flex items-center justify-center">
            CR
          </div>
          <div>
            <h1 className="text-2xl font-bold">Campus Recruitment</h1>
            <p className="text-xs text-gray-200">
              Connecting Talent with Opportunity
            </p>
          </div>
        </div>








        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li className="hover:text-yellow-300 cursor-pointer transition duration-300">
            Home
          </li>
          <li className="hover:text-yellow-300 cursor-pointer transition duration-300">
            Jobs
          </li>
          <li className="hover:text-yellow-300 cursor-pointer transition duration-300">
            Companies
          </li>
          <li className="hover:text-yellow-300 cursor-pointer transition duration-300">
            Students
          </li>
          <li className="hover:text-yellow-300 cursor-pointer transition duration-300">
            About
          </li>
          <li className="hover:text-yellow-300 cursor-pointer transition duration-300">
            Contact
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button className="border border-white px-5 py-2 rounded-lg hover:bg-white hover:text-blue-700 transition duration-300">
            Login
          </button>

          <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;