import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers/index';
import App from './components/App.jsx';

import './styles/main.scss';

const configureStore = createStore(rootReducer);

render(
  <Provider store={configureStore}>
    <App />
  </Provider>,
  document.getElementById('app')
)
