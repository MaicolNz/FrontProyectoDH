import React from 'react';
import { useParams } from 'react-router-dom';
import instruments from '../Components/utils/instruments.json';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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
        <div className='detail-background'>
            <div className='detail-block'>
                <div className='detail-block-div1'>
                    <div>
                        <h1>{instrumento.instrumento}</h1>
                    </div>
                    <div>
                        <p className='detail-detalleView'>{instrumento.detalleView}</p>
                        <p className='detail-precio'> ${instrumento.precioAlquiler}/día</p>
                    </div>
                    <div className='detail-block-contador'>
                        <div>
                            <button onClick={handleDecrease}>-</button>
                            <span>{count}</span>
                            <button onClick={handleIncrease}>+</button>
                        </div>
                        <button>Alquilar</button>
                    </div>
                </div>
                <img src={instrumento.img} alt={instrumento.instrumento} />
                <div className='detail-block-div2'>
                    <div className='detail-volveratras' onClick={handleClick}>
                        <img src="../public/images/icons/iconBack.svg" alt="" />
                        <p >Volver atras</p>
                    </div>
                    <div className='detail-vermas'>
                        <p onClick={handleClickView}>Ver mas </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;