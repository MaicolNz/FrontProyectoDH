import React, { useState } from "react";
import { useLocation } from "react-router-dom"; 
import HamburgerMenu from "./HamburgerMenu";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import UserMenu from "./Sesion"; 

const Navbar = () => {
  const location = useLocation(); 
  const isAdminPanel = location.pathname.startsWith('/Admin'); 
  const isUserPanel = location.pathname.startsWith('/profile'); // Detectar si es un usuario registrado

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="/images/logos/Logo White.png"
            alt="Logo"
            className="d-inline-block align-top"
          />
        </a>
        
        {/* Mostrar la sección correspondiente al administrador o usuario */}
        {isAdminPanel ? (
          <>
            <h1 className="text-light">Administrador</h1>
            <div className="d-flex">
              <UserMenu />
            </div>
          </>
        ) : isUserPanel ? (
          <>
            <h1 className="text-light">Usuario</h1>
            <div className="d-flex">
              <UserMenu />
            </div>
          </>
        ) : (
          <>
            <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <div className={`collapse navbar-collapse bg-dark ${isMenuOpen ? "show" : ""}`} id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/">INICIO</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/products">ALQUILER DE INSTRUMENTOS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">CATEGORÍAS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">CONTACTO</a>
                </li>
              </ul>
              <div className="d-flex">
                <UserMenu />
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

