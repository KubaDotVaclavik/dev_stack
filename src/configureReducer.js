import { combineReducers } from 'redux';

import { reducer as app } from './app';
import { reducer as page } from './page';
import { routerReducer as routing } from 'react-router-redux';
import { updateStateOnStorageLoad } from './configureStorage';

// Updates an entity cache in response to any action with response.entities.
function entities(state = { planets: {}, starships: {} }, action) {
  debugger;
  if (action.response && action.response.entities) {
    return Object.assign({}, state, action.response.entities)
  }

  return state
}

const configureReducer = () => {
  let reducer = combineReducers({
    app,
    routing,
    entities
  });

  reducer = updateStateOnStorageLoad(reducer);

  return reducer;
};

export default configureReducer;
