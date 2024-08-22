import React, { useState, useEffect } from 'react';
import { Table, Button, Container, Pagination } from 'react-bootstrap';

// Datos ficticios de usuarios
const usuariosFicticios = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez', email: 'juan.perez@example.com', rol: 'Admin' },
    { id: 2, nombre: 'Ana', apellido: 'Gómez', email: 'ana.gomez@example.com', rol: 'Usuario' },
    { id: 3, nombre: 'Luis', apellido: 'Martínez', email: 'luis.martinez@example.com', rol: 'Usuario' },
    { id: 4, nombre: 'Marta', apellido: 'Fernández', email: 'marta.fernandez@example.com', rol: 'Admin' },
    { id: 5, nombre: 'Carlos', apellido: 'López', email: 'carlos.lopez@example.com', rol: 'Editor' },
    { id: 6, nombre: 'Laura', apellido: 'Rodríguez', email: 'laura.rodriguez@example.com', rol: 'Editor' },
    { id: 7, nombre: 'Pedro', apellido: 'García', email: 'pedro.garcia@example.com', rol: 'Usuario' },
    { id: 8, nombre: 'Isabel', apellido: 'Hernández', email: 'isabel.hernandez@example.com', rol: 'Admin' },
    { id: 9, nombre: 'José', apellido: 'Morales', email: 'jose.morales@example.com', rol: 'Editor' },
    { id: 10, nombre: 'Claudia', apellido: 'Castro', email: 'claudia.castro@example.com', rol: 'Usuario' },
    { id: 11, nombre: 'Andrés', apellido: 'Torres', email: 'andres.torres@example.com', rol: 'Usuario' },
    { id: 12, nombre: 'Carmen', apellido: 'Vázquez', email: 'carmen.vazquez@example.com', rol: 'Admin' },
    { id: 13, nombre: 'Fernando', apellido: 'Jiménez', email: 'fernando.jimenez@example.com', rol: 'Editor' },
    { id: 14, nombre: 'Patricia', apellido: 'Moreno', email: 'patricia.moreno@example.com', rol: 'Usuario' },
    { id: 15, nombre: 'Jorge', apellido: 'Mendoza', email: 'jorge.mendoza@example.com', rol: 'Admin' },
    { id: 16, nombre: 'María', apellido: 'Alonso', email: 'maria.alonso@example.com', rol: 'Editor' }
];

const AdminUsuarios = () => {
    const [usuarios, setUsuarios] = useState(usuariosFicticios);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(Math.ceil(usuariosFicticios.length / 8));
    const [usuariosPorPagina] = useState(8);

    const handleAddAdmin = (id) => {
        console.log('Agregar usuario con ID:', id);
        // Implementa la lógica para agregar el usuario
    };

    const handleDelete = (id) => {
        console.log('Eliminar usuario con ID:', id);
        // Implementa la lógica para eliminar el usuario
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * usuariosPorPagina;
    const currentUsuarios = usuarios.slice(startIndex, startIndex + usuariosPorPagina);

    return (
        <Container>
            <h2>Panel de Usuarios</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo Electrónico</th>
                        <th>Rol</th>
                        <th>Administrador</th>
                    </tr>
                </thead>
                <tbody>
                    {currentUsuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.apellido}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.rol}</td>
                            <td>
                                <Button 
                                    variant="success" 
                                    onClick={() => handleAddAdmin(usuario.id)} 
                                    className="me-2"
                                >
                                    +
                                </Button>
                                <Button 
                                    variant="danger" 
                                    onClick={() => handleDelete(usuario.id)}
                                >
                                    -
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Pagination>
                <Pagination.Prev 
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                />
                {[...Array(totalPages)].map((_, index) => (
                    <Pagination.Item 
                        key={index + 1}
                        active={index + 1 === currentPage}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </Pagination.Item>
                ))}
                <Pagination.Next 
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                />
            </Pagination>
        </Container>
    );
};

export default AdminUsuarios;
