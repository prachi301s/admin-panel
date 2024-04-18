import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../store/StateProvider";

const ProtectedRoute = ({ children }) => {

  const { user } = useUser();
  return user === null ? (
    <>
      <Navigate replace to="/login" />
    </>
  ) : (
    children
  );

};

export default ProtectedRoute;
