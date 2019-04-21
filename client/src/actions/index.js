import axios from 'axios';
import {
  FETCHING_USER,
  FETCHED_USER_SUCCESS,
  FETCHED_USER_FAILURE
} from '../constants';
import API_ENDPOINTS from '../helpers/endpoints';

// Example actions with thunk dispatch
export function logUser(userObj) {
  return (dispatch, getState) => {
    dispatch({
      type: FETCHING_USER
    });

    axios
      .get(API_ENDPOINTS.TEST_API)
      .then(resp => {
        if (resp.status === 200 && resp.data) {
          return dispatch({
            type: FETCHED_USER_SUCCESS,
            payload: userObj
          });
        }
        return dispatch({
          type: FETCHED_USER_FAILURE,
          payload: 'API error'
        });
      })
      .catch(err => {
        return dispatch({
          type: FETCHED_USER_FAILURE,
          payload: err
        });
      });
  };
}
