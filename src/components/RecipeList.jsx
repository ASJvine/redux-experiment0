import React from 'react';
import PropTypes from 'prop-types';

import Recipe from './Recipe';
import RecipeForm from './RecipeForm';

const RecipeList = ({ recipes, addRecipe }) => (
  <div className="recipes">
    <h2>Recipes:</h2>
    <ul>
      {recipes.map((recipe, index) => (
        <Recipe key={index} {...recipe}/>
      ))}
    </ul>
    <RecipeForm addRecipe={addRecipe} />
  </div>
);

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  addRecipe: PropTypes.func.isRequired,
};

export default RecipeList;
