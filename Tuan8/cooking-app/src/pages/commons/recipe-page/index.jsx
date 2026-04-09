import React from 'react'

const RecipePage = () => {
    const [filters, setFilters] = useState({
    types: [],
    timeRange: [0, 120],
    rating: null
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };
  return (
    <div className="flex gap-8">
          <FilterRecipe onFilterChange={handleFilterChange} />
          <RecipeGrid title="Salad" count={32} />
        </div>
  )
}

export default RecipePage
