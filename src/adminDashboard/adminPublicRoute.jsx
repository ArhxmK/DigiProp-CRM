import { Navigate } from "react-router-dom";

const AdminPublicRoute = ({ children }) => {
    const isAdminAuthenticated = localStorage.getItem("admin") === "true"; // Ensure correct type check

    return isAdminAuthenticated ? <Navigate to="/dashboard" /> : children; // Redirect only if admin is logged in
};

export default AdminPublicRoute;
