import createEngine from 'redux-storage-engine-localstorage';
import storageDebounce from 'redux-storage-decorator-debounce';
import { createMiddleware, createLoader, LOAD } from 'redux-storage';

const STORAGE_NS = 'redux-storage:appName';

const engine = createEngine(STORAGE_NS); 

export const loadStorage = createLoader(engine)

export const updateStateOnStorageLoad = reducer => (state, action) => {
  if (action.type === LOAD) {
    // state = updateState(state, action.payload);
    state = Object.assign({}, state, action.payload)
  }
  return reducer(state, action);
};


const configureStorage = () => {
  const engineDebounced = storageDebounce(engine, 1500);

  return createMiddleware(engineDebounced);
};

export default configureStorage;
