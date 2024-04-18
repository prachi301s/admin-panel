// // src/reducers/userReducer.js

// import { LOGIN_SUCCESS, LOGOUT } from "./useAction";

// export const initialState = {
//   user: null,
// };

// const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case LOGIN_SUCCESS:
//       return {
//         ...state,
//         user: action.payload,
//       };
//     case LOGOUT:
//       return {
//         ...state,
//         user: null,
//       };
//     default:
//       return state;
//   }
// };

// export default userReducer;


import { LOGIN_SUCCESS, LOGOUT } from "./useAction";

export const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      // console.log(action.payload)
      return {
        ...state,
        user: action.payload,
      };
    
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;


