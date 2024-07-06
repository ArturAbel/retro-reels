import { useAuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import { Loading } from "../Loading/Loading";

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} />;
};
