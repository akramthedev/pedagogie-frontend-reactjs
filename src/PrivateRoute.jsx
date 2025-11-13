import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, roleAllowed }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (roleAllowed) {
    if (Array.isArray(roleAllowed)) {
      if (!roleAllowed.includes(role)) {
        if (role === "admin") return <Navigate to="/admin/dashboard" />;
        if (role === "enseignant") return <Navigate to="/prof/planning" />;
        if (role === "eleve") return <Navigate to="/student/planning" />;
      }
    } else if (roleAllowed !== role) {
      if (role === "admin") return <Navigate to="/admin/dashboard" />;
      if (role === "enseignant") return <Navigate to="/prof/planning" />;
      if (role === "eleve") return <Navigate to="/student/planning" />;
    }
  }

  return children;
};

export default PrivateRoute;
