// src/reducers.js

import { combineReducers } from 'redux';
import userReducer from './reducre';


const rootReducer = combineReducers({
  user: userReducer,
  
});

export default rootReducer;