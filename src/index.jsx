import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers/index';
import loggerMiddleware from './middlewares/logger';
import apiMiddleware from './middlewares/api';
import App from './components/App.jsx';

import './styles/main.scss';

const configureStore = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware, apiMiddleware)
);

render(
  <Provider store={configureStore}>
    <App />
  </Provider>,
  document.getElementById('app')
)
