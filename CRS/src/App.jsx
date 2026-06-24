import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">
        🎓 Campus Recruitment System
      </h1>

      <p className="text-lg text-gray-600 mb-6">
        Connecting Students, Recruiters, and Colleges.
      </p>

      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        Get Started
      </button>
    </div>
  );
};

export default App;