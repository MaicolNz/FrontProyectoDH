import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import instruments from '../../Components/utils/instruments.json';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DetailView.css';  // Importa el archivo CSS para estilos adicionales

const DetailView = () => {
  const { id } = useParams();
  const instrumento = instruments.find((item) => item.id === parseInt(id));
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Usa el array de imágenes del objeto instrumento
  const images = instrumento?.imagenes || []; // Array de imágenes del JSON

  const handleClose = () => setShowModal(false);
  const handleShow = (index) => {
    setCurrentImage(index);
    setShowModal(true);
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleClick = () => {
    navigate(`/detail/${id}`);
  };

  if (!instrumento) {
    return <div>Instrumento no encontrado</div>;
  }

  return (
    <>
      <Container className='my-4'>
        <div className='text-center mb-4'>
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

          <h1 className='my-3'>{instrumento.nombre}</h1>
          <img
            src={images[0]} // Usa la primera imagen del array como principal
            alt={instrumento.nombre}
            className='img-fluid gallery-image img-principal'
            onClick={() => handleShow(0)}
          />
        </div>
        <Row className='g-3'>
          {images.map((img, index) => (
            <Col className="d-flex justify-content-center" xs={6} md={4} lg={4} key={index}>
              <img
                src={img}
                alt={`Vista ${index + 1}`}
                className='img-fluid gallery-thumbnail img-secundaria'
                onClick={() => handleShow(index)}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleClose} size='lg' centered>
        <Modal.Body className='d-flex justify-content-center align-items-center'>
          <Button
            variant='light'
            className='position-absolute top-50 start-0 translate-middle-y'
            onClick={handlePrev}
            style={{ zIndex: 1050 }}
          >
            &lt;
          </Button>
          <img
            src={images[currentImage]}
            alt={`Vista ${currentImage + 1}`}
            className='img-fluid'
            style={{ maxWidth: '90vw', maxHeight: '80vh' }}
          />
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
