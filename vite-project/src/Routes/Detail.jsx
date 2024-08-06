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
        <div style={{ background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/logos/hero.png')",
          backgroundRepeat: 'none',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '80vh'}}>
          <div style={{ backgroundColor: 'white', position: 'absolute', backgroundSize: '10px', display: 'flex', justifyContent: 'space-around', top: '57%', left: '50%', transform: 'translate(-50%, -50%)',padding: '20px', width: '60%', height: '60vh', alignItems: 'center'}}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '-120px'}}>
            <div>
            <h1>{instrumento.instrumento}</h1>
            </div>
            <div>            
            <p>Categoria: {instrumento.categoria}</p>
            <p>Detalle: {instrumento.detalle}</p>
            <p>Precio de alquiler: ${instrumento.precioAlquiler}</p>
            <p>Stock: {instrumento.stock}</p>
            <p>Proveedor: {instrumento.proveedor.name}</p>
            </div>
            </div>
            <img style={{ width: '40%', height: '300px', border: '1px solid black', padding: '70px' }} src={instrumento.img} alt={instrumento.instrumento} />

            </div>
        </div>
    );
};

export default Detail;