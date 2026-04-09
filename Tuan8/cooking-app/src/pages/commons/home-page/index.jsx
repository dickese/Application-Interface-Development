import EditorsPick from "./EditorsPick";
import HeroSection from "./HeroSection";
import RecipeGrid from "./RecipeGrid";

const HomePage = () => {
  const summerRecipes = [
    {
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80",
      title: "Italian-style tomato",
      time: "14 minutes",
    },
    {
      image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&q=80",
      title: "Spaghetti with vegetables and shrimp",
      time: "15 minutes",
    },
    {
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
      title: "Lotus delight salad",
      time: "20 minutes",
    },
    {
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&q=80",
      title: "Snack cakes",
      time: "21 minutes",
    },
  ];

  const videoRecipes = [
    {
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
      title: "Salad with cabbage and shrimp",
      time: "32 minutes",
    },
    {
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80",
      title: "Salad of cove beans, shrimp and potatoes",
      time: "20 minutes",
    },
    {
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&q=80",
      title: "Sunny-side up fried eggs",
      time: "18 minutes",
    },
    {
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80",
      title: "Lotus delight salad",
      time: "20 minutes",
    },
  ];

  return (
    <div>
      <HeroSection />
      <RecipeGrid
        title="This Summer Recipes"
        subtitle="We have all your Independence Day sweets covered."
        recipes={summerRecipes}
      />
      <RecipeGrid
        title="Recipes With Videos"
        subtitle="Cooking Up Culinary Creations with Step-by-Step Videos"
        recipes={videoRecipes}
      />
      <EditorsPick />
    </div>
  );
};

export default HomePage;