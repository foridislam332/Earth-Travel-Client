import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, admin } = useAuth();
    let location = useLocation();
    if (!admin || isLoading) {
        return (<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>)
    }
    if (user?.email && admin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }}></Navigate>;

};

export default AdminRoute;