// components/ChefSubscription.jsx
import React, { useState } from "react";

const ChefSubscription = () => {
  const [plan, setPlan] = useState("monthly");

  return (
    <div className="max-w-7xl mx-auto bg-gray-50 py-16 px-6 md:px-16 text-center">
      
      <h3 className="text-pink-500 text-lg font-semibold mb-2">🍳 Cheffy</h3>

      <h2 className="text-2xl md:text-3xl font-bold text-pink-500 mb-4">
        Subscribe to Cheffy Cooking only
      </h2>

      <p className="text-gray-500 mb-8">
        Enjoy thousands of delicious recipes plus daily inspiration.
      </p>

      <div className="flex flex-col items-center gap-4 mb-6">
        
        {/* Monthly */}
        <label className="border rounded-lg px-6 py-3 w-72 flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            checked={plan === "monthly"}
            onChange={() => setPlan("monthly")}
          />
          <span>$2/month (Billed every 4 weeks)</span>
        </label>

        {/* Yearly */}
        <label className="border rounded-lg px-6 py-3 w-72 flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            checked={plan === "yearly"}
            onChange={() => setPlan("yearly")}
          />
          <span>$20/year (Billed annually)</span>
        </label>
      </div>

      <button className="bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600">
        Subscribe Now
      </button>

      <p className="text-xs text-gray-400 mt-2">
        Cancel or pause anytime
      </p>
    </div>
  );
};

export default ChefSubscription;