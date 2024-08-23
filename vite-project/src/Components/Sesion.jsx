// UserMenu.jsx

import React from 'react';
import { NavDropdown, Button } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

const UserMenu = () => {
  const { isLoggedIn, logout, user } = useAuth();

  return (
    <>
      {isLoggedIn ? (
        <NavDropdown
          title={user ? `${user.nombre} ${user.apellido}` : 'Nombre Generico'}
          id="user-menu-dropdown"
          align="end"
        >
          <NavDropdown.Item href="/profile">Mi perfil</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={logout}>Cerrar sesión</NavDropdown.Item>
        </NavDropdown>
      ) : (
        <div className="d-flex">
          <Button href="/login" variant="outline-primary">
            Iniciar sesión
          </Button>
          <Button href="/register" variant="outline-primary" className="ms-2">
            Crear Cuenta
          </Button>
        </div>
      )}
    </>
  );
};

export default UserMenu;
