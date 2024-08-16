import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
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
        <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
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
            <a className="btn btn-outline-primary me-2" href="/login">Log in</a>
            <a className="btn btn-primary" href="/register">Crear Cuenta</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
