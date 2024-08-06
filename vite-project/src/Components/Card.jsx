import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../App.css';

const Card = ({ instrumento, image, id }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/detail/${id}`);
    };

    return (
        <div className="product-card">
            <img src={image} alt={instrumento} className="product-image" />
            <h4 className="product-title">{instrumento}</h4>
            <p className="product-link" onClick={handleClick}>Ver más</p>
        </div>
    );
};

Card.propTypes = {
    instrumento: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

export default Card;