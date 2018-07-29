import recipesReducer from './recipes';
import ingredientsReducer from './ingredients';

const rootReducer = (state, action) => {
  return Object.assign({}, state, {
    recipes: recipesReducer(state && state.recipes, action),
    ingredients: ingredientsReducer(state && state.ingredients, action)
  });
};

export default rootReducer;
