import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers/index';
import loggerMiddleware from './middlewares/logger';
import App from './components/App.jsx';

import './styles/main.scss';

const configureStore = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware)
);

render(
  <Provider store={configureStore}>
    <App />
  </Provider>,
  document.getElementById('app')
)
