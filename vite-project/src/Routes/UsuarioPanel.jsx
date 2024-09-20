import React, { useState } from 'react';
import AdminMisDatos from '../Components/Admin/AdminDatos';
import MisReservas from '../Components/MisReservas';
import { Button, Col, Container, Row, Offcanvas } from 'react-bootstrap';
import '../Components/Admin/Admin.css'; 

const UsuarioPanel = () => {
    const [selectedSection, setSelectedSection] = useState('MisDatos');
    const [showSidebar, setShowSidebar] = useState(false);

    const renderView = () => {
        switch (selectedSection) {
            case 'MisDatos':
                return <AdminMisDatos />;  // Puedes usar aquí un componente específico para datos del usuario
            case 'Mis Reservas':
                return <MisReservas />;
            default:
                return <AdminMisDatos />;
        }
    };

    return (
        <Container fluid>
            <Row>
                {/* Sidebar para pantallas grandes */}
                <Col md={3} className="d-none d-md-block sidebar bg-dark p-3">
                    <Button
                        variant="primary"
                        className={`btn-custom w-100 mb-2 ${selectedSection === 'MisDatos' ? 'selected' : ''}`}
                        onClick={() => setSelectedSection('MisDatos')}
                    >
                        Mis Datos
                    </Button>
                    <hr className={`hr-custom ${selectedSection === 'MisDatos' ? 'selected' : ''}`} />
                    <Button
                        variant="primary"
                        className={`btn-custom w-100 mb-2 ${selectedSection === 'Mis Reservas' ? 'selected' : ''}`}
                        onClick={() => setSelectedSection('Mis Reservas')}
                    >
                        Mis Reservas
                    </Button>
                </Col>

                {/* Área de contenido */}
                <Col md={9} className="p-3">
                    {renderView()}
                </Col>

                {/* Sidebar para pantallas pequeñas */}
                <Offcanvas show={showSidebar} onHide={() => setShowSidebar(false)} placement="start">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Button
                            className={`offcanvas-button w-100 mb-2 ${selectedSection === 'MisDatos' ? 'selected' : ''}`}
                            onClick={() => { setSelectedSection('MisDatos'); setShowSidebar(false); }}
                        >
                            Mis Datos
                        </Button>
                        <Button
                            className={`offcanvas-button w-100 mb-2 ${selectedSection === 'Mis Reservas' ? 'selected' : ''}`}
                            onClick={() => { setSelectedSection('Mis Reservas'); setShowSidebar(false); }}
                        >
                            Mis Reservas
                        </Button>
                    </Offcanvas.Body>
                </Offcanvas>

                {/* Botón para activar el menú en pantallas pequeñas */}
                <Button
                    className="menu-button d-md-none"
                    variant="primary"
                    onClick={() => setShowSidebar(true)}
                >
                    Menu
                </Button>
            </Row>
        </Container>
    );
};

export default UsuarioPanel;
