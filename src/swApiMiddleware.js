import 'isomorphic-fetch';
import { Schema, arrayOf, normalize } from 'normalizr';
import { camelizeKeys } from 'humps';

const API_ROOT = 'http://swapi.co/api/';
export const CALL_SW_API = 'CALL_SW_API';

const userSchema = new Schema('planets', {
  idAttribute: 'name'
})

// Schemas for SW API responses.
export const Schemas = {
  PLANET: userSchema,
  PLANET_ARRAY: arrayOf(userSchema),
}

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function callApi(endpoint, schema) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

  return fetch(fullUrl)
    .then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      const camelizedJson = camelizeKeys(json.results)

      return Object.assign({},
        normalize(camelizedJson, schema),
      )
    });
}

export default store => next => action => {
  const callAPI = action[CALL_SW_API];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  let { endpoint } = callAPI;
  const { schema, types } = callAPI;

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState());
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }

  if (!schema) {
    throw new Error('Specify one of the exported Schemas.')
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }

  debugger;

  function actionWith(data) {
    debugger;

    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_SW_API];
    return finalAction;
  }

  const [requestType, successType, failureType] = types;
  debugger;

  next(actionWith({ type: requestType }));
  debugger;

  return callApi(endpoint, schema).then(
    response => next(actionWith({
      response,
      type: successType,
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened',
    }))
  );
};
