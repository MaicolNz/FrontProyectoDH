import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import instruments from '../../Components/utils/instruments.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import OccupiedDatesManager from '../../Components/OccupiedDatesManager.jsx'; 
import { Modal, Button } from 'react-bootstrap'; 

const Detail = () => {
    const { id } = useParams();
    const instrumento = instruments.find(item => item.id === parseInt(id));
    const navigate = useNavigate();

    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false); 

    const handleClick = () => {
        navigate(`/`);
    };

    const handleClickView = () => {
        navigate(`/DetailView/${id}`);
    };

    const handleDatesSelected = (start, end) => {
        setSelectedStartDate(start);
        setSelectedEndDate(end);
    };

    const handleReserve = () => {
        setShowModal(true); // Muestra el modal con el detalle de la reserva
    };

    const handleConfirmReservation = () => {
        setShowModal(false); // Oculta el primer modal
        setShowConfirmationModal(true); 
        // Aquí puedes agregar la lógica para confirmar la reserva (enviar al backend, etc.)
        console.log('Reserva confirmada:', selectedStartDate, selectedEndDate);
    };

    if (!instrumento) {
        return <div>Instrumento no encontrado</div>;
    }

    // Obtén la primera imagen del array de imágenes
    const firstImage = instrumento.imagenes[0] || '/images/default-image.jpg'; // Ruta por defecto en caso de que no haya imagen

    const getIconForKey = (key) => {
        switch (key) {
            case 'material de construccion': return 'tools'; // Icono de caja para material
            case 'portabilidad': return 'suitcase'; // Icono de maleta para portabilidad
            case 'tecnologia': return 'cogs'; // Icono de engranajes para tecnología
            case 'clasificacion': return 'star'; // Icono de estrella para clasificación
            case 'tamaño': return 'ruler'; // Icono de regla para tamaño
            case 'peso': return 'weight'; // Icono de peso para peso
            default: return 'info-circle'; // Icono por defecto
        }
    };

    // Función para formatear la fecha en "día - mes - año"
    const formatDate = (date) => {
        if (!date) return 'No seleccionada';
        return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    return (
        <div className="hero-content-detail detail-hero">
            <div className="container bg-color py-3">
                <div className="d-flex justify-content-end">
                    <img
                        src="/images/icons/iconBack.svg" 
                        alt="Volver atrás"
                        onClick={handleClick}
                        style={{ cursor: 'pointer' }}
                        className="me-2"
                    />
                    <p className="mb-0" style={{ cursor: 'pointer' }} onClick={handleClick}>
                        Volver Atrás
                    </p>
                </div>
                <h1 className='instrument-title d-flex justify-content-center'>
                    {instrumento.nombre}
                </h1>
                <div className="detail-block-content">
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex justify-content-center img-border">
                            <img
                                src={firstImage}
                                alt={instrumento.nombre}
                                className="img-thumbnail img-detail img-fluid"
                            />
                        </div>
                        <div className="col-md-6">
                            <div className='detail-detalleView'>
                                {instrumento.detalleView}
                            </div>
                            <p className="detail-precio">
                                ${instrumento.precio}/día
                            </p>
                            <div className="detail-caracteristicas mt-4">
                                <h5>Características:</h5>
                                <ul className="list-unstyled">
                                    {Object.entries(instrumento.caracteristicas).map(([key, value]) => (
                                        <li key={key} className="mb-2 fs-9 d-flex align-items-center">
                                            <i className={`fas fa-${getIconForKey(key)} me-2`}></i>
                                            {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="d-flex align-items-center mt-4">
                                <button
                                    onClick={handleClickView}
                                    className="btn btn-detail btn-secondary me-3"
                                >
                                    Ver más
                                </button>
                                <button
                                    onClick={handleReserve}
                                    className="btn btn-detail btn-rent"
                                >
                                    Iniciar Reserva
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <h4>Fechas Disponibles</h4>
                    <OccupiedDatesManager 
                        instrumentId={id} 
                        onDatesSelected={handleDatesSelected} 
                    />
                </div>
            </div>

            {/* Primer Modal para confirmar reserva */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmar Reserva</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>Instrumento:</strong> {instrumento.nombre}</p>
                    <p><strong>Fecha de Inicio:</strong> {formatDate(selectedStartDate)}</p>
                    <p><strong>Fecha de Fin:</strong> {formatDate(selectedEndDate)}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleConfirmReservation}>
                        Confirmar Reserva
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Segundo Modal de confirmación */}
            <Modal show={showConfirmationModal} onHide={() => setShowConfirmationModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Reserva Confirmada</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>¡La reserva ha sido confirmada exitosamente!</p>
                    <p><strong>Instrumento seleccionado:</strong> {instrumento.nombre}</p>
                    <p><strong>Fecha de Inicio:</strong> {formatDate(selectedStartDate)}</p>
                    <p><strong>Fecha de Fin:</strong> {formatDate(selectedEndDate)}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => setShowConfirmationModal(false)}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Detail;