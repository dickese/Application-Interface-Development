import { Bookmark } from "lucide-react";

const RecipeCard = ({ image, title, time }) => {
  return (
    <div className="flex flex-col">
      <div className="relative mb-3">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-2xl"
        />
      </div>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-800 mb-1 leading-tight">{title}</h3>
          <span className="text-xs text-pink-500">{time}</span>
        </div>
        <button className="p-1.5 border border-gray-200 rounded-lg hover:border-pink-300 transition-colors">
          <Bookmark className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

const RecipeGrid = ({ title, subtitle, recipes }) => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-500 mb-2">{title}</h2>
          <p className="text-gray-500 text-sm">{subtitle}</p>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {recipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              image={recipe.image}
              title={recipe.title}
              time={recipe.time}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeGrid;