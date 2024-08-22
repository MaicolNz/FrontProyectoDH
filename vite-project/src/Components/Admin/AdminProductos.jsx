import React, { useState, useEffect } from 'react';
import { Table, Button, Container, Pagination } from 'react-bootstrap';


// Datos ficticios de productos
const productosFicticios = [
    { id: 1, nombre: 'Producto A', precio: 100, stock: 10, categoria: 'Electrónica' },
    { id: 2, nombre: 'Producto B', precio: 150, stock: 20, categoria: 'Ropa' },
    { id: 3, nombre: 'Producto C', precio: 200, stock: 15, categoria: 'Hogar' },
    { id: 4, nombre: 'Producto D', precio: 250, stock: 5, categoria: 'Electrónica' },
    { id: 5, nombre: 'Producto E', precio: 300, stock: 30, categoria: 'Ropa' },
    { id: 6, nombre: 'Producto F', precio: 350, stock: 25, categoria: 'Hogar' },
    { id: 7, nombre: 'Producto G', precio: 400, stock: 10, categoria: 'Electrónica' },
    { id: 8, nombre: 'Producto H', precio: 450, stock: 5, categoria: 'Ropa' },
    { id: 9, nombre: 'Producto I', precio: 500, stock: 20, categoria: 'Hogar' },
    { id: 10, nombre: 'Producto J', precio: 550, stock: 15, categoria: 'Electrónica' },
    { id: 11, nombre: 'Producto K', precio: 600, stock: 25, categoria: 'Ropa' },
    { id: 12, nombre: 'Producto L', precio: 650, stock: 10, categoria: 'Hogar' },
    { id: 13, nombre: 'Producto M', precio: 700, stock: 30, categoria: 'Electrónica' },
    { id: 14, nombre: 'Producto N', precio: 750, stock: 20, categoria: 'Ropa' },
    { id: 15, nombre: 'Producto O', precio: 800, stock: 15, categoria: 'Hogar' },
    { id: 16, nombre: 'Producto P', precio: 850, stock: 5, categoria: 'Electrónica' }
];

const AdminProductos = () => {
    const [productos, setProductos] = useState(productosFicticios);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(Math.ceil(productosFicticios.length / 8));
    const [productosPorPagina] = useState(8);

    const handleEdit = (id) => {
        console.log('Editar producto con ID:', id);
        // Implementa la lógica para editar el producto
    };

    const handleDelete = (id) => {
        console.log('Eliminar producto con ID:', id);
        // Implementa la lógica para eliminar el producto
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * productosPorPagina;
    const currentProductos = productos.slice(startIndex, startIndex + productosPorPagina);

    return (
        <Container>
            <h2>Panel de Productos</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Categoría</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {currentProductos.map((producto) => (
                        <tr key={producto.id}>
                            <td>{producto.id}</td>
                            <td>{producto.nombre}</td>
                            <td>{producto.precio}</td>
                            <td>{producto.stock}</td>
                            <td>{producto.categoria}</td>
                            <td>
                                <Button 
                                    variant="warning" 
                                    onClick={() => handleEdit(producto.id)} 
                                    className="me-2"
                                >
                                    Editar
                                </Button>
                                <Button 
                                    variant="danger" 
                                    onClick={() => handleDelete(producto.id)}
                                >
                                    Eliminar
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

export default AdminProductos;
