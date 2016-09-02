import { combineReducers } from 'redux';

import { reducer as app } from './app';
import { reducer as page } from './page'
import { routerReducer as routing } from 'react-router-redux';
import { updateStateOnStorageLoad } from './configureStorage';

const configureReducer = () => {
  let reducer = combineReducers({
    app,
    page,
    routing,
  });

  reducer = updateStateOnStorageLoad(reducer);

  return reducer;
};

export default configureReducer;
