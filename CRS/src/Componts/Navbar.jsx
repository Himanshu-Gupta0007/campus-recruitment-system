import React from "react";
import { Bot, Menu, Plus, Search, User, Send } from "lucide-react";

const Navbar = () => {
  return (
    <div className="h-screen bg-[#212121] text-white flex flex-col">
      {/* Navbar */}
      <nav className="w-full h-16 bg-[#171717] flex items-center justify-between px-6 border-b border-gray-700">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Bot className="text-green-400" size={30} />
          <div>
            <h1 className="text-xl font-bold">AI ChatBot</h1>
            <p className="text-xs text-gray-400">Powered by OpenAI</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <button className="flex items-center gap-2 hover:text-green-400">
            <Plus size={18} />
            New Chat
          </button>

          <button className="flex items-center gap-2 hover:text-green-400">
            <Search size={18} />
            Search
          </button>

          <button className="flex items-center gap-2 hover:text-green-400">
            <User size={18} />
            Profile
          </button>
        </div>

        {/* Mobile Menu */}
        <button className="md:hidden">
          <Menu size={28} />
        </button>
      </nav>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        {/* AI Message */}
        <div className="flex gap-3">
          <div className="bg-green-500 p-2 rounded-full">
            <Bot size={20} />
          </div>

          <div className="bg-[#2F2F2F] p-4 rounded-xl max-w-xl">
            👋 Hello! I'm your AI Assistant.
            <br />
            Ask me anything.
          </div>
        </div>

        {/* User Message */}
        <div className="flex justify-end gap-3">
          <div className="bg-blue-600 p-4 rounded-xl max-w-xl">
            What is React?
          </div>

          <div className="bg-blue-600 p-2 rounded-full">
            <User size={20} />
          </div>
        </div>

        {/* AI Reply */}
        <div className="flex gap-3">
          <div className="bg-green-500 p-2 rounded-full">
            <Bot size={20} />
          </div>

          <div className="bg-[#2F2F2F] p-4 rounded-xl max-w-xl">
            React is a JavaScript library used to build modern user interfaces
            using reusable components.
          </div>
        </div>
      </div>

      {/* Input Box */}
      <div className="p-5 border-t border-gray-700">
        <div className="flex items-center bg-[#2F2F2F] rounded-xl px-4 py-3">
          <input
            type="text"
            placeholder="Message AI..."
            className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
          />

          <button className="bg-green-500 hover:bg-green-600 p-3 rounded-lg transition">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;