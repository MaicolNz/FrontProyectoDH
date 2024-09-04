import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';
import instruments from '../Components/utils/instruments.json';
import categoriasPermitidas from '../Components/utils/categoriasPermitidas'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination } from 'react-bootstrap';

const Home = () => {
    const [shuffledInstruments, setShuffledInstruments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);
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

    const filteredInstruments = selectedCategory
        ? shuffledInstruments.filter(instrument => instrument.categoria === selectedCategory)
        : shuffledInstruments;

    const currentInstruments = filteredInstruments.slice(indexOfFirstInstrument, indexOfLastInstrument);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(filteredInstruments.length / instrumentsPerPage);

    return (
        <div className="container">
            <section className="categories py-2">
                <div className="text-center mb-2">
                    <h2 className="categories-title">CATEGORÍAS</h2>
                </div>
                <div className="row justify-content-between">
                    {categoriasPermitidas.map((category, index) => (
                        <div key={index} className="category-card col-lg-2 col-sm-4 col-md-4 mb-4" onClick={() => {
                            setSelectedCategory(category.name);
                            setCurrentPage(1);
                        }}
                            style={{ cursor: 'pointer' }}
                        >
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

            <section className="featured-products py-2">
                <div className="text-center mb-4">
                    <h2 className="categories-title">
                        {selectedCategory ? selectedCategory : 'DESTACADOS'}
                    </h2>
                    <div className="results-count text-muted">
                        Resultado: {filteredInstruments.length} instrumento{filteredInstruments.length !== 1 ? 's' : ''}
                    </div>
                </div>
                <div className="row">
                    {currentInstruments.length > 0 ? (
                        currentInstruments.map((instrument) => (
                            <div key={instrument.id} className="col-12 col-md-6 mb-4">
                                <Card
                                    instrumento={instrument.nombre}  // Ajustado para el nuevo campo del JSON
                                    image={instrument.imagenes[0]}  // Usando la primera imagen para el componente Card
                                    id={instrument.id}
                                    categoria={instrument.categoria}
                                    detalle={instrument.detalle}
                                />
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center">No hay instrumentos en esta categoría.</div>
                    )}
                </div>
            </section>

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
