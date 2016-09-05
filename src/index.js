import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import ReduxMulti from 'redux-multi';

import { browserHistory, Router } from 'react-router';

import routes from './core/routes';
import reducers from './core/reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxMulti)(createStore);

ReactDOM.render(
  (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router
        history={browserHistory}
        routes={routes}
      />
    </Provider>
  ), document.querySelector('#app-container')
);
