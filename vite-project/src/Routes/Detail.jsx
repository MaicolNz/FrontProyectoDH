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
        <div style={{ 
            background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/logos/hero.png')",
            backgroundRepeat: 'none',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '100vh'
        }}>
            <div style={{ 
          backgroundColor: "white",
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          width: "70%",
          maxWidth: "1000px",
          alignItems: "center",
          flexDirection: "row",
          transform: 'translate(38%, 37%)'
            }}>
                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '20px', 
                    //padding: '250px 0px 0px 0px',
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
                    border: '1px solid LIGHTgrey', 
                    padding: '70px',
                    borderRadius: '15px' 
                }} src={instrumento.img} alt={instrumento.instrumento} />
                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '150px', 
                    top: '10%', 
                    transform: 'translate(0%, -60%)'
                }}>
                    <div style={{ display: 'flex', gap: '5px'}}>
                        <img src="../public/images/icons/iconBack.svg" alt="" />
                        <p style={{ fontWeight: 'bold', cursor: 'pointer' }} onClick={handleClick}>Volver atras</p>
                    </div>
                    <div style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '20px'
                    }}>
                        <p style={{ fontWeight: 'bold', cursor: 'pointer' }}  onClick={handleClickView}>Ver mas </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;