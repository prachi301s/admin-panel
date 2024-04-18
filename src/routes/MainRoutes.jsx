import React from "react";
import { Route, Routes } from "react-router-dom";
import { admin_routes } from "./DashboardRoutes";
import { ca_routes } from "./CaRoutes";
import ProtectedRoute from "./ProtectedRoutes";
import Login from "../pages/authPages/Login";


export const PrimaryRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path={"/login"} element={<Login />} />
        {admin_routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<ProtectedRoute>{route.element}</ProtectedRoute>}
          />
        ))}
        {/* {ca_routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={<ProtectedRoute>{route.element}</ProtectedRoute>}
        />
      ))} */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

// export MainRoutes;

export const SecondaryRoutes = () => {
  return (
    <Routes>
      <Route exact path={"/login"} element={<Login />} />
      {ca_routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={<ProtectedRoute>{route.element}</ProtectedRoute>}
        />
      ))}
      {/* <Route path="/login" element={<Login/>} /> */}
    </Routes>
  );
};
