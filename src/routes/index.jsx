import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ redirectTo }) {
    const user = "";

    return user ? <Outlet /> : <Navigate to={redirectTo} />;
}
