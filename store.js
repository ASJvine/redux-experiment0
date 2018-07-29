import { createStore } from 'redux';
import rootReducer from './reducers/root';

const initialState = {
	recipes: [{ name: 'Omelette' }],
	ingredients: [{ recipe: 'Omelette', name: 'Egg', quantity: 2 }]
};

const store = createStore(rootReducer, initialState);

export default store;

window.store = store;