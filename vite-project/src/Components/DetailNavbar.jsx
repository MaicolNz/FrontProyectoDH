import React from 'react';
import { Link } from 'react-router-dom';

const DetailNavbar = () => {
  return (
    <nav>
      <div style={{backgroundColor: '#F1EFEB', height: '150px', paddingTop: '50px' }}>
      <div>
        <img src="/public/images/Logos/LOGO.SVG" alt="" />
      </div>
      <div className="heroDetail">
      <ul className='navDetail'>
        <li style={{fontWeight: 'lighter', fontSize: '16px',}}><a href="/">INICIO</a></li>
        <li style={{fontWeight: 'lighter', fontSize: '16px',}} ><a href="/products">ALQUILER DE INSTRUMENTOS</a></li>
        <li style={{fontWeight: 'lighter', fontSize: '16px',}}><a href="/contact">CATEGORÍAS</a></li>
        <li style={{fontWeight: 'lighter', fontSize: '16px',}}><a href="/about">CONTACTO</a></li>
      </ul>
      </div>
      </div>
    </nav>
  );
};

export default DetailNavbar;