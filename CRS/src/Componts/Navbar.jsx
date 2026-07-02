import React from "react";
//import { Bot, Menu, Plus, Search, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-gray-900 text-white flex items-center justify-between px-8 shadow-lg border-b border-gray-700">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Bot size={32} className="text-cyan-400" />
        <div>
          <h1 className="text-2xl font-bold">AI ChatBot</h1>
          <p className="text-xs text-gray-400">
            Powered by OpenAI
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <button className="hover:text-cyan-400 transition flex items-center gap-2">
          <Plus size={18} />
          New Chat
        </button>

        <button className="hover:text-cyan-400 transition flex items-center gap-2">
          <Search size={18} />
          Search
        </button>

        <button className="hover:text-cyan-400 transition flex items-center gap-2">
          <User size={18} />
          Profile
        </button>
      </div>

      {/* Mobile Menu */}
      <button className="md:hidden">
        <Menu size={28} />
      </button>
    </nav>
  );
};

export default Navbar;