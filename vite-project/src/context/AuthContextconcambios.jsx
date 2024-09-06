import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// Función para decodificar el token JWT
const decodeToken = (token) => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.sub || payload.userId; // Asegúrate de retornar el campo correcto
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const saved = localStorage.getItem('isLoggedIn');
    return saved === 'true';
  });

  // const login = (userData) => {
  //   setUser(userData);
  //   setIsLoggedIn(true);
  //   localStorage.setItem('isLoggedIn', 'true');
  //   localStorage.setItem('user', JSON.stringify(userData));
  // };

  // const login = (userData) => {
  //   const token = userData.token; // Extrae el token
  //   console.log('Token recibido:', token);
  //   localStorage.setItem('isLoggedIn', 'true');
  //   localStorage.setItem('token', token); // Guarda el token en el localStorage
  
  //   // Aquí podrías decodificar el token o usarlo para hacer una petición
  //   const userId = decodeToken(token); // Suponiendo que tienes una función para decodificar el token
  //   fetchUser(userId); // Obtén los datos del usuario y actualiza el estado
  // };
  const login = (userData) => {
    const token = userData.token;
    console.log('Token recibido:', token);
  
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('token', token);
  
    const userId = decodeToken(token);
    console.log('User ID decodificado:', userId);
  
    if (userId) {
      fetchUser(userId);
    } else {
      console.error('No se pudo decodificar el token para obtener el userId');
    }
  };
  

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
  };

  const fetchUser = async (userId) => {
    if (!userId) {
      console.error('No userId provided');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/api/usuarios/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
      } else {
        console.error('Error fetching current user:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching current user:', error);
    }
  };

  // useEffect(() => {
  //   const storedUser = localStorage.getItem('user');
  //   if (storedUser) {
  //     try {
  //       setUser(JSON.parse(storedUser));
  //     } catch (error) {
  //       console.error('Error parsing stored user data:', error);
  //       localStorage.removeItem('user'); // Limpiar datos corruptos si es necesario
  //     }
  //   }
  // }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
  
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        localStorage.removeItem('user');
      }
    } else if (token) {
      const userId = decodeToken(token);
      if (userId) {
        fetchUser(userId); // Carga el usuario si hay un token pero no un usuario guardado
      }
    }
  }, []);
  

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
