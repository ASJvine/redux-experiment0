import React from 'react';
import PropTypes from 'prop-types';

import Recipe from './Recipe';
import Ingredient from './Ingredient';
import RecipeForm from './RecipeForm';

class  RecipeList extends React.Component {
  constructor(props) {
    super(props);
    props.fetchRecipes();
    this.state = { selectedRecipe: '' }
  }
  handleChange(event) {
    console.log('recipe selected!!', event.target.innerText);
    this.setState({ selectedRecipe: event.target.innerText });
  }

  render() {
    const { recipes, addRecipe, ingredients } = this.props;
    const { selectedRecipe } = this.state;

    return (
      <div className="recipes">
        <h2>All Recipes:</h2>
        <ul>
          {recipes.map((recipe, index) => (
            <Recipe key={index} {...recipe} onClick={(e) => this.handleChange(e)}/>
          ))}
        </ul>
        <RecipeForm addRecipe={addRecipe} />
        {selectedRecipe &&
          <div>
            <h2>{`Ingredients of ${selectedRecipe}:`}</h2>
            <ul>
              {ingredients.map((ingredient, index) => (
                selectedRecipe === ingredient.recipe ? <Ingredient key={index} {...ingredient} /> : null
                )
              )}
            </ul>
          </div>
        }
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
