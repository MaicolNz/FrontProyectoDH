import React from 'react';
import { NavDropdown, Button } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

const UserMenu = () => {
  const { isLoggedIn, logout, user } = useAuth();
  // Verifica si el rol del usuario es ADMIN
  const isAdmin = user ? user.role[0] === 'ADMIN' : false;
  console.log(user)

  return (
    <>
      {isLoggedIn ? (
        <NavDropdown
          title={user ? `${user.nombre} ${user.apellido}` : 'Nombre Genérico'}
          id="user-menu-dropdown"
          align="end"
        >
          <NavDropdown.Item href="/profile">Mi perfil</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/" onClick={logout}>Cerrar sesión</NavDropdown.Item>
          {isAdmin && (
            <>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/admin">Administrar</NavDropdown.Item>
            </>
          )}
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