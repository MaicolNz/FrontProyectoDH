import React from 'react';
import '../App.css';

const Card = ({ instrumento, detalle, precioAlquiler, image }) => {
    return (
      <div className="product-card">
        <img src={image} alt={instrumento} className="product-image" />
        <h3>{instrumento}</h3>
        <p>{detalle}</p>
        <p>Alquiler: ${precioAlquiler}</p>
      </div>
    );
  };
  
  export default Card;