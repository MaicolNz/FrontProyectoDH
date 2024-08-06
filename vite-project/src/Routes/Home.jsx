import React from 'react';
import Card from '../Components/Card';
import instruments from '../Components/utils/instruments.json';
import Layout from '../Layout/Layout';
import '../index.css'; // Importar los estilos globales
import '../App.css'; // Importar los estilos específicos

const Home = () => {
  // Categorías con imágenes
  const categories = [
    { name: 'Teclado', image: '/public/images/categoria/Teclado.jpg' },
    { name: 'Cuerda', image: '/public/images/categoria/Cuerda.jpg' },
    { name: 'Viento', image: '/public/images/categoria/Viento.jpg' },
    { name: 'Percusión', image: '/public/images/categoria/Percusion.jpg' },
    { name: 'Accesorios', image: '/public/images/categoria/Accesorios.jpg' },
  ];

  return (
    <div>
      <section className="categories">
        <div style={{ backgroundColor: '#F1EFEB', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-32px' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'lighter', color: 'black' }}>CATEGORÍAS</h2>
        </div>
        <div className="category-list">
          {categories.map((category, index) => (
            <div key={index} className="category-item">
              <img src={category.image} alt={category.name} />
              <p style={{ fontSize: '30px', fontWeight: 'lighter', color: 'black' }}>{category.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="featured-products">
        <div style={{ backgroundColor: '#F1EFEB', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-32px' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'lighter', color: 'black' }} >DESTACADOS</h2>
        </div>
        <div className="product-list">
        {
  instruments.map((instrument, index) => (
    <Card 
      key={instrument.id} 
      instrumento={instrument.instrumento} 
      image={instrument.img} 
      id={instrument.id}
    />
  ))
}
        </div>
      </section>
    </div>
  );
};

export default Home;