import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./Login.css";

export const Login = () => {
  const { user, loading, loginWithEmailPassword } = useAuthContext();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await loginWithEmailPassword(email, password);
      if (user) {
        navigate("/admin");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <section className="section-login">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Link to={"/nav"} className="back-button-link">
            <button className="button">back</button>
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
          </form>
        </>
      )}
    </section>
  );
};
