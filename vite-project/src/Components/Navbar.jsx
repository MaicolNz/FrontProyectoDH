import React, { useState } from 'react';

const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <nav>
      <div className='background-nav'>
        <div style={{ display: 'flex', justifyContent: 'right', paddingTop: '20px' }}>
          <button style={{ marginRight: '20px', borderRadius: '20px', height: '40px', width: '150px', backgroundColor: 'black', color: 'white' }}>CREAR CUENTA</button>
          <button style={{ marginRight: '20px', borderRadius: '20px', height: '40px', width: '150px', backgroundColor: 'black', color: 'white' }}> INICIAR SESIÓN</button>
        </div>
        <div>
          <a href="/">
            <img src="/public/images/Logos/Logo White.png" alt="" style={{ marginTop: '-20px' }} />
          </a>
        </div>
        <div className="hero">
          <ul className='nav'>
            <li style={{ fontWeight: 'lighter', fontSize: '16px' }}><a href="/">INICIO</a></li>
            <li style={{ fontWeight: 'lighter', fontSize: '16px' }} ><a href="/products">ALQUILER DE INSTRUMENTOS</a></li>
            <li style={{ fontWeight: 'lighter', fontSize: '16px' }}><a href="/contact">CATEGORÍAS</a></li>
            <li style={{ fontWeight: 'lighter', fontSize: '16px' }}><a href="/about">CONTACTO</a></li>
          </ul>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
            <h1 style={{ fontWeight: 'bold', fontSize: '64px', marginBottom: '-45px', letterSpacing: '4px' }}>TU MÚSICA</h1>
            <h1 style={{ fontWeight: 'bold', fontSize: '64px', letterSpacing: '4px' }}>NUESTRO INSTRUMENTO</h1>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '100px' }}>
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            style={{
              backgroundColor: 'white',
              color: 'black',
              borderRadius: '5px',
              width: '150px',
              border: 'none',
              cursor: 'pointer',
              padding: '5px',
              marginRight: '10px'
            }}
          >
            <option value="">Categorías</option>
            <option value="cuerda">Cuerda</option>
            <option value="teclado">Teclado</option>
            <option value="viento">Viento</option>
            <option value="percusion">Percusión</option>
            <option value="accesorios">Accesorios</option>
          </select>
          <label style={{ color: 'white', marginRight: '10px' }}>
            Fecha de inicio:
            <input
              type="date"
              style={{
                borderRadius: '5px',
                border: '1px solid #ccc',
                padding: '5px',
                width: '150px'
              }}
            />
          </label>
          <label style={{ color: 'white', marginRight: '10px' }}>
            Fecha de entrega:
            <input
              type="date"
              style={{
                borderRadius: '5px',
                border: '1px solid #ccc',
                padding: '5px',
                width: '150px'
              }}
            />
          </label>
          <button style={{ borderRadius: '10px', height: '40px', width: '150px', backgroundColor: 'grey', color: 'white' }}>BUSCAR</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
