import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';
import instruments from '../Components/utils/instruments.json';
import Layout from '../Layout/Layout';
import '../index.css'; // Importar los estilos globales
import '../App.css'; // Importar los estilos específicos

const Home = () => {
  // Estado para almacenar los instrumentos en orden aleatorio
  const [shuffledInstruments, setShuffledInstruments] = useState([]);

  useEffect(() => {
    // Función para mezclar la lista de instrumentos
    const shuffleArray = (array) => {
      let currentIndex = array.length, randomIndex;

      // Mientras queden elementos por mezclar
      while (currentIndex !== 0) {
        // Seleccionar un elemento restante
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Intercambiar el elemento con el elemento en la posición actual
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
      }

      return array;
    };

    // Mezclar los instrumentos y actualizar el estado
    const shuffled = shuffleArray([...instruments]); // Copia para no modificar el array original
    setShuffledInstruments(shuffled);
  }, []); // Ejecutar solo una vez al montar

  // Categorías con imágenes
  const categories = [
    { name: 'Teclado', image: '/images/categoria/Teclado.jpg' },
    { name: 'Cuerda', image: '/images/categoria/Cuerda.jpg' },
    { name: 'Viento', image: '/images/categoria/Viento.jpg' },
    { name: 'Percusión', image: '/images/categoria/Percusion.jpg' },
    { name: 'Accesorios', image: '/images/categoria/Accesorios.jpg' },
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
          <h2 style={{ fontSize: '36px', fontWeight: 'lighter', color: 'black' }}>DESTACADOS</h2>
        </div>
        <div className="product-list">
          {shuffledInstruments.map((instrument) => (
            <Card
              key={instrument.id} 
              instrumento={instrument.instrumento} 
              image={instrument.img} 
              id={instrument.id}
              categoria={instrument.categoria}
              detalle={instrument.detalle}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;