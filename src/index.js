import React from 'react';
import ReactDOM from 'react-dom';

import './styles/main.scss';

import configureStore from './store/configureStore';
import Root from './containers/Root';

ReactDOM.render(
  <Root store={configureStore} />,
  document.getElementById('app')
);
