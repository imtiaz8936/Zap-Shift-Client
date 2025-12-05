import React from "react";
import useAuth from "../../Hooks/useAuth";
import { DotLoader } from "react-spinners";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center my-10">
        <DotLoader color="red"></DotLoader>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/signin" state={location.pathname}></Navigate>;
  }

  return children;
};

export default PrivateRoute;
