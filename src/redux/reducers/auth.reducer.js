import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from '../actionTypes';

const initialState = {
  accessToken: sessionStorage.getItem('ytc-access-token')
    ? sessionStorage.getItem('ytc-access-token')
    : null,
  user: sessionStorage.getItem('ytc-user')
    ? JSON.parse(sessionStorage.getItem('ytc-user'))
    : null,
  loading: false,
};

export const authReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    // When user try to log in
    case LOGIN_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    // If Login is succesfull
    case LOGIN_SUCCESS:
      return {
        ...prevState,
        accessToken: payload,
        loading: false,
      };

    // If Login fails
    case LOGIN_FAIL:
      return {
        ...prevState,
        accessToken: null,
        loading: true,
        error: payload,
      };

    // Loading user profile
    case LOAD_PROFILE:
      return {
        ...prevState,
        user: payload,
      };

    // Default case
    default:
      return prevState;
  }
};
