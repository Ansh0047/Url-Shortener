import { useState } from "react";

export default function App() {


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          URL Shortener
        </h1>

        <div className="flex flex-col space-y-4">
          <label className="text-gray-600 font-medium">Enter the URL</label>
          <input
            type="text"
            placeholder="https://example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200">
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}