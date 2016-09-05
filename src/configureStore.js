import configureMiddleware from './configureMiddleware';
import configureReducer from './configureReducer';
import { loadStorage } from './configureStorage';
import { applyMiddleware, createStore } from 'redux';
// import { browserHistory } from 'react-router';
// import { routerMiddleware } from 'react-router-redux';

const configureStore = (options = { initialState: {} }) => {
  const { initialState } = options;

  const reducer = configureReducer(/*If server rendering: initialState*/);

  const middleware = configureMiddleware();

  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
  );

  loadStorage(store)
    .then((newState) => {
      console.log('Loaded state:', newState);
    })
    .catch(() => console.log('Failed to load previous state'));

  return store;
};

export default configureStore;
