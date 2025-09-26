import React from "react";

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-12 rounded-3xl shadow-2xl text-center max-w-md mx-4">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          🚀 Docker + React App
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Your application is running smoothly inside a Docker container!
        </p>
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow-md hover:bg-indigo-700 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default App;
