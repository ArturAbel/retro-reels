import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/fireBaseConfig";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});

  const refinedFirebaseAuthErrorMessage = (error) => {
    return error.split("auth/")[1].replace(/-/g, " ");
  };

  const loginWithEmailPassword = async (email, password) => {
    try {
      setLoading(true);
      setError(null);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setUser(user);
    } catch (error) {
      const errorCode = error.code;
      const refinedError = refinedFirebaseAuthErrorMessage(errorCode);
      setError(refinedError);
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result;
  };

  const logOut = () => {
    setLoading(true);
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loginWithEmailPassword,
        setLoading,
        setError,
        loading,
        logOut,
        error,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
