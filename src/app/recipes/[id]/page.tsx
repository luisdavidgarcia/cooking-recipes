import { Recipe, getRecipeById } from '../../data/recipes';

interface RecipePageProps {
  params: { id: string };
}

export const revalidate = 3600; // revalidate the data at most every hour

const RecipePage: React.FC<RecipePageProps> = async ({ params }) => {
  const { id } = params;
  const recipe = getRecipeById(id);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <p>{recipe.description}</p>
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipePage;