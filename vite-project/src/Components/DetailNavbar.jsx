import React from 'react';
import { Link } from 'react-router-dom';

const DetailNavbar = () => {
  return (
    <nav>
      <div style={{ backgroundColor: '#F1EFEB', height: '180px' }}>
        <div style={{ display: 'flex', justifyContent: 'right', paddingTop: '30px', marginBottom: '-40px' }}>
          <button style={{ marginRight: '20px', borderRadius: '20px', height: '40px', width: '150px', backgroundColor: 'black', color: 'white' }}>CREAR CUENTA</button><button style={{ marginRight: '20px', borderRadius: '20px', height: '40px', width: '150px', backgroundColor: 'black', color: 'white' }}> INICIAR SESIÓN</button>
        </div>
        <div>
          <a href="/">
            <img src="/public/images/Logos/LOGO.SVG" alt="" />
          </a>
        </div>
        <div className="heroDetail">
          <ul className='navDetail'>
            <li style={{ fontWeight: 'lighter', fontSize: '16px', }}><a href="/">INICIO</a></li>
            <li style={{ fontWeight: 'lighter', fontSize: '16px', }} ><a href="/products">ALQUILER DE INSTRUMENTOS</a></li>
            <li style={{ fontWeight: 'lighter', fontSize: '16px', }}><a href="/contact">CATEGORÍAS</a></li>
            <li style={{ fontWeight: 'lighter', fontSize: '16px', }}><a href="/about">CONTACTO</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DetailNavbar;