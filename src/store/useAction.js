// src/actions/userActions.js

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const loginSuccess = (user) => ({
  
  type: LOGIN_SUCCESS,
  payload: user,
});
// console.log(loginSuccess.type);
export const logout = () => ({
  type: LOGOUT,
});
