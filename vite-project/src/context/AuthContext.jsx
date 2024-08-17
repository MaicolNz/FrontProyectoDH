// AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Cargar el estado de autenticación del localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Obtiene el estado de autenticación del localStorage o usa `false` si no está definido
    const saved = localStorage.getItem('isLoggedIn');
    return saved === 'true'; // Convierte el valor de string a booleano
  });

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true'); // Guarda el estado en localStorage
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn'); // Elimina el estado del localStorage
  };

  // Limpia el estado de autenticación cuando el componente se desmonta
  useEffect(() => {
    return () => {
      localStorage.removeItem('isLoggedIn');
    };
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
