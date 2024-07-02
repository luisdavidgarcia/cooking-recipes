// Define the structure of a Recipe object
export interface Recipe {
    id: string;
    title: string;
    image: string;
    description: string;
    ingredients: string[];
    instructions: string[];
  }
  
  // Example recipe data
  const recipes: Recipe[] = [
    {
      id: '1',
      title: 'Spaghetti Bolognese',
      image: 'https://www.slimmingeats.com/blog/wp-content/uploads/2010/04/spaghetti-bolognese-36-720x720.jpg',
      description: 'A classic Italian pasta dish...',
      ingredients: ['200g spaghetti', '100g minced beef', '1 onion', '2 cloves garlic', '400g canned tomatoes', 'Salt', 'Pepper'],
      instructions: ['Cook the spaghetti according to the package instructions.', 'In a pan, sauté the onion and garlic until translucent.', 'Add the minced beef and cook until browned.', 'Stir in the canned tomatoes, salt, and pepper.', 'Simmer for 20 minutes.', 'Serve the sauce over the spaghetti.'],
    },
    {
      id: '2',
      title: 'Chicken Curry',
      image: 'https://www.allrecipes.com/thmb/FL-xnyAllLyHcKdkjUZkotVlHR8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/46822-indian-chicken-curry-ii-DDMFS-4x3-39160aaa95674ee395b9d4609e3b0988.jpg',
      description: 'A delicious and spicy chicken curry...',
      ingredients: ['500g chicken breast', '1 onion', '3 cloves garlic', '1 tbsp ginger', '200ml coconut milk', '2 tbsp curry powder', 'Salt', 'Pepper'],
      instructions: ['Cut the chicken breast into cubes.', 'In a pan, sauté the onion, garlic, and ginger until fragrant.', 'Add the chicken and cook until browned.', 'Stir in the curry powder and cook for 1 minute.', 'Pour in the coconut milk, salt, and pepper.', 'Simmer for 25 minutes.', 'Serve with rice.'],
    },
    // Add more recipes as needed
  ];
  
  // Function to get all recipes
  export const getAllRecipes = (): Recipe[] => recipes;
  
  // Function to get a recipe by ID
  export const getRecipeById = (id: string): Recipe | undefined => recipes.find((recipe) => recipe.id === id);
  
  // Function to get all recipe IDs for dynamic routing
  export const getAllRecipeIds = () => recipes.map((recipe) => ({
    params: { id: recipe.id },
  }));
  