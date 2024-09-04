import React, { useState } from 'react';
import { useNavigate } from'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
      setEmailError('Por favor ingresa un correo electrónico válido.');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailError && email && nombre && apellido && password) {
      try {
        // const response = await fetch('http://localhost:8080/api/usuarios', {
        const response = await fetch('http://localhost:8080/auth/register ', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombre,
            apellido,
            email: email,
            password: password,
          }),
        });

        if (response.ok) {
          console.log('Usuario registrado exitosamente');
          // Aquí puedes redirigir o mostrar un mensaje de éxito
        } else {
          const errorData = await response.json();
          console.error('Error en el registro:', errorData);
          // Aquí puedes manejar errores de la API
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
        // Aquí puedes manejar errores de red
      }
    } else {
      console.log('Por favor, corrige los errores antes de enviar.');
    }
  };

  const handleGoBack = () => {
    navigate('/'); 
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-dark text-white" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../public/images/logos/hero.png')`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="d-flex flex-row w-100 justify-content-center" style={{ alignItems: 'stretch' }}>
        <div className='block-img'>
          <img src="/images/logos/Logo White.png" alt="logo" style={{ height: '200px', width: '200px' }} />
        </div>
        <div className="block-reg card p-5">
          <h2 className="text-center mb-4">Crea tu registro</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder="Ingresá tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="apellido" className="form-label">Apellido</label>
              <input
                type="text"
                className="form-control"
                id="apellido"
                placeholder="Ingresá tu apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo Electrónico</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Ingresá tu correo electrónico"
                value={email}
                onChange={handleEmailChange}
                required
              />
              {emailError && <div className="text-danger mt-2">{emailError}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Ingresá tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-check mb-4">
              <input type="checkbox" className="form-check-input" id="terms" required />
              <label className="form-check-label" htmlFor="terms">Acepto los términos y condiciones del servicio.</label>
            </div>
            <div className="d-flex justify-content-between">
              <button type="button" className="btn btn-secondary" onClick={handleGoBack}>Volver atrás</button>
              <button type="submit" className="btn btn-dark">Aceptar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
