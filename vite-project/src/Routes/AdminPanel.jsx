import React, { useState } from 'react';
import AdminMisDatos from '../Components/Admin/AdminDatos'; 
import AdminUsuarios from '../Components/Admin/AdminUsuarios';
import AdminProductos from '../Components/Admin/AdminProductos';
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../Components/Admin/Admin.css';

const AdminPanel = () => {
    // Estado para manejar el componente a mostrar
    const [selectedSection, setSelectedSection] = useState('MisDatos');

    // Renderizar el componente adecuado basado en la sección seleccionada
    const renderView = () => {
        switch (selectedSection) {
            case 'Usuarios':
                return <AdminUsuarios />;
            case 'Productos':
                return <AdminProductos />;
            case 'MisDatos':
            default:
                return <AdminMisDatos />;
        }
    };

    return (
        <Container fluid style={{ height: '100vh'}}>
            <Row>
                <Col md={3} className="sidebar bg-dark p-3" style={{height: '100vh', overflowY: 'auto' }}>
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
                        className={`btn-custom w-100 mb-2 ${selectedSection === 'Usuarios' ? 'selected' : ''}`}
                        onClick={() => setSelectedSection('Usuarios')}
                    >
                        Usuarios
                    </Button>
                    <hr className={`hr-custom ${selectedSection === 'Usuarios' ? 'selected' : ''}`} />
                    <Button 
                        variant="primary" 
                        className={`btn-custom w-100 mb-2 ${selectedSection === 'Productos' ? 'selected' : ''}`}
                        onClick={() => setSelectedSection('Productos')}
                    >
                        Productos
                    </Button>
                    <hr className={`hr-custom ${selectedSection === 'Productos' ? 'selected' : ''}`} />
                </Col>
                <Col md={9} className="p-3">
                    {renderView()}
                </Col>
            </Row>
        </Container>
    );
};

export default AdminPanel;

