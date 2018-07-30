import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { addRecipe } from '../actions/recipes'
import RecipeList from '../components/RecipeList';

const mapStateToProps = state => ({
  recipes: state.recipes,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addRecipe: (name) => dispatch(addRecipe(name)),
});

const Recipes = connect(
  mapStateToProps, mapDispatchToProps,
)(RecipeList);

export default Recipes;
