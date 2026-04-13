import { useState } from "react";
import { Bookmark, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {recipes} from '../../../data/mockData.js'
const RecipeGrid = ({ title = "Salad", count = 32 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("A-Z");
  const totalPages = 10;
  const navigate = useNavigate()



  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1, 2, 3, 4);
      if (currentPage > 4 && currentPage < totalPages - 2) {
        pages.push("...", currentPage);
      } else {
        pages.push("...");
      }
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="flex-1">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          {title} <span className="text-gray-500">({count})</span>
        </h1>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="newest">Newest</option>
          <option value="popular">Popular</option>
        </select>
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-3 gap-5 mb-8">
        {recipes.map((recipe) => (
          <div key={recipe.id} 
          onClick={() => {
            navigate
          }}
          className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="p-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                  {recipe.name}
                </h3>
                <button className="shrink-0 p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <Bookmark className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              <p className="text-xs text-pink-500 mt-1">{recipe.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-1">
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        </button>
        
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && setCurrentPage(page)}
            disabled={page === "..."}
            className={`min-w-[32px] h-8 px-2 rounded-lg text-sm font-medium transition-colors ${
              page === currentPage
                ? "bg-pink-500 text-white"
                : page === "..."
                ? "cursor-default text-gray-400"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default RecipeGrid;