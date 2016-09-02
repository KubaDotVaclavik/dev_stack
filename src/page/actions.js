import {CALL_SW_API} from '../apiMiddleware';

export const SW_REQUEST = 'SW_REQUEST'
export const SW_SUCCESS = 'SW_SUCCESS'
export const SW_FAILURE = 'SW_FAILURE'

// Fetches a single user from Github API.
// Relies on the custom API middleware defined in ../middleware/api.js.
export const fetchPlanets = (login) => {
    debugger;
  return {
    [CALL_SW_API]: {
      types: [ SW_REQUEST, SW_SUCCESS, SW_FAILURE ],
      endpoint: `planets/1/`,
    }
  }
}

export const CHANGE_PAGE_VAL = 'CHANGE_PAGE_VAL';

export const changeVal = (e) => ({
    type: CHANGE_PAGE_VAL,
    payload: {
        value: e.target.value
    }
})