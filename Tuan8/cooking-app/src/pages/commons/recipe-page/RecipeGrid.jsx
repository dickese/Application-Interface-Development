import { useState } from "react";
import { Bookmark, ChevronLeft, ChevronRight } from "lucide-react";

const RecipeGrid = ({ title = "Salad", count = 32 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("A-Z");
  const totalPages = 10;

  const recipes = [
    { id: 1, name: "Cucumber salad, cherry tomatoes", time: "20 minutes", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop" },
    { id: 2, name: "Italian-style tomato salad", time: "15 minutes", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&h=200&fit=crop" },
    { id: 3, name: "Potato Salad", time: "30 minutes", image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=300&h=200&fit=crop" },
    { id: 4, name: "Salad with cabbage and shrimp", time: "25 minutes", image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop" },
    { id: 5, name: "Five-color salad", time: "20 minutes", image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=300&h=200&fit=crop" },
    { id: 6, name: "Corn Salad", time: "15 minutes", image: "https://images.unsplash.com/photo-1595670002930-b30d297a28df?w=300&h=200&fit=crop" },
    { id: 7, name: "Salad with cabbage and shrimp", time: "25 minutes", image: "https://images.unsplash.com/photo-1547496502-affa22d38842?w=300&h=200&fit=crop" },
    { id: 8, name: "Lotus delight salad", time: "30 minutes", image: "https://images.unsplash.com/photo-1604497181015-76590d828b75?w=300&h=200&fit=crop" },
    { id: 9, name: "Avocado Salad", time: "15 minutes", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop" },
  ];

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
          <div key={recipe.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
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