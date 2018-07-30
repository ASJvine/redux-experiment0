import React from 'react';
import { connect } from 'react-redux';

import RecipeList from '../components/RecipeList';

const mapStateToProps = state => ({
  recipes: state.recipes,
});

const mapDispatchToProps = () => {};

const Recipes = connect(
  mapStateToProps, {},
)(RecipeList);

export default Recipes;
