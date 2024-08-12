import React from 'react';
import { Link } from 'react-router-dom';

const DetailNavbar = () => {
  return (
    <nav>
      <div className='detailnavbar-contenedor'>
        <div className='blockbutton'>
          <button>CREAR CUENTA</button>
          <button>INICIAR SESIÓN</button>
        </div>
        <div>
          <a href="/">
            <img src="/public/images/Logos/Logo White.png" alt="Logo" />
          </a>
        </div>
        <div className="heroDetail">
          <ul className='navDetail'>
            <li><a href="/">INICIO</a></li>
            <li><a href="/products">ALQUILER DE INSTRUMENTOS</a></li>
            <li><a href="/contact">CATEGORÍAS</a></li>
            <li><a href="/about">CONTACTO</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DetailNavbar;