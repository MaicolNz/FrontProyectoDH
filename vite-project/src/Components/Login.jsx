import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailError && email) {

      console.log('Formulario enviado con éxito');
    } else {

      console.log('Por favor, corrige los errores antes de enviar.');
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-dark text-white" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../public/images/logos/hero.png')`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="card p-5" style={{ maxWidth: '450px', width: '100%', borderRadius: '30px' }}>
        <h2 className="text-center mb-4">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              placeholder="Ingresá tu email" 
              value={email} 
              onChange={handleEmailChange} 
            />
            {emailError && <div className="text-danger mt-2">{emailError}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="password" placeholder="Ingresá tu contraseña" />
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="remember" />
              <label className="form-check-label" htmlFor="remember">Recordar para el futuro</label>
            </div>
            <a href="#" className="text-white">¿Olvidaste tu contraseña?</a>
          </div>
          <div className="d-flex justify-content-between">
            <button type="button" className="btn btn-secondary">Cancelar</button>
            <button type="submit" className="btn btn-dark">Aceptar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;