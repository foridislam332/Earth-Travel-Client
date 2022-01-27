import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) return <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>;
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoute;