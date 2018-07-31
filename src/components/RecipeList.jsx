import React from 'react';
import PropTypes from 'prop-types';

import Recipe from './Recipe';
import Ingredient from './Ingredient';
import RecipeForm from './RecipeForm';

class  RecipeList extends React.Component {
  constructor(props) {
    super(props);
    props.fetchRecipes();
  }
  render() {
    const { recipes, addRecipe, ingredients } = this.props;

    return (
      <div className="recipes">
        <h2>Recipes:</h2>
        <ul>
          {recipes.map((recipe, index) => (
            <Recipe key={index} {...recipe}/>
          ))}
        </ul>
        <RecipeForm addRecipe={addRecipe} />
        <h2>Ingredients:</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <Ingredient key={index} {...ingredient} />
          ))}
        </ul>
      </div>
    );
  }
}

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  addRecipe: PropTypes.func.isRequired,
};

export default RecipeList;
