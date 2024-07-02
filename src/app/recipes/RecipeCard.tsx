import React from 'react';
import Link from 'next/link';
import { Recipe } from '../data/recipes';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="polaroid">
      <img src={recipe.image} alt={recipe.title} className="polaroid-image" />
      <div className="polaroid-container">
        <h3>{recipe.title}</h3>
        <Link href={`/recipes/${recipe.id}`}>
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
