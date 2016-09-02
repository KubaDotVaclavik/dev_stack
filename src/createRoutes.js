/* @flow weak */
import React from 'react';
import { IndexRoute, Route } from 'react-router';

// Router components must be ES6 classes because hot reloading.
import { App } from './app';
import { Home } from './home';
import { Page } from './page';



const createRoutes = (getState) => {
  const requireViewer = (nextState, replace) => {
    if (getState().users.viewer) return;
    replace({
      pathname: '/signin',
      state: { nextPathname: nextState.location.pathname },
    });
  };

  return (
    <Route component={App} path="/">
      <IndexRoute component={Home} />
      <Route component={Page} path="page" />
      {/*<Route component={Home} path="home" />*/}
    </Route>
  );
};

export default createRoutes;
