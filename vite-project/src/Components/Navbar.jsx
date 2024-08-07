import React, {useState} from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <div className='background-nav'>
        <div style={{display: 'flex', justifyContent: 'right', paddingTop: '20px'}}>
          <button style={{marginRight: '20px', borderRadius: '20px', height: '40px', width: '150px', backgroundColor: 'black', color: 'white' }}>CREAR CUENTA</button><button style={{marginRight: '20px', borderRadius: '20px', height: '40px', width: '150px', backgroundColor: 'black', color: 'white' }}> INICIAR SESIÓN</button>
        </div>
      <div>
        <img src="/public/images/Logos/Logo White.png" alt="" style={{marginTop: '-20px'}} />
      </div>
      <div className="hero">
      <ul className='nav'>
        <li style={{fontWeight: 'lighter', fontSize: '16px',}}><a href="/">INICIO</a></li>
        <li style={{fontWeight: 'lighter', fontSize: '16px',}} ><a href="/products">ALQUILER DE INSTRUMENTOS</a></li>
        <li style={{fontWeight: 'lighter', fontSize: '16px',}}><a href="/contact">CATEGORÍAS</a></li>
        <li style={{fontWeight: 'lighter', fontSize: '16px',}}><a href="/about">CONTACTO</a></li>
      </ul>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px'}}>
          <h1 style={{fontWeight: 'bold', fontSize: '64px',  marginBottom: '-45px', letterSpacing: '4px'}}>TU MÚSICA</h1>
          <h1 style={{fontWeight: 'bold', fontSize: '64px', letterSpacing: '4px' }}>NUESTRO INSTRUMENTO</h1>
      </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '100px'}}><button 
          onClick={toggleDropdown}
          style={{
            backgroundColor: '#000A19',
            color: 'white',
            borderRadius: '5px',
            width: '150px',
            height: '40px',
            border: 'none',
            cursor: 'pointer',
            position: 'relative'
          }}
        >
          Categorías
        </button>
        {isOpen && (
          <select
            style={{
             
            }}
            onChange={() => setIsOpen(false)} // Opcional: cerrar el dropdown al seleccionar una opción
          >
            <option value="">Opción 1</option>
            <option value="">Opción 2</option>
            <option value="">Opción 3</option>
          </select>
        )} <label>
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
      <label>
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
      </label><button>BUSCAR</button></div>
      
      </div>
    </nav>
  );
};

export default Navbar;