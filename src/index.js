import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
import createRoutes from './createRoutes';
import { App } from './app';
import { Provider } from 'react-redux';
import { Router, applyRouterMiddleware, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { useScroll } from 'react-router-scroll';

const store = configureStore({
  initialState: {/* If server rendering: window.__INITIAL_STATE__*/ },
});

const history = syncHistoryWithStore(browserHistory, store);

const routes = createRoutes(store.getState);

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={history}
      render={applyRouterMiddleware(useScroll())}
    >
      {routes}
    </Router>
  </Provider>
  , document.getElementById('app-root')
);
