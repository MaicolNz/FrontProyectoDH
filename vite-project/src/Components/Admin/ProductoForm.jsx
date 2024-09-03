import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import categoriasPermitidas from '../utils/categoriasPermitidas'; // Ajusta la ruta según donde esté tu archivo JSON

const ProductoForm = ({ showModal, setShowModal, productos, setProductos, editProductId, setEditProductId }) => {
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
            }
        }
    }, [editProductId, productos]);

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
        setEditProductId(null);
        setShowModal(false);
    };

    return (
        <Modal show={showModal} onHide={resetForm}>
            <Modal.Header closeButton>
                <Modal.Title>{editProductId ? 'Editar Producto' : 'Agregar Producto'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
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
            </Modal.Body>
        </Modal>
    );
};

export default ProductoForm;
