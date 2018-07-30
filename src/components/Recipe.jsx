import React from 'react'
import PropTypes from 'prop-types'
​
const Recipe = ({ name }) => (
  <li>{name}</li>
);
​
Recipe.propTypes = {
  name: PropTypes.string.isRequired,
};
​
export default Recipe;
