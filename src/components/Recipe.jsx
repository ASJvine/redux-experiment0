import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ({ name, onClick }) => (
  <li onClick={(e) => onClick(e)}>{name}</li>
);

Recipe.propTypes = {
  name: PropTypes.string.isRequired,
  name: PropTypes.func.isRequired,
};

export default Recipe;
