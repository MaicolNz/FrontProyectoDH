import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../App.css';

const Card = ({ instrumento, image, id, categoria, detalle,  }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/detail/${id}`);
    };

    return (
        <div className="product-card">
            <img src={image} alt={instrumento}/>
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <p style={{marginBottom: '40px', display: 'flex', justifyContent: 'flex-start', marginLeft: '10px', color: 'grey'}}>{categoria}</p>
            <h4 style={{display: 'flex', justifyContent: 'flex-start', marginLeft: '10px'}}>{instrumento}</h4>
            <p style={{marginTop: '-20px', display: 'flex', justifyContent: 'flex-start', marginLeft: '10px'}}>{detalle}</p>
            <p style={{display: 'flex', justifyContent: 'flex-end', color: 'green', textDecoration: 'underline', marginTop: '30px'}} className="product-link" onClick={handleClick}>Ver más</p>
        </div>
        </div>
    );
};

Card.propTypes = {
    instrumento: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    categoria: PropTypes.number.isRequired,
    detalle: PropTypes.number.isRequired
};

export default Card;