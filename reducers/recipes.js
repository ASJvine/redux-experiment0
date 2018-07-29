const initialState = [{ name: 'Omelette' }];

const recipesReducer = (recipes = initialState, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
          return recipes.concat({ name: action.name })
    default:
      return recipes
  }
};

export default recipesReducer;
