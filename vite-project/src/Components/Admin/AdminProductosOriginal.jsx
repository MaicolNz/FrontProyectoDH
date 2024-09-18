import React, { useState, useEffect } from 'react';
import { Container, Pagination, Row, Col, Button } from 'react-bootstrap';
import instrumentosData from '../utils/instruments.json'; // Ajusta la ruta según donde esté tu archivo JSON
import ProductoForm from './ProductoForm.jsx';
import ProductoTable from './ProductoTable.jsx';

const categoriasPermitidas = ['Teclado', 'Cuerda', 'Viento', 'Percusión', 'Accesorios'];

const AdminProductos = () => {
    const [productos, setProductos] = useState(instrumentosData);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(Math.ceil(instrumentosData.length / 8));
    const [productosPorPagina] = useState(8);

    const [showModal, setShowModal] = useState(false);
    const [editProductId, setEditProductId] = useState(null);

    useEffect(() => {
        setTotalPages(Math.ceil(productos.length / productosPorPagina));
    }, [productos, productosPorPagina]);

    const handleEdit = (id) => {
        setEditProductId(id);
        setShowModal(true);
    };

    const handleDelete = (id) => {
        setProductos(productos.filter(p => p.id !== id));
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
                    setEditProductId={setEditProductId}
                />
            </div>
        </Container>
    );
};

export default AdminProductos;
