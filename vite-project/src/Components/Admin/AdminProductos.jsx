import React, { useState, useEffect } from 'react';
import { Container, Pagination, Row, Col, Button } from 'react-bootstrap';
import ProductoForm from './ProductoForm.jsx';
import ProductoTable from './ProductoTable.jsx';

const AdminProductos = () => {
    const [productos, setProductos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [productosPorPagina] = useState(8);

    const [showModal, setShowModal] = useState(false);
    const [editProductId, setEditProductId] = useState(null);
    const [productoToEdit, setProductoToEdit] = useState(null); // Nuevo estado para almacenar el producto a editar

    const token = localStorage.getItem('token'); // Obtener el token JWT

    // Verificar si el token existe
    if (!token) {
        console.error('No se encontró un token en localStorage');
        return;
    }

    // Mostrar el token y el JSON que se enviará en la solicitud
    console.log('Token enviado:', token);

    useEffect(() => {
        // Fetch data from the API instead of using JSON file
        const fetchProductos = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/admin/instrumentos', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` // Enviar el token en el encabezado
                    },
                });

                if (!response.ok) {
                    throw new Error('Error fetching data');
                }

                const data = await response.json();
                setProductos(data);
                setTotalPages(Math.ceil(data.length / productosPorPagina));
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchProductos();
    }, [productosPorPagina]);

    const handleEdit = (id) => {
        const productToEdit = productos.find(p => p.id === id);
        setProductoToEdit(productToEdit); // Almacenar el producto a editar
        setEditProductId(id);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/admin/instrumento/eliminar/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`, // Enviar el token en el encabezado
                },
            });

            if (response.ok) {
                // Si la eliminación fue exitosa, actualizamos el estado local
                setProductos(productos.filter(p => p.id !== id));
            } else {
                console.error('Error eliminando el producto:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * productosPorPagina;
    const currentProductos = productos.slice(startIndex, startIndex + productosPorPagina);

    return (
        <Container className="d-flex flex-column min-vh-100">
            <div className="flex-grow-1">
                <Row className="mb-3">
                    <Col>
                        <h2>Panel de Productos</h2>
                    </Col>
                    <Col className="text-end">
                        <Button
                            variant="primary"
                            onClick={() => {
                                setEditProductId(null);
                                setProductoToEdit(null); // Limpiar productoToEdit al agregar uno nuevo
                                setShowModal(true);
                            }}
                        >
                            Agregar Producto
                        </Button>
                    </Col>
                </Row>

                <ProductoTable
                    productos={currentProductos}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />

                <Pagination className="justify-content-center">
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

                {/* Modal para agregar/editar producto */}
                <ProductoForm
                    showModal={showModal}
                    setShowModal={setShowModal}
                    productos={productos}
                    setProductos={setProductos}
                    editProductId={editProductId}
                    productoToEdit={productoToEdit} // Pasar el producto a editar
                    setEditProductId={setEditProductId}
                />
            </div>
        </Container>
    );
};

export default AdminProductos;
