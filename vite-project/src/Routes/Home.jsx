import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';
import instruments from '../Components/utils/instruments.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination } from 'react-bootstrap';

const Home = () => {
  const [shuffledInstruments, setShuffledInstruments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const instrumentsPerPage = 10; 

  useEffect(() => {
    const shuffleArray = (array) => {
      let currentIndex = array.length, randomIndex;

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
      }

      return array;
    };

    const shuffled = shuffleArray([...instruments]);
    setShuffledInstruments(shuffled);
  }, []);

   const indexOfLastInstrument = currentPage * instrumentsPerPage;
   const indexOfFirstInstrument = indexOfLastInstrument - instrumentsPerPage;
   const currentInstruments = shuffledInstruments.slice(indexOfFirstInstrument, indexOfLastInstrument);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(shuffledInstruments.length / instrumentsPerPage);

  const categories = [
    { name: 'Teclado', image: '/images/categoria/Teclado.jpg' },
    { name: 'Cuerda', image: '/images/categoria/Cuerda.jpg' },
    { name: 'Viento', image: '/images/categoria/Viento.jpg' },
    { name: 'Percusión', image: '/images/categoria/Percusion.jpg' },
    { name: 'Accesorios', image: '/images/categoria/Accesorios.jpg' },
  ];

  return (
      <div className="container">
          <section className="categories py-2">
              <div className="text-center mb-2">
                  <h2 className="categories-title">CATEGORÍAS</h2>
              </div>
              <div className="row justify-content-between">
                  {categories.map((category, index) => (
                      <div key={index} className="category-card col-lg-2 col-sm-4 col-md-4 mb-4">
                          <div className="h-100">
                              <img src={category.image} alt={category.name} className="card-img-top" />
                              <div className="card-body text-center">
                                  <h6 className="card-text">{category.name}</h6>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </section>

          {/* Sección de Productos Destacados */}
          <section className="featured-products py-2">
              <div className="text-center mb-4">
                  <h2 className="categories-title">DESTACADOS</h2>
              </div>
              <div className="row">
                  {currentInstruments.map((instrument) => (
                      <div key={instrument.id} className="col-12 col-md-6 mb-4">
                          <Card
                              instrumento={instrument.instrumento}
                              image={instrument.img}
                              id={instrument.id}
                              categoria={instrument.categoria}
                              detalle={instrument.detalle}
                          />
                      </div>
                  ))}
              </div>
          </section>

          {/* Paginación */}
          <section className="pagination-sec">
              <Pagination className="justify-content-center">
                  <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
                  <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                  {[...Array(totalPages).keys()].map((number) => (
                      <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => handlePageChange(number + 1)}>
                          {number + 1}
                      </Pagination.Item>
                  ))}
                  <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
                  <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
              </Pagination>
          </section>
      </div>
  );
};

export default Home;
