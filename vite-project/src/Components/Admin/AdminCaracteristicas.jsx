import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Table, Modal, Form } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AdminCaracteristicas = () => {
    const [caracteristicas, setCaracteristicas] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editCaracteristicaId, setEditCaracteristicaId] = useState(null);
    const [newCaracteristica, setNewCaracteristica] = useState({ nombre: '', icono: '' });

    useEffect(() => {
        // Aquí puedes cargar las características iniciales desde el back-end
        // setCaracteristicas(data);
        const initialData = [
            { id: 1, nombre: 'Material de Construcción', icono: 'tools' },
            { id: 2, nombre: 'Portabilidad', icono: 'suitcase' },
            { id: 3, nombre: 'Tecnología', icono: 'cogs' },
            { id: 4, nombre: 'Clasificación', icono: 'star' },
            { id: 5, nombre: 'Tamaño', icono: 'ruler' },
            { id: 6, nombre: 'Peso', icono: 'weight' },
        ];
        setCaracteristicas(initialData);
    }, []);

    const handleAddEditClick = (caracteristica) => {
        setEditCaracteristicaId(caracteristica ? caracteristica.id : null);
        setNewCaracteristica(caracteristica || { nombre: '', icono: '' });
        setShowModal(true);
    };

    const handleSave = () => {
        if (editCaracteristicaId) {
            // Editar característica existente
            setCaracteristicas(caracteristicas.map(c => c.id === editCaracteristicaId ? newCaracteristica : c));
        } else {
            // Agregar nueva característica
            setCaracteristicas([...caracteristicas, { ...newCaracteristica, id: Date.now() }]);
        }
        setShowModal(false);
        setNewCaracteristica({ nombre: '', icono: '' });
    };

    const handleDelete = (id) => {
        setCaracteristicas(caracteristicas.filter(c => c.id !== id));
    };

    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <h2>Administrar Características</h2>
                </Col>
                <Col className="text-end">
                    <Button variant="primary" onClick={() => handleAddEditClick(null)}>
                        Agregar Característica
                    </Button>
                </Col>
            </Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Icono</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {caracteristicas.map((c) => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.nombre}</td>
                            <td><i className={`fas fa-${c.icono}`}></i></td>
                            <td>
                                <Button variant="warning" onClick={() => handleAddEditClick(c)}>
                                    Editar
                                </Button>
                                <Button variant="danger" onClick={() => handleDelete(c.id)} className="ms-2">
                                    Eliminar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{editCaracteristicaId ? 'Editar Característica' : 'Agregar Característica'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre de la característica"
                                value={newCaracteristica.nombre}
                                onChange={(e) => setNewCaracteristica({ ...newCaracteristica, nombre: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formIcono">
                            <Form.Label>Icono</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre del icono (por ejemplo: 'tools')"
                                value={newCaracteristica.icono}
                                onChange={(e) => setNewCaracteristica({ ...newCaracteristica, icono: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        {editCaracteristicaId ? 'Guardar Cambios' : 'Agregar'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default AdminCaracteristicas;
