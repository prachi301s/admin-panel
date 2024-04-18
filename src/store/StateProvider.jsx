import React, { createContext, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess, logout } from "./useAction";
import { initialState } from "./reducre";

const UserContext = createContext([initialState, () => initialState]);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const user = useSelector((state) => state.user);
  // console.log(user);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
