import React, { useEffect, useState } from "react";
import  { recipe, recipes } from '../../../data/mockData.js'
import { useParams } from "react-router-dom";
const StarRating = ({ rating }) => {
  return (
    <div className="flex text-yellow-400">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i}>
          {i <= rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

const RecipeDetailPage = () => {
    const [recipe, setRecipe] = useState(null)
    const {id} = useParams()


    useEffect(() => {
        const fakefecthApi = () => {
            if(id){
            const recipe = recipes.find((item) => item.id === id)
            setRecipe(recipe)
        }
        }
        

        fakefecthApi()
    }, [id])
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10 grid grid-cols-2 gap-10">
      <div className="flex flex-col max-w-2xl">
        <div>
          <p className="text-sm text-gray-400 mb-2">
            Home &gt; Cooking guide
          </p>

          <h1 className="text-4xl font-bold mb-4">
            {recipe.title}
          </h1>

          <p className="text-gray-600 mb-6">
            {recipe.description}
          </p>

          {/* Author Card */}
          <div className="bg-white rounded-xl shadow p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={recipe.author.avatar}
                alt={recipe.author.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">
                  {recipe.author.name}
                </p>
                <div className="text-sm text-gray-500 flex gap-4">
                  <span>{recipe.time}</span>
                  <span>{recipe.notes}</span>
                </div>
              </div>
            </div>

            <StarRating rating={recipe.rating} />
          </div>
        </div>
         {/* Ingredients */}
        <div className="border border-pink-300 rounded-xl p-6">
          <ul className="space-y-2 text-sm">
            {recipe.ingredients.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>

          <button className="mt-6 w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">
            + Add to Your Grocery List
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="gap-10">
         {/* Hero Image */}
        <img
          src={recipe.heroImage}
          alt="recipe"
          className="rounded-xl object-cover"
        />
    

        {/* Steps */}
        <div className=" space-y-8">
          {recipe.steps.map((step) => (
            <div key={step.number} className="space-y-3">
              <h3 className="font-semibold">
                Step {step.number}
              </h3>

              <p className="text-gray-600">
                {step.description}
              </p>

              {step.image && (
                <img
                  src={step.image}
                  alt={`step-${step.number}`}
                  className="rounded-lg w-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailPage;