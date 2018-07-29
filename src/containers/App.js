import React, { Component, PropTypes } from 'react';

import * as IngredientsActions from '../actions/ingredients';
import * as RecipesActions from '../actions/recipes';

class App extends Component {
  render() {
    const title = 'Redux Experiment 0';
    return (
      <div className="main-app-container">
        {title}
      </div>
    );
  }
}

App.propTypes = {
};


export default App;
