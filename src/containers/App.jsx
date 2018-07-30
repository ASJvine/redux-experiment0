import React, { Component, PropTypes } from 'react';

import * as IngredientsActions from '../actions/ingredients';
import * as RecipesActions from '../actions/recipes';

import Recipes from './Recipes';

class App extends Component {
  render() {
    const title = 'Redux Experiment 0';
    return (
      <div className="main-app-container">
        {title}
        <Recipes />
      </div>
    );
  }
}

App.propTypes = {
};


export default App;
