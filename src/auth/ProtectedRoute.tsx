// Ensure you are importing correctly
import { useAuth0 } from "@auth0/auth0-react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  // Check if the authentication is still loading
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // If authenticated, render the Outlet, otherwise navigate away
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
