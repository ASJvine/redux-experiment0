import axios from 'axios';

import { FETCH_RECIPES } from '../constants/actionTypes';
import { setRecipes } from '../actions/recipes';
import { setIngredients } from '../actions/ingredients';

const RECIPES_URL = 'https://s3.amazonaws.com/500tech-shared/db.json';

function fetchData(url, callback) {
  axios.get(url)
    .then(callback)
    .catch((err) => console.log(`Error fetching recipes: ${ err }`))
}

const apiMiddleware = ({ dispatch }) => next => action => {
  if (action.type === FETCH_RECIPES) {
    fetchData(RECIPES_URL, ({ data }) => {
      dispatch(setRecipes(data.recipes));
      dispatch(setIngredients(data.ingredients));
    });

  }
  next(action);
};

export default apiMiddleware;
