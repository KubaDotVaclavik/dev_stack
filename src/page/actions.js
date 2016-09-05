import { CALL_SW_API, Schemas } from '../swApiMiddleware';

export const SW_REQUEST = 'SW_REQUEST';
export const SW_SUCCESS = 'SW_SUCCESS';
export const SW_FAILURE = 'SW_FAILURE';

// Fetches a single user from Github API.
// Relies on the custom API middleware defined in ../middleware/api.js.
export const fetchPlanets = () => ({
  [CALL_SW_API]: {
    types: [SW_REQUEST, SW_SUCCESS, SW_FAILURE],
    endpoint: 'planets/',
    schema: Schemas.PLANET_ARRAY
  },
});
