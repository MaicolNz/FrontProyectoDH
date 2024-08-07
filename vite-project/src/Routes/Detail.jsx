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
        <div style={{ 
            background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/logos/hero.png')",
            backgroundRepeat: 'none',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '80vh'
        }}>
            <div style={{ 
                backgroundColor: 'white', 
                position: 'absolute', 
                backgroundSize: '10px', 
                display: 'flex', 
                justifyContent: 'space-around', 
                top: '60%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)', 
                padding: '20px', 
                width: '60%', 
                height: '60vh', 
                alignItems: 'center'
            }}>
                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '20px', 
                    transform: 'translate(0%, -4%)', 
                    alignContent: 'space-between'
                }}>
                    <div>
                        <h1>{instrumento.instrumento}</h1>
                    </div>
                    <div>
                        <p style={{ color: 'grey', width: '400px' }}>{instrumento.detalleView}</p>
                        <p style={{ fontWeight: 'bold', marginTop: '20px' }}> ${instrumento.precioAlquiler}/día</p>
                    </div>
                    <div style={{ display: 'flex', gap: '20px'}}>
                        <div style={{backgroundColor: '#F1EFEB', borderRadius: '5px', width: '130px', height: '40px', display: 'flex', justifyContent: 'space-between', padding: '5px'}}>
                        <button onClick={handleDecrease} style={{ fontSize: '20px', border: 'none' }}>-</button>
                        <span style={{ fontSize: '20px', marginTop: '9px'}}>{count}</span>
                        <button onClick={handleIncrease} style={{ fontSize: '20px', backgroundColor: '#F1EFEB', border: 'none' }}>+</button>
                        </div>
                        <button style={{ 
                            backgroundColor: '#000A19', 
                            color: 'white', 
                            borderRadius: '5px', 
                            width: '140px', 
                            height: '50px',
                            fontSize: '18px',
                            fontWeight: 'lighter' 
                        }}>Alquilar</button>
                    </div>
                </div>
                <img style={{ 
                    width: '32%', 
                    height: '250px', 
                    border: '1px solid grey', 
                    padding: '70px' 
                }} src={instrumento.img} alt={instrumento.instrumento} />
                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '70px', 
                    top: '10%', 
                    transform: 'translate(0%, -53%)'
                }}>
                    <div style={{ display: 'flex', gap: '5px'}}>
                        <img src="../public/images/icons/iconBack.svg" alt="" />
                        <p style={{ fontWeight: 'bold' }} onClick={handleClick}>Volver atras</p>
                    </div>
                    <div style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '20px'
                    }}>
                        <img src="" alt="none" />
                        <img src="none" alt="none" />
                        <img src="" alt="none" />
                        <p style={{ fontWeight: 'bold' }}>Ver mas</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;