import React from 'react';
import PropTypes from 'prop-types';

const Ingredient = ({ name, quantity, measure }) => (
  <li>{`${quantity} ${measure} ${name}`}</li>
);

Ingredient.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  measure: PropTypes.string.isRequired,
  recipe: PropTypes.string.isRequired,
};

export default Ingredient;
