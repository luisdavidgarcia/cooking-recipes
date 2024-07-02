import React from 'react';
import { getAllRecipes, Recipe } from '../data/recipes';
import RecipeList from './RecipeList';

export default function RecipesPage() {
    const recipes: Recipe[] = getAllRecipes()
    

    return(
        <div>
            <h1>Come on and Cook It Up</h1>
            <RecipeList recipes={recipes} />
        </div>
    )
}
