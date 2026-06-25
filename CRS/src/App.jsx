import React from "react";

const App = () => {
  const features = [
    {


      icon: "👨‍🎓",
      title: "Students",
      desc: "Create profiles, upload resumes, and apply for jobs from top companies.",
    },
    {
      icon: "🏢",
      title: "Recruiters",
      desc: "Post jobs, manage applicants, and hire talented graduates easily.",
    },
    {
      icon: "🏫",
      title: "Colleges",
      desc: "Manage campus placements, student records, and recruitment drives.",
    },
  ];

  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-5 backdrop-blur-md bg-white/10 sticky top-0 z-50">
        <h1 className="text-3xl font-bold">🎓 CRS</h1>

        <div className="hidden md:flex gap-8 font-medium">
          <button className="hover:text-yellow-300">Home</button>
          <button className="hover:text-yellow-300">Jobs</button>
          <button className="hover:text-yellow-300">Companies</button>
          <button className="hover:text-yellow-300">Contact</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 py-24">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Campus Recruitment
          <span className="block text-yellow-400">System</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-10">
          Connecting Students, Recruiters, and Colleges on one powerful
          platform. Discover opportunities, hire talent, and simplify campus
          placements.
        </p>




























        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition duration-300">
            Student Login
          </button>

          <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition duration-300">
            Recruiter Login
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-12 py-12">
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl text-center">
          <h2 className="text-4xl font-bold text-yellow-400">5000+</h2>
          <p className="mt-2 text-gray-300">Students</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl text-center">
          <h2 className="text-4xl font-bold text-yellow-400">250+</h2>
          <p className="mt-2 text-gray-300">Companies</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl text-center">
          <h2 className="text-4xl font-bold text-yellow-400">100+</h2>
          <p className="mt-2 text-gray-300">Colleges</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl text-center">
          <h2 className="text-4xl font-bold text-yellow-400">10K+</h2>
          <p className="mt-2 text-gray-300">Placements</p>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-12 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose CRS?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl hover:scale-105 transition duration-300 shadow-xl"
            >
              <div className="text-5xl mb-4">{item.icon}</div>

              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center px-6 py-24">
        <h2 className="text-5xl font-bold mb-6">
          Start Your Career Journey 🚀
        </h2>

        <p className="text-xl text-gray-300 mb-10">
          Join thousands of students and recruiters already using our platform.
        </p>



        <button className="bg-yellow-400 text-black px-10 py-4 rounded-xl font-bold hover:scale-105 transition duration-300">
          Get Started
        </button>
      </section>




      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-400">
        © 2026 Campus Recruitment System. All Rights Reserved.
      </footer>
    </div>
  );
};





export default App;