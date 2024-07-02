"use client"; // Ensure this is a client component

import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import { Recipe } from '../data/recipes';

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  const [visibleCount, setVisibleCount] = useState(10);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  return (
    <div>
      <div className="recipe-list">
        {recipes.slice(0, visibleCount).map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
      {visibleCount < recipes.length && (
        <button onClick={loadMore}>Load More</button>
      )}
    </div>
  );
};

export default RecipeList;
