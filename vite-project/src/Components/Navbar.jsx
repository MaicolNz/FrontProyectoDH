import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className='background-nav'>
      <div>
        <img src="/public/images/Logos/Logo White.png" alt="" />
      </div>
      <div className="hero">
      <ul className='nav'>
        <li><a href="/">Inicio</a></li>
        <li><a href="/products">Productos</a></li>
        <li><a href="/contact">Contacto</a></li>
        <li><a href="/about">Sobre Nosotros</a></li>
      </ul>
          <h1>TU MÚSICA</h1>
          <h1>NUESTRO INSTRUMENTO</h1>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;