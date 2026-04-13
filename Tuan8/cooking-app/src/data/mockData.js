const recipe = {
  title: "How to make a Strawberry Shortcake",
  author: {
    name: "Emma Gonzalez",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  time: "45 minutes",
  notes: "352 community notes",
  rating: 4,
  description:
    "It involves preparing the strawberries, making the shortcakes, preparing whipped cream, and finally assembling the shortcake.",
  ingredients: [
    "Yield: 4 generous servings",
    "2 pints ripe, well-rinsed strawberries",
    "1/2 cup sugar, or more to taste",
    "4 cups flour",
    "3 tablespoons sugar",
    "1 1/2 teaspoon salt",
    "5 teaspoons baking powder",
    "1/4 cup butter",
    "3 cups whipping cream",
    "1/4 teaspoon vanilla extract",
  ],
  heroImage:
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
  steps: [
    {
      number: 1,
      description:
        "Pick over and hull strawberries. Cut in half or slice depending on size. Toss with sugar and let sit for at least one hour.",
      image:
        "https://images.unsplash.com/photo-1466637574441-749b8f19452f",
    },
    {
      number: 2,
      description: "Preheat oven to 450 degrees.",
      image: "",
    },
    {
      number: 3,
      description:
        "Mix dry ingredients. Cut in butter, then add cream. Knead lightly and shape into rounds.",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    },
    {
      number: 4,
      description:
        "Bake shortcakes for 10–15 minutes until golden brown.",
      image: "",
    },
  ],
};
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

export {recipe, recipes};