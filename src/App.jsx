import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/App.css";
import "./assets/css/Login.css";
import "./index.css";

// Pages (Client Side)
import LandingPage from "./components/home/LandingPage";
import ServiceBooking from "./pages/ServiceBooking/ServiceBooking.jsx";
import ContactDetails from "./pages/ServiceBooking/ContactDetails.jsx";
import AdditionalDetails from "./pages/ServiceBooking/AdditionalDetails.jsx";
import SuccessPage from "./pages/ServiceBooking/SuccessPage.jsx";
import PaymentPage from "./pages/ServiceBooking/Payments.jsx";
import About from "./pages/AboutPage/About.jsx";
import Login from "./Auth/Login/Login.jsx";
import SignUp from "./Auth/SignUp/SignUp.jsx";

// Admin Pages
import AdminLogin from "./adminDashboard/AdminLogin.jsx";
import DashboardStats from "./adminDashboard/dashboard.jsx";
import OrdersTable from "./adminDashboard/ordersTable.jsx";
import UsersTable from "./adminDashboard/usersTable.jsx";

// Route Guards
import ClientPrivateRoute from "./Auth/clientPrivateRoute.jsx"; 
import ClientPublicRoute from "./Auth/clientPublicRoute.jsx"; 
import AdminPrivateRoute from "./adminDashboard/adminPrivateRoute.jsx";
import AdminPublicRoute from "./adminDashboard/adminPublicRoute.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes (Client Side) */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/servicebooking" element={<ServiceBooking />} />
        <Route path="/contactdetails" element={<ContactDetails />} />
        <Route path="/additionaldetails" element={<AdditionalDetails />} />
        <Route path="/payments" element={<PaymentPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/about" element={<About />} />

        {/* Client Authentication Routes */}
        <Route path="/login" element={<ClientPublicRoute><Login /></ClientPublicRoute>} />
        <Route path="/signup" element={<ClientPublicRoute><SignUp /></ClientPublicRoute>} />

        {/* Admin Authentication Routes */}
        <Route path="/adminlogin" element={<AdminPublicRoute><AdminLogin /></AdminPublicRoute>} />

        {/* Admin Dashboard (Protected Routes) */}
        <Route path="/dashboard" element={<AdminPrivateRoute><DashboardStats /></AdminPrivateRoute>} />
        <Route path="/dashboard/orders" element={<AdminPrivateRoute><OrdersTable /></AdminPrivateRoute>} />
        <Route path="/dashboard/users" element={<AdminPrivateRoute><UsersTable /></AdminPrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import UserTableData from "./adminDashboard/UserTableData"; // Import the new component


