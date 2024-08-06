import React from 'react';
import { useParams } from 'react-router-dom';
import instruments from '../Components/utils/instruments.json'

const Detail = () => {
    const { id } = useParams();
    const instrumento = instruments.find(item => item.id === parseInt(id));

    if (!instrumento) {
        return <div>Instrumento no encontrado</div>;
    }

    return (
        <div>
            <h1>{instrumento.instrumento}</h1>
            <img style={{ width: '350px', height: '300px', border: '1px solid black' }} src={instrumento.img} alt={instrumento.instrumento} />
            <p>Categoria: {instrumento.categoria}</p>
            <p>Detalle: {instrumento.detalle}</p>
            <p>Precio de alquiler: ${instrumento.precioAlquiler}</p>
            <p>Stock: {instrumento.stock}</p>
            <p>Proveedor: {instrumento.proveedor.name}</p>
        </div>
    );
};

export default Detail;