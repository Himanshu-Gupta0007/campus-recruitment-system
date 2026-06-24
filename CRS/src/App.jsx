import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5">
        <h1 className="text-3xl font-bold">🎓 CRS</h1>

        <div className="space-x-6">
          <button className="hover:text-gray-200">Home</button>
          <button className="hover:text-gray-200">Jobs</button>
          <button className="hover:text-gray-200">Companies</button>
          <button className="hover:text-gray-200">Contact</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 mt-24">
        <h1 className="text-6xl font-extrabold mb-6">
          Campus Recruitment System
        </h1>

        <p className="text-xl max-w-3xl text-gray-100 mb-8">
          Connecting Students, Recruiters, and Colleges on a single platform.
          Find your dream job, hire talented graduates, and simplify campus
          placements.
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition">
            Student Login
          </button>

          <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:scale-105 transition">
            Recruiter Login
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 px-10 py-20">
        <div className="bg-white text-black p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-3">👨‍🎓 Students</h2>
          <p>
            Create profiles, upload resumes, and apply to jobs from top
            companies.
          </p>
        </div>

        <div className="bg-white text-black p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-3">🏢 Recruiters</h2>
          <p>
            Post jobs, manage applicants, and hire talented candidates easily.
          </p>
        </div>

        <div className="bg-white text-black p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-3">🏫 Colleges</h2>
          <p>
            Manage campus placements, student records, and recruitment drives.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-white/20">
        <p>© 2026 Campus Recruitment System. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;