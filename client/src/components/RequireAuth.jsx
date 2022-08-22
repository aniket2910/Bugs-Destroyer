import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { authStatus } = useSelector((store) => store.auth);
  const location = useLocation();
  console.log(authStatus);
  if (!authStatus) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <>{children}</>;
};

export default RequireAuth;
