import React from 'react';
import { connect } from 'react-redux';

import RecipeList from '../components/RecipeList';

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
  }
};


const Recipes = connect(
  mapStateToProps, null
)(RecipeList);
