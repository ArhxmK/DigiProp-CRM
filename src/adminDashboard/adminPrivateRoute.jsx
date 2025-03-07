import { Navigate } from "react-router-dom";

const AdminPrivateRoute = ({ children }) => {
    const isAdminAuthenticated = localStorage.getItem("admin") === "true"; // Ensure correct type check

    return isAdminAuthenticated ? children : <Navigate to="/adminlogin" />; // Redirect if not logged in
};

export default AdminPrivateRoute;
