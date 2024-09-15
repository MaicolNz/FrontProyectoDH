import React, { useState } from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import categoriasPermitidas from '../utils/categoriasPermitidas';

const AdminCategorias = () => {
    const [categorias, setCategorias] = useState(categoriasPermitidas);
    const [newCategoria, setNewCategoria] = useState({ name: '', image: '' });
    const [editCategoriaIndex, setEditCategoriaIndex] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const handleAddCategoria = () => {
        setCategorias([...categorias, newCategoria]);
        setNewCategoria({ name: '', image: '' });
        setShowForm(false);
    };

    const handleEditCategoria = (index) => {
        setEditCategoriaIndex(index);
        setNewCategoria(categorias[index]);
        setShowForm(true);
    };

    const handleSaveEdit = () => {
        const updatedCategorias = [...categorias];
        updatedCategorias[editCategoriaIndex] = newCategoria;
        setCategorias(updatedCategorias);
        setNewCategoria({ name: '', image: '' });
        setEditCategoriaIndex(null);
        setShowForm(false);
    };

    const handleDeleteCategoria = (index) => {
        const updatedCategorias = categorias.filter((_, i) => i !== index);
        setCategorias(updatedCategorias);
    };

    return (
        <Container className="d-flex flex-column min-vh-100">
            <div className="flex-grow-1">
                <Row className="mb-3">
                    <Col>
                        <h2>Administrar Categorías</h2>
                    </Col>
                    <Col className="text-end">
                        <Button
                            variant="primary"
                            onClick={() => {
                                setEditCategoriaIndex(null);
                                setShowForm(!showForm);
                            }}
                        >
                            {showForm ? 'Cancelar' : 'Agregar Categoría'}
                        </Button>
                    </Col>
                </Row>

                {/* Tabla de categorías */}
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Imagen</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categorias.map((categoria, index) => (
                            <tr key={index}>
                                <td>{categoria.name}</td>
                                <td>{categoria.image}</td>
                                <td>
                                    <Button
                                        variant="warning"
                                        onClick={() => handleEditCategoria(index)}
                                        className="me-2"
                                    >
                                        Editar
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={() => handleDeleteCategoria(index)}
                                    >
                                        Eliminar
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                {/* Formulario para agregar o editar categoría */}
                {showForm && (
                    <div className="mt-4">
                        <Row>
                            <Col md={6}>
                                <input
                                    type="text"
                                    placeholder="Nombre de la categoría"
                                    value={newCategoria.name}
                                    onChange={(e) =>
                                        setNewCategoria({
                                            ...newCategoria,
                                            name: e.target.value,
                                        })
                                    }
                                    className="form-control mb-2"
                                />
                            </Col>
                            <Col md={6}>
                                <input
                                    type="text"
                                    placeholder="Ruta de la imagen"
                                    value={newCategoria.image}
                                    onChange={(e) =>
                                        setNewCategoria({
                                            ...newCategoria,
                                            image: e.target.value,
                                        })
                                    }
                                    className="form-control mb-2"
                                />
                            </Col>
                        </Row>
                        <Button
                            variant={editCategoriaIndex !== null ? "success" : "primary"}
                            onClick={editCategoriaIndex !== null ? handleSaveEdit : handleAddCategoria}
                        >
                            {editCategoriaIndex !== null ? 'Guardar Cambios' : 'Guardar Categoría'}
                        </Button>
                    </div>
                )}
            </div>
        </Container>
    );
};

export default AdminCategorias;
