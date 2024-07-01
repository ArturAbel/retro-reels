import { useAuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (user) {
    return <Component {...rest} />;
  }

  return <Navigate to={"/login"} />;
};
