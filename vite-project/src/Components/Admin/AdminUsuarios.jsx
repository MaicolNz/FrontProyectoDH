import React, { useState, useEffect } from 'react';
import { Table, Button, Container, Pagination, Row, Col } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext';

const AdminUsuarios = () => {
    const { user, fetchUser, logout } = useAuth();
    const [usuarios, setUsuarios] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true); // Añadido para manejar el estado de carga

    const fetchUsuarios = async () => {
        try {
            setIsLoading(true); // Indicamos que estamos cargando datos
            const response = await fetch(`http://localhost:8080/api/admin/usuarios`);
            const data = await response.json();
            console.log(data)
            setUsuarios(data); // Aseguramos que data.content sea un array
            setTotalPages(data.totalPages || 1);
            setCurrentPage(data.currentPage || 0);
        } catch (error) {
            console.error('Error fetching usuarios:', error);
        } finally {
            setIsLoading(false); // Indicamos que la carga ha terminado
        }
    };

    useEffect(() => {
        fetchUsuarios(currentPage);
    }, [currentPage]);

    const handleAddAdmin = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/admin/usuarios/${id}/admin`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                fetchUsuarios(currentPage);
                if (user && user.id_usuario === id) {
                    fetchUser(id);
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
            const response = await fetch(`http://localhost:8080/api/admin/usuarios/${id}/remove-admin`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' }
            });
            if (response.ok) {
                fetchUsuarios(currentPage);
                if (user && user.id_usuario === id) {
                    fetchUser(id);
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
            const response = await fetch(`http://localhost:8080/api/admin/usuarios/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                fetchUsuarios(currentPage);
                if (user && user.id_usuario === id) {
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

    if (isLoading) {
        return <p>Cargando...</p>; // Muestra un mensaje mientras los datos se están cargando
    }

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
                        {usuarios.length > 0 ? (
                            usuarios.map((usuario) => (
                                <tr key={usuario.id}>
                                    <td>{usuario.id}</td>
                                    <td>{usuario.nombre}</td>
                                    <td>{usuario.apellido}</td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.role === "ADMIN" ? "Administrador" : "Usuario" }</td>
                                    <td>
                                        {usuario.role ? (
                                            <Button 
                                                variant="warning" 
                                                onClick={() => handleRemoveAdmin(usuario.id)} 
                                                className="me-2"
                                            >
                                                -
                                            </Button>
                                        ) : (
                                            <Button 
                                                variant="success" 
                                                onClick={() => handleAddAdmin(usuario.id)} 
                                                className="me-2"
                                            >
                                                +
                                            </Button>
                                        )}
                                        <Button 
                                            variant="danger" 
                                            onClick={() => handleDelete(usuario.id)}
                                        >
                                            Eliminar
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center">No hay usuarios disponibles</td>
                            </tr>
                        )}
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
        </Container>
    );
};

export default AdminUsuarios;
