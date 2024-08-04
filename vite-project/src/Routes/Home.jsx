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
    <Layout>
      <section className="categories">
        <h2>Categorías</h2>
        <div className="category-list">
          {categories.map((category, index) => (
            <div key={index} className="category-item">
              <img src={category.image} alt={category.name} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="featured-products">
        <h2>Destacados</h2>
        <div className="product-list">
          {instruments.slice(0, 10).map((instrument, index) => (
            <Card 
              key={index} 
              instrumento={instrument.instrumento} 
              detalle={instrument.detalle} 
              precioAlquiler={instrument.precioAlquiler}
              image={`/public/images/${instrument.instrumento.toLowerCase().replace(/ /g, '_')}.jpg`} 
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Home;