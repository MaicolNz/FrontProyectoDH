import React, { useState, useEffect } from 'react';
import { Table, Button, Container, Pagination, Row, Col, Form } from 'react-bootstrap';

// Datos ficticios de productos
const productosFicticios = [
    { id: 1, nombre: 'Producto A', precio: 100, categoria: 'Teclado', detalle: '', detalleView: '', imagenes: ['', '', '', ''] },
    { id: 2, nombre: 'Producto B', precio: 150, categoria: 'Cuerda', detalle: '', detalleView: '', imagenes: ['', '', '', ''] },
    { id: 3, nombre: 'Producto C', precio: 200, categoria: 'Viento', detalle: '', detalleView: '', imagenes: ['', '', '', ''] },
    { id: 4, nombre: 'Producto D', precio: 250, categoria: 'Percusión', detalle: '', detalleView: '', imagenes: ['', '', '', ''] },
    { id: 5, nombre: 'Producto E', precio: 300, categoria: 'Accesorios', detalle: '', detalleView: '', imagenes: ['', '', '', ''] },
    { id: 6, nombre: 'Producto F', precio: 350, categoria: 'Teclado', detalle: '', detalleView: '', imagenes: ['', '', '', ''] },
    { id: 7, nombre: 'Producto G', precio: 400, categoria: 'Cuerda', detalle: '', detalleView: '', imagenes: ['', '', '', ''] },
    { id: 8, nombre: 'Producto H', precio: 450, categoria: 'Viento', detalle: '', detalleView: '', imagenes: ['', '', '', ''] },
    { id: 9, nombre: 'Producto I', precio: 500, categoria: 'Percusión', detalle: '', detalleView: '', imagenes: ['', '', '', ''] },
    { id: 10, nombre: 'Producto J', precio: 550, categoria: 'Accesorios', detalle: '', detalleView: '', imagenes: ['', '', '', ''] },
    { id: 11, nombre: 'Producto K', precio: 600, categoria: 'Teclado', detalle: '', detalleView: '', imagenes: ['', '', '', ''] },
    { id: 12, nombre: 'Producto L', precio: 650, categoria: 'Cuerda', detalle: '', detalleView: '', imagenes: ['', '', '', ''] },
    { id: 13, nombre: 'Producto M', precio: 700, categoria: 'Viento', detalle: '', detalleView: '', imagenes: ['', '', '', ''] },
    { id: 14, nombre: 'Producto N', precio: 750, categoria: 'Percusión', detalle: '', detalleView: '', imagenes: ['', '', '', ''] },
    { id: 15, nombre: 'Producto O', precio: 800, categoria: 'Accesorios', detalle: '', detalleView: '', imagenes: ['', '', '', ''] },
    { id: 16, nombre: 'Producto P', precio: 850, categoria: 'Teclado', detalle: '', detalleView: '', imagenes: ['', '', '', ''] },
    { id: 17, nombre: 'Producto Q', precio: 900, categoria: 'Cuerda', detalle: '', detalleView: '', imagenes: ['', '', '', ''] },
    { id: 18, nombre: 'Producto R', precio: 950, categoria: 'Viento', detalle: '', detalleView: '', imagenes: ['', '', '', ''] },
    { id: 19, nombre: 'Producto S', precio: 1000, categoria: 'Percusión', detalle: '', detalleView: '', imagenes: ['', '', '', ''] },
    { id: 20, nombre: 'Producto T', precio: 1050, categoria: 'Accesorios', detalle: '', detalleView: '', imagenes: ['', '', '', ''] }
];


const categoriasPermitidas = ['Teclado', 'Cuerda', 'Viento', 'Percusión', 'Accesorios'];

const AdminProductos = () => {
    const [productos, setProductos] = useState(productosFicticios);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(Math.ceil(productosFicticios.length / 8));
    const [productosPorPagina] = useState(8);

    const [showAddForm, setShowAddForm] = useState(false);
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [categoria, setCategoria] = useState('');
    const [detalle, setDetalle] = useState('');
    const [detalleView, setDetalleView] = useState('');
    const [imagenes, setImagenes] = useState(['', '', '', '']);

    useEffect(() => {
        setTotalPages(Math.ceil(productos.length / productosPorPagina));
    }, [productos, productosPorPagina]);

    const handleEdit = (id) => {
        console.log('Editar producto con ID:', id);
    };

    const handleDelete = (id) => {
        console.log('Eliminar producto con ID:', id);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * productosPorPagina;
    const currentProductos = productos.slice(startIndex, startIndex + productosPorPagina);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: productos.length + 1,
            nombre,
            precio: parseFloat(precio),
            categoria,
            detalle,
            detalleView,
            imagenes
        };
        setProductos([...productos, newProduct]);
        setNombre('');
        setPrecio('');
        setCategoria('');
        setDetalle('');
        setDetalleView('');
        setImagenes(['', '', '', '']);
        setShowAddForm(false);
    };

    const handleImageChange = (index, value) => {
        const newImagenes = [...imagenes];
        newImagenes[index] = value;
        setImagenes(newImagenes);
    };

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
                            onClick={() => setShowAddForm(!showAddForm)}
                        >
                            {showAddForm ? 'Cancelar' : 'Agregar Producto'}
                        </Button>
                    </Col>
                </Row>

                {showAddForm && (
                    <Form onSubmit={handleSubmit} className="mb-3">
                        <Form.Group controlId="formNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Ingrese el nombre del producto" 
                                value={nombre} 
                                onChange={(e) => setNombre(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formPrecio">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control 
                                type="number" 
                                placeholder="Ingrese el precio del producto" 
                                value={precio} 
                                onChange={(e) => setPrecio(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formCategoria">
                            <Form.Label>Categoría</Form.Label>
                            <Form.Control 
                                as="select" 
                                value={categoria} 
                                onChange={(e) => setCategoria(e.target.value)}
                                required
                            >
                                <option value="">Seleccionar categoría</option>
                                {categoriasPermitidas.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formDetalle">
                            <Form.Label>Detalle</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                placeholder="Ingrese los detalles del producto" 
                                value={detalle} 
                                onChange={(e) => setDetalle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formDetalleView">
                            <Form.Label>Detalle de Vista</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                placeholder="Ingrese los detalles de vista del producto" 
                                value={detalleView} 
                                onChange={(e) => setDetalleView(e.target.value)}
                            />
                        </Form.Group>
                        {[0, 1, 2, 3].map(index => (
                            <Form.Group controlId={`formImagen${index}`} key={index}>
                                <Form.Label>Imagen {index + 1}</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder={`Ingrese la URL de la imagen ${index + 1}`} 
                                    value={imagenes[index]} 
                                    onChange={(e) => handleImageChange(index, e.target.value)}
                                />
                            </Form.Group>
                        ))}
                        <Button variant="primary" type="submit" className="mt-3">
                            Agregar Producto
                        </Button>
                    </Form>
                )}

                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Categoría</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentProductos.map((producto) => (
                            <tr key={producto.id}>
                                <td>{producto.id}</td>
                                <td>{producto.nombre}</td>
                                <td>${producto.precio}</td>
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
            </div>
        </Container>
    );
};

export default AdminProductos;
