import { useState } from "react";
import { SlidersHorizontal, Star } from "lucide-react";

const FilterRecipe = ({ onFilterChange }) => {
  const [selectedTypes, setSelectedTypes] = useState(["Grilled", "Roasted"]);
  const [timeRange, setTimeRange] = useState([30, 60]);
  const [selectedRating, setSelectedRating] = useState(null);

  const cookingTypes = [
    "Pan-fried", "Stir-fried",
    "Grilled", "Roasted",
    "Sauteed", "Baked",
    "Steamed", "Stewed"
  ];

  const handleTypeToggle = (type) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const handleApply = () => {
    if (onFilterChange) {
      onFilterChange({
        types: selectedTypes,
        timeRange,
        rating: selectedRating
      });
    }
  };

  return (
    <div className="w-64 shrink-0">
      <div className="bg-white rounded-lg p-5">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <SlidersHorizontal className="w-5 h-5" />
          <span className="font-semibold text-gray-900">FILTERS</span>
        </div>

        {/* Type Filter */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Type</h3>
          <div className="grid grid-cols-2 gap-2">
            {cookingTypes.map((type) => (
              <label key={type} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type)}
                  onChange={() => handleTypeToggle(type)}
                  className="w-4 h-4 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
                />
                <span className="text-sm text-gray-600">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Time Filter */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Time</h3>
          <div className="px-1">
            <input
              type="range"
              min="0"
              max="120"
              value={timeRange[1]}
              onChange={(e) => setTimeRange([timeRange[0], parseInt(e.target.value)])}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pink-500"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>{timeRange[0]} min</span>
              <span>{timeRange[1]} min</span>
            </div>
          </div>
        </div>

        {/* Rating Filter */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Rating</h3>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedRating === rating}
                  onChange={() => setSelectedRating(selectedRating === rating ? null : rating)}
                  className="w-4 h-4 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
                />
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Apply Button */}
        <button
          onClick={handleApply}
          className="w-full bg-pink-500 text-white font-medium py-2.5 rounded-full hover:bg-pink-600 transition-colors"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default FilterRecipe;