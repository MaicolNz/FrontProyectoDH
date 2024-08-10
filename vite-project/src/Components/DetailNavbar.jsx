import React from 'react';
import { Link } from 'react-router-dom';

const DetailNavbar = () => {
  return (
    <nav>
      <div style={{ 
        height: '180px', 
        position: 'fixed', 
        top: '0', 
        left: '0', 
        right: '0', 
        zIndex: '1'  // Asegúrate de que el navbar esté por encima de otros elementos
      }}>
        <div style={{ display: 'flex', justifyContent: 'right', paddingTop: '30px', marginBottom: '-40px' }}>
          <button style={{ marginRight: '20px', borderRadius: '20px', height: '40px', width: '150px', backgroundColor: 'black', color: 'white' }}>CREAR CUENTA</button>
          <button style={{ marginRight: '20px', borderRadius: '20px', height: '40px', width: '150px', backgroundColor: 'black', color: 'white' }}>INICIAR SESIÓN</button>
        </div>
        <div>
          <a href="/">
            <img src="/public/images/Logos/Logo White.png" alt="Logo" />
          </a>
        </div>
        <div className="heroDetail">
          <ul className='navDetail' style={{ display: 'flex', justifyContent: 'center', padding: '10px 0', listStyle: 'none', margin: '0', position: 'relative', top: '-100px' }}>
            <li style={{ fontWeight: 'lighter', fontSize: '16px', marginRight: '20px' }}><a href="/">INICIO</a></li>
            <li style={{ fontWeight: 'lighter', fontSize: '16px', marginRight: '20px' }}><a href="/products">ALQUILER DE INSTRUMENTOS</a></li>
            <li style={{ fontWeight: 'lighter', fontSize: '16px', marginRight: '20px' }}><a href="/contact">CATEGORÍAS</a></li>
            <li style={{ fontWeight: 'lighter', fontSize: '16px' }}><a href="/about">CONTACTO</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DetailNavbar;