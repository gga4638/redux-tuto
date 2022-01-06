import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './Exercise'
import { createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);
console.log("rootReducer store: ", store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);