import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import instruments from '../../Components/utils/instruments.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const Detail = () => {
    const { id } = useParams();
    const instrumento = instruments.find(item => item.id === parseInt(id));
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/`);
    };

    const handleClickView = () => {
        navigate(`/DetailView/${id}`);
    };

    if (!instrumento) {
        return <div>Instrumento no encontrado</div>;
    }

    return (
        <div className="hero-content-detail detail-hero">
            <div className="container bg-color py-3">
                <div className="d-flex justify-content-end">
                    <img
                        src="../public/images/icons/iconBack.svg"
                        alt="Volver atrás"
                        onClick={handleClick}
                        style={{ cursor: 'pointer' }}
                        className="me-2"
                    />
                    <p className="mb-0" style={{ cursor: 'pointer' }} onClick={handleClick}>
                        Volver Atrás
                    </p>
                </div>
                <h1 className='instrument-title d-flex justify-content-center'>
                    {instrumento.instrumento}
                </h1>
                <div className="detail-block-content">
                    <div className="row">

                        <div className="col-12 col-md-6 d-flex justify-content-center img-border">
                            <img
                                src={instrumento.img}
                                alt={instrumento.instrumento}
                                className="img-thumbnail img-detail img-fluid"
                            />
                        </div>
                        <div className="col-md-6">
                            <div className='detail-detalleView'>
                                {instrumento.detalleView}
                            </div>
                            <p className="detail-precio">
                                ${instrumento.precioAlquiler}/día
                            </p>
                            <div className="d-flex align-items-center mt-4">
                                <button
                                    onClick={handleClickView}
                                    className="btn btn-detail btn-secondary me-3"
                                >
                                    Ver más
                                </button>
                                <button className="btn btn-detail btn-rent">
                                    Alquilar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;