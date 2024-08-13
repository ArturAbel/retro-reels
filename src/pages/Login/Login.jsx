import { Loading } from "../../components/Loading/Loading";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Login.css";

export const Login = () => {
  const { user, loading, error, setError, loginWithEmailPassword } =
    useAuthContext();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await loginWithEmailPassword(email, password);
    } catch (error) {
      console.error("Login error message:", error);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/admin/admin-records");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(null), 2000);
    }
  }, [error, setError]);

  return (
    <section className="section-login">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Link to={"/nav"} className="login-back-button-link">
            <button className="button login-back-button">back</button>
          </Link>
          <form onSubmit={handleLogin} className="login-form">
            <h4 className="login-title">admin log-in</h4>
            <div className="login-input-container">
              <input
                className="login-input"
                placeholder="email"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login-input-container">
              <input
                className="login-input"
                placeholder="password"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="button">
              enter
            </button>
            {error && <p className="login-error-message">{error}</p>}
          </form>
        </>
      )}
    </section>
  );
};
