// components/HeroSubscribe.jsx
import React from "react";

const HeroSubscribe = () => {
  return (
    <div className="max-w-7xl mx-auto bg-gray-50 py-12 md:px-16 flex flex-col md:flex-row items-center justify-between">
      
      {/* Left Content */}
      <div className="max-w-lg">
        <p className="text-sm text-gray-500 mb-2">
          This recipe is exclusively available to subscribers
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-pink-500 mb-6">
          Join now to access effortless, hassle-free recipes
        </h1>

        <ul className="space-y-3 text-gray-600 mb-6">
          <li>✔ 20,000+ recipes to suit all tastes</li>
          <li>✔ Filter for diets, cook times, and more</li>
          <li>✔ Personal Recipe Box for favorites</li>
          <li>✔ Exclusive mobile app access</li>
        </ul>

        <p className="text-lg font-semibold mb-1">$0.25 USD / Week</p>
        <p className="text-sm text-gray-500 mb-6">
          Billed as $1 every 4 weeks for the first year
        </p>

        <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600">
          Subscribe Now
        </button>

        <p className="text-xs text-gray-400 mt-2">
          Cancel or pause anytime
        </p>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-[400px]">
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
          alt="Food"
          className="rounded-xl shadow-md"
        />
      </div>
    </div>
  );
};

export default HeroSubscribe;