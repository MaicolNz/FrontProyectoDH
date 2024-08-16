import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import instruments from '../../Components/utils/instruments.json';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DetailView.css';  // Importa el archivo CSS para estilos adicionales
import { Carousel } from 'react-bootstrap';

const DetailView = () => {
  // Obtiene el id del instrumento desde los parámetros de la URL
  const { id } = useParams();
  
  // Encuentra el instrumento correspondiente en la lista de instrumentos usando el id
  const instrumento = instruments.find((item) => item.id === parseInt(id));
  
  // Inicializa el hook useNavigate para redireccionar a otras páginas
  const navigate = useNavigate();
  
  // Estado para controlar la visibilidad del modal
  const [showModal, setShowModal] = useState(false);
  
  // Estado para controlar la imagen actual que se muestra en el modal
  const [currentImage, setCurrentImage] = useState(0);
  
  // Lista de imágenes para la galería
  const images = [instrumento.img, instrumento.imgView1, instrumento.imgView2];

  // Función para cerrar el modal
  const handleClose = () => setShowModal(false);
  
  // Función para mostrar el modal con la imagen especificada por el índice
  const handleShow = (index) => {
    setCurrentImage(index);
    setShowModal(true);
  };

  // Función para pasar a la siguiente imagen en el modal
  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  // Función para volver a la imagen anterior en el modal
  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Función para redirigir al detalle del instrumento anterior
  const handleClick = () => {
    navigate(`/detail/${id}`);
  };

  // Maneja el caso en que el instrumento no se encuentra
  if (!instrumento) {
    return <div>Instrumento no encontrado</div>;
  }

  return (
    <>
      {/* Contenedor principal con margen y padding */}
      <Container className='my-4'>
        <div className='text-center mb-4'>
          {/* Botón para volver a la página de detalles */}
          <div className="col-md-6">
                        <div className="d-flex align-items-center mb-3">
                            <img
                                src="../public/images/icons/iconBack.svg"
                                alt="Volver atrás"
                                onClick={handleClick}
                                style={{ cursor: 'pointer' }}
                                className="me-2"
                            />
                            <p className="mb-0" style={{ cursor: 'pointer' }} onClick={handleClick}>
                                Volver atrás
                            </p>
                        </div>
        </div>

          {/* Título del instrumento */}
          <h1 className='my-3'>{instrumento.instrumento}</h1>
          {/* Imagen principal del instrumento */}
          <img
            src={instrumento.img}
            alt={instrumento.instrumento}
            className='img-fluid gallery-image img-principal'
            onClick={() => handleShow(0)}  // Muestra el modal con la primera imagen al hacer clic
          />
        </div>
        {/* Galería de imágenes secundarias */}
        <Row className='g-3'>
          {images.map((img, index) => (
            <Col className="d-flex justify-content-center"xs={6} md={4} lg={4} key={index}>
              <img
                src={img}
                alt={`Vista ${index + 1}`}
                className='img-fluid gallery-thumbnail img-secundaria'
                onClick={() => handleShow(index)}  // Muestra el modal con la imagen correspondiente al hacer clic
              />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal para mostrar imágenes a gran escala */}
      <Modal show={showModal} onHide={handleClose} size='lg' centered>
        <Modal.Body className='d-flex justify-content-center align-items-center'>
          {/* Botón para ir a la imagen anterior */}
          <Button
            variant='light'
            className='position-absolute top-50 start-0 translate-middle-y'
            onClick={handlePrev}
            style={{ zIndex: 1050 }}
          >
            &lt;
          </Button>
          {/* Imagen actual del modal */}
          <img
            src={images[currentImage]}
            alt={`Vista ${currentImage + 1}`}
            className='img-fluid'
            style={{ maxWidth: '90vw', maxHeight: '80vh' }}  // Ajusta la imagen al tamaño del viewport
          />
          {/* Botón para ir a la imagen siguiente */}
          <Button
            variant='light'
            className='position-absolute top-50 end-0 translate-middle-y'
            onClick={handleNext}
            style={{ zIndex: 1050 }}
          >
            &gt;
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DetailView;
