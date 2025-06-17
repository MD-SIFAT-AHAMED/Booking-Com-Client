import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";
import Sppiner from "../Pages/Shared/Sppiner";

const PrivateRouter = ({ children }) => {
  const location = useLocation();
  // console.log(location)
  const { user, loading } = useAuth();
  if (loading) {
    return <Sppiner />;
  }

  if (!user) {
    return <Navigate to={"/login"} state={location?.pathname}></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivateRouter;
