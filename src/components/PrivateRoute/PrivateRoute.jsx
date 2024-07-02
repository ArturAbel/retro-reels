import { useAuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} />;
};
