import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import instruments from '../../Components/utils/instruments.json';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Detail = () => {
    const { id } = useParams();
    const instrumento = instruments.find(item => item.id === parseInt(id));
    const navigate = useNavigate();
    const [count, setCount] = useState(0);

    const handleClick = () => {
        navigate(`/`);
    };

    const handleClickView = () => {
        navigate(`/DetailView/${id}`);
    };

    const handleIncrease = () => {
        setCount(count + 1);
    };

    const handleDecrease = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    if (!instrumento) {
        return <div>Instrumento no encontrado</div>;
    }

    return (
        <div className="hero-content detail-hero">
            <div className="container bg-color py-5">
                <div className="row">


                    <div className="col-md-6">
                        <div className="d-flex align-items-center mb-3">
                            <img
                                src="../public/images/icons/iconBack.svg"
                                alt="Volver atrás"
                                onClick={handleClick}
                                style={{ cursor: 'pointer' }}
                                className="me-2"
                            />
                            <p className="mb-0" style={{ cursor: 'pointer' }} onClick={handleClick}>
                                Volver atrás
                            </p>
                        </div>

                        <div className="detail-block-content">
                            <h1>{instrumento.instrumento}</h1>
                            <p className="detail-detalleView">
                                {instrumento.detalleView}
                            </p>
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
                    <div className="col-12 col-md-6 d-flex justify-content-center img-border">
                        <img
                            src={instrumento.img}
                            alt={instrumento.instrumento}
                            className="img-thumbnail img-detail img-fluid"
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Detail;
