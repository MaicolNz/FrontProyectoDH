import React from 'react'
import { routes } from './utils/routes';
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav>
            <button onClick={() => navigate(-1)}>volver</button>
            <Link to={routes.home}>
                <h4>Home</h4>
            </Link>
            <Link to={routes.contact}>
                <h4>Contacto</h4>
            </Link>
            <button>Iniciar sesion</button>
            <button>Crear usuario</button>
        </nav>
    )
}

export default Navbar