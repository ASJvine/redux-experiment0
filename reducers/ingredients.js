const initialState = [{ recipe: 'Omelette', name: 'Egg', quantity: 2 }];

const ingredientsReducer = (ingredients = initialState, action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      const newIngredient = {
            name: action.name,
            recipe: action.recipe,
            quantity: action.quantity
      };
      return ingredients.concat(newIngredient)
      default:
        return ingredients
  }
};

export default ingredientsReducer;