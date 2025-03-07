
import { Navigate  } from 'react-router-dom'; 

const AdminPublicRoute = ({children}) => {
  const isAuthenticated = localStorage.getItem("id")
      if (!isAuthenticated) {
        return <>{children}</>
      } else 
        return <Navigate to="/dashboard" />;
      
};

export default AdminPublicRoute;
