import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import ReduxMulti from 'redux-multi';

import App from './core/app';
import reducers from './core/reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxMulti)(createStore);

ReactDOM.render(
  (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>
  ), document.querySelector('#app-container')
);
