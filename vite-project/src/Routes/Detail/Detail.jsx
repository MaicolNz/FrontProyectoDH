import React from 'react';
import { useParams } from 'react-router-dom';
import instruments from '../../Components/utils/instruments.json';
import { useNavigate } from 'react-router-dom';
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
<div className='container my-2'>
  <div className='row align-items-start mb-3'>
  <div className='col-12 col-md-4 d-flex justify-content-center'>
      <img src={instrumento.img} alt={instrumento.instrumento} className='img-thumbnail img-fluid d-block' />
    </div>

    <div className='col-md-8'>
      <div className='detail-block-content'>
        <h1>{instrumento.instrumento}</h1>
        <p className='detail-detalleView'>{instrumento.detalleView}</p>
        <p className='detail-precio'> ${instrumento.precioAlquiler}/día</p>
        <div className='detail-block-contador d-flex flex-column flex-md-row align-items-center'>
          <div className='d-flex align-items-center mb-3 mb-md-0'>
            <button onClick={handleDecrease} className='btn btn-primary'>-</button>
            <span className='mx-2'>{count}</span>
            <button onClick={handleIncrease} className='btn btn-primary'>+</button>
          </div>
          <button onClick={handleClickView} className='btn btn-secondary ms-md-2'>Ver más</button>
          <button className='btn btn-success ms-md-2'>Alquilar</button>
        </div>
      </div>
    </div>
  </div>

  <div className='row mt-3'>
    <div className='col-6 d-flex align-items-center'>
      <div className='detail-volveratras d-flex align-items-center' onClick={handleClick}>
        <img src="../public/images/icons/iconBack.svg" alt="" className='me-2' />
        <p className='mb-0'>Volver atrás</p>
      </div>
    </div>
  </div>
</div>


    );
};

export default Detail;