import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/Auth/AutContext";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace={true} />;
  }
  return <Outlet />;
};
export default ProtectedRoute;
