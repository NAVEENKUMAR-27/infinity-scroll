import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Login_path } from '../Path/RoutingPath';

const AuthUser = () => {
    const storedValue = localStorage.getItem('Login');
    return  JSON.parse(storedValue);
};

export const ProtectRoute = () => {
    const isAuth = AuthUser();

    return isAuth ? <Outlet /> : <Navigate to={Login_path} />;
}
