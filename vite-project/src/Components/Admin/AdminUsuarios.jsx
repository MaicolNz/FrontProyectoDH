import React, { useState, useEffect } from 'react';
import { Table, Button, Container, Pagination, Row, Col } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext';

const AdminUsuarios = () => {
    const { user, fetchUser, logout } = useAuth(); // Añadido logout
    const [usuarios, setUsuarios] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);

    const fetchUsuarios = async (page = 0, size = 8) => {
        try {
            const response = await fetch(`http://localhost:8080/api/usuarios/paginated?page=${page}&size=${size}`);
            const data = await response.json();
            setUsuarios(data.content);
            setTotalPages(data.totalPages);
            setCurrentPage(data.currentPage);
        } catch (error) {
            console.error('Error fetching usuarios:', error);
        }
    };

    useEffect(() => {
        fetchUsuarios(currentPage);
    }, [currentPage]);

    const handleAddAdmin = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/usuarios/${id}/admin`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                fetchUsuarios(currentPage);
                if (user && user.id_usuario === id) {
                    fetchUser(id); // Actualizar el usuario actual si es el mismo que se está modificando
                }
            } else {
                console.error('Error assigning admin role');
            }
        } catch (error) {
            console.error('Error adding admin:', error);
        }
    };

    const handleRemoveAdmin = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/usuarios/${id}/remove-admin`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' }
            });
            if (response.ok) {
                fetchUsuarios(currentPage);
                if (user && user.id_usuario === id) {
                    fetchUser(id); // Actualizar el usuario actual si es el mismo que se está modificando
                }
            } else {
                console.error('Error removing admin role');
            }
        } catch (error) {
            console.error('Error removing admin:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/usuarios/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                fetchUsuarios(currentPage);
                if (user && user.id_usuario === id) {
                    // Opcional: hacer logout si el usuario eliminado es el usuario actual
                    logout();
                }
            } else {
                console.error('Error deleting user:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 0 && pageNumber < totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <Container className="d-flex flex-column min-vh-100">
            <div className="flex-grow-1">
                <Row className="mb-3">
                    <Col>
                        <h2>Panel de Usuarios</h2>
                    </Col>
                </Row>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Correo Electrónico</th>
                            <th>Rol</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) => (
                            <tr key={usuario.id_usuario}>
                                <td>{usuario.id_usuario}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.apellido}</td>
                                <td>{usuario.correo}</td>
                                <td>{usuario.esAdmin ? 'Admin' : 'Usuario'}</td>
                                <td>
                                    {usuario.esAdmin ? (
                                        <Button 
                                            variant="warning" 
                                            onClick={() => handleRemoveAdmin(usuario.id_usuario)} 
                                            className="me-2"
                                        >
                                            -
                                        </Button>
                                    ) : (
                                        <Button 
                                            variant="success" 
                                            onClick={() => handleAddAdmin(usuario.id_usuario)} 
                                            className="me-2"
                                        >
                                            +
                                        </Button>
                                    )}
                                    <Button 
                                        variant="danger" 
                                        onClick={() => handleDelete(usuario.id_usuario)}
                                    >
                                        Eliminar
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Pagination className="justify-content-center">
                    <Pagination.Prev 
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 0}
                    />
                    {[...Array(totalPages)].map((_, index) => (
                        <Pagination.Item 
                            key={index}
                            active={index === currentPage}
                            onClick={() => handlePageChange(index)}
                        >
                            {index + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next 
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage >= totalPages - 1}
                    />
                </Pagination>
            </div>
            {/* Aquí puedes agregar un footer si el layout no lo tiene */}
        </Container>
    );
};

export default AdminUsuarios;
