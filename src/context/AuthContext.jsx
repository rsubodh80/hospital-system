// src/context/AuthContext.jsx
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // For demo: admin logged in state
  const [isAdmin, setIsAdmin] = useState(false);

  const loginAsAdmin = () => setIsAdmin(true);
  const logout = () => setIsAdmin(false);

  return (
    <AuthContext.Provider value={{ isAdmin, loginAsAdmin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
