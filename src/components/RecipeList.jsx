import React from 'react';
import PropTypes from 'prop-types';

import Recipe from './Recipe';

const RecipeList = ({ recipes }) => (
  <div className="recipes">
    <h2>Recipes:</h2>
    <ul>
      {recipes.map((recipe, index) => (
        <Recipe key={index} {...recipe} />
      ))}
    </ul>
  </div>
);
​
RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
​
export default RecipeList;
