import React, { useState } from "react";

const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="background-nav">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <a href="/">
            <img
              src="/public/images/Logos/Logo White.png"
              alt="Logo"
              style={{ marginTop: "-20px" }}
            />
          </a>
          <div className="menu-icon" onClick={toggleMenu}>
            <div className={`hamburger ${isMenuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className={`hero ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav">
            <li style={{ fontWeight: "lighter", fontSize: "16px" }}>
              <a href="/">INICIO</a>
            </li>
            <li style={{ fontWeight: "lighter", fontSize: "16px" }}>
              <a href="/products">ALQUILER DE INSTRUMENTOS</a>
            </li>
            <li style={{ fontWeight: "lighter", fontSize: "16px" }}>
              <a href="/contact">CATEGORÍAS</a>
            </li>
            <li style={{ fontWeight: "lighter", fontSize: "16px" }}>
              <a href="/about">CONTACTO</a>
            </li>
            <div className="log-button">
              <li>
                <button
                  style={{
                    marginRight: "20px",
                    borderRadius: "20px",
                    height: "40px",
                    width: "150px",
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  CREAR CUENTA
                </button>
              </li>
              <li>
                <button
                  style={{
                    marginRight: "20px",
                    borderRadius: "20px",
                    height: "40px",
                    width: "150px",
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  INICIAR SESIÓN
                </button>
              </li>
            </div>
          </ul>
        </div>

        

        <div className="hero-content">

        <div className="hero-music"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "64px",
              marginBottom: "-45px",
              letterSpacing: "4px",
            }}
          >
            TU MÚSICA
          </h1>
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "64px",
              letterSpacing: "4px",
            }}
          >
            NUESTRO INSTRUMENTO
          </h1>
        </div>
          

          <div className="search-bar">
            <select className="category-select">
              <option value="">Instrumento</option>
              <option value="cuerda">Cuerda</option>
              <option value="teclado">Teclado</option>
              <option value="viento">Viento</option>
              <option value="percusion">Percusión</option>
              <option value="accesorios">Accesorios</option>
            </select>
            <input
              type="date"
              className="date-input"
              placeholder="Fecha de inicio"
            />
            <input
              type="date"
              className="date-input"
              placeholder="Fecha de entrega"
            />
            <button className="search-button">Buscar</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
