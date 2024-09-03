import React, { useState, useEffect } from 'react';
import { Table, Button, Container, Pagination, Row, Col, Form } from 'react-bootstrap';
import instrumentosData from '../utils/instruments.json'; // Ajusta la ruta según donde esté tu archivo JSON

const categoriasPermitidas = ['Teclado', 'Cuerda', 'Viento', 'Percusión', 'Accesorios'];

const AdminProductos = () => {
    const [productos, setProductos] = useState(instrumentosData);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(Math.ceil(instrumentosData.length / 8));
    const [productosPorPagina] = useState(8);

    const [showForm, setShowForm] = useState(false);
    const [editProductId, setEditProductId] = useState(null);
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [categoria, setCategoria] = useState('');
    const [detalle, setDetalle] = useState('');
    const [detalleView, setDetalleView] = useState('');
    const [imagenes, setImagenes] = useState(['', '', '', '']);
    const [caracteristicas, setCaracteristicas] = useState({
        "material de construccion": '',
        "portabilidad": '',
        "tecnologia": '',
        "clasificacion": '',
        "tamaño": '',
        "peso": ''
    });

    useEffect(() => {
        setTotalPages(Math.ceil(productos.length / productosPorPagina));
    }, [productos, productosPorPagina]);

    useEffect(() => {
        if (editProductId !== null) {
            const product = productos.find(p => p.id === editProductId);
            if (product) {
                setNombre(product.nombre);
                setPrecio(product.precio);
                setCategoria(product.categoria);
                setDetalle(product.detalle);
                setDetalleView(product.detalleView);
                setImagenes(product.imagenes);
                setCaracteristicas(product.caracteristicas);
                setShowForm(true);
            }
        }
    }, [editProductId, productos]);

    const handleEdit = (id) => {
        setEditProductId(id);
    };

    const handleDelete = (id) => {
        setProductos(productos.filter(p => p.id !== id));
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * productosPorPagina;
    const currentProductos = productos.slice(startIndex, startIndex + productosPorPagina);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: editProductId !== null ? editProductId : productos.length + 1,
            nombre,
            precio: parseFloat(precio),
            categoria,
            detalle,
            detalleView,
            imagenes,
            caracteristicas
        };

        if (editProductId !== null) {
            // Editar producto existente
            setProductos(productos.map(p =>
                p.id === editProductId ? newProduct : p
            ));
            setEditProductId(null);
        } else {
            // Agregar nuevo producto
            setProductos([...productos, newProduct]);
        }
        resetForm();
    };

    const handleImageChange = (index, value) => {
        const newImagenes = [...imagenes];
        newImagenes[index] = value;
        setImagenes(newImagenes);
    };

    const handleCaracteristicasChange = (key, value) => {
        setCaracteristicas({ ...caracteristicas, [key]: value });
    };

    const resetForm = () => {
        setNombre('');
        setPrecio('');
        setCategoria('');
        setDetalle('');
        setDetalleView('');
        setImagenes(['', '', '', '']);
        setCaracteristicas({
            "material de construccion": '',
            "portabilidad": '',
            "tecnologia": '',
            "clasificacion": '',
            "tamaño": '',
            "peso": ''
        });
        setShowForm(false);
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
                            onClick={() => {
                                resetForm();
                                setEditProductId(null);
                                setShowForm(!showForm);
                            }}
                        >
                            {showForm ? 'Cancelar' : (editProductId ? 'Cancelar Edición' : 'Agregar Producto')}
                        </Button>
                    </Col>
                </Row>

                {showForm && (
                    <Form onSubmit={handleSubmit} className="mb-3">
                        {editProductId && (
                            <Form.Group controlId="formProductId" className="mb-3">
                                <Form.Label>ID del Producto</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={editProductId} 
                                    readOnly
                                    className="form-control"
                                />
                            </Form.Group>
                        )}
                        <Form.Group controlId="formNombre" className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Ingrese el nombre del producto" 
                                value={nombre} 
                                onChange={(e) => setNombre(e.target.value)}
                                required
                                className="form-control"
                            />
                        </Form.Group>
                        <Form.Group controlId="formPrecio" className="mb-3">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control 
                                type="number" 
                                placeholder="Ingrese el precio del producto" 
                                value={precio} 
                                onChange={(e) => setPrecio(e.target.value)}
                                required
                                className="form-control"
                            />
                        </Form.Group>
                        <Form.Group controlId="formCategoria" className="mb-3">
                            <Form.Label>Categoría</Form.Label>
                            <Form.Control 
                                as="select" 
                                value={categoria} 
                                onChange={(e) => setCategoria(e.target.value)}
                                required
                                className="form-control"
                            >
                                <option value="">Seleccionar categoría</option>
                                {categoriasPermitidas.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formDetalle" className="mb-3">
                            <Form.Label>Detalle</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                placeholder="Ingrese los detalles del producto" 
                                value={detalle} 
                                onChange={(e) => setDetalle(e.target.value)}
                                className="form-control"
                            />
                        </Form.Group>
                        <Form.Group controlId="formDetalleView" className="mb-3">
                            <Form.Label>Detalle de Vista</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                placeholder="Ingrese los detalles de vista del producto" 
                                value={detalleView} 
                                onChange={(e) => setDetalleView(e.target.value)}
                                className="form-control"
                            />
                        </Form.Group>
                        {[0, 1, 2, 3].map(index => (
                            <Form.Group controlId={`formImagen${index}`} className="mb-3" key={index}>
                                <Form.Label>Imagen {index + 1}</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder={`Ingrese la URL de la imagen ${index + 1}`} 
                                    value={imagenes[index]} 
                                    onChange={(e) => handleImageChange(index, e.target.value)}
                                    className="form-control"
                                />
                            </Form.Group>
                        ))}
                        {Object.entries(caracteristicas).map(([key, value]) => (
                            <Form.Group controlId={`form${key.replace(/\s+/g, '')}`} className="mb-3" key={key}>
                                <Form.Label>{key.charAt(0).toUpperCase() + key.slice(1)}</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder={`Ingrese ${key}`} 
                                    value={value} 
                                    onChange={(e) => handleCaracteristicasChange(key, e.target.value)}
                                    className="form-control"
                                />
                            </Form.Group>
                        ))}
                        <Button variant="primary" type="submit" className="mt-3">
                            {editProductId ? 'Confirmar Edición' : 'Agregar Producto'}
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
