
import { Navigate  } from 'react-router-dom';

const AdminPrivateRoute = ({children}) => {
    const isAuthenticated = localStorage.getItem("id") || localStorage.getItem("user")

      if (isAuthenticated) {
        return <>{children}</>
      } else 
        return <Navigate to="/login" />;
      
};

export default AdminPrivateRoute;
