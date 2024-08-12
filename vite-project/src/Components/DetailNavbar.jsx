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
          <ul className='navDetail' style={{ display: 'flex', justifyContent: 'center', padding: '10px 0', listStyle: 'none', margin: '0', position: 'relative', top: '-100px' }}>
            <li style={{ fontWeight: "lighter", fontSize: "16px", backgroundColor: "black", borderRadius: "20px", width: "150px", height: "40px", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}><a href="/">INICIO</a></li>
            <li style={{ fontWeight: "lighter", fontSize: "16px", backgroundColor: "black", borderRadius: "20px", width: "250px", height: "40px", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}><a href="/products">ALQUILER DE INSTRUMENTOS</a></li>
            <li style={{ fontWeight: "lighter", fontSize: "16px", backgroundColor: "black", borderRadius: "20px", width: "150px", height: "40px", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}><a href="/contact">CATEGORÍAS</a></li>
            <li style={{ fontWeight: "lighter", fontSize: "16px", backgroundColor: "black", borderRadius: "20px", width: "150px", height: "40px", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}><a href="/about">CONTACTO</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DetailNavbar;