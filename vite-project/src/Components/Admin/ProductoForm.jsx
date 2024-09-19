import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import categoriasPermitidas from '../utils/categoriasPermitidas'; // Ajusta la ruta según donde esté tu archivo JSON

const ProductoForm = ({ showModal, setShowModal, productos, setProductos, editProductId, productoToEdit, setEditProductId }) => {
    const [nombre, setNombre] = useState('');
    const [precioDiario, setPrecioDiario] = useState('');
    const [categoria, setCategoria] = useState('');
    const [detalle, setDetalle] = useState('');
    const [detalleview, setDetalleview] = useState('');
    const [imagenes, setImagenes] = useState(['', '', '', '']);
    const [caracteristicas, setCaracteristicas] = useState({
        "material de construccion": '',
        "portabilidad": '',
        "tecnologia": '',
        "clasificacion": '',
        "tamaño": '',
        "peso": ''
    });

    const token = localStorage.getItem('token'); // Obtener el token JWT

    useEffect(() => {
        if (productoToEdit) {
            setNombre(productoToEdit.nombre);
            setPrecioDiario(productoToEdit.precioDiario || '');
            setCategoria(productoToEdit.categoria);
            setDetalle(productoToEdit.detalle);
            setDetalleview(productoToEdit.detalleview);
            setImagenes(productoToEdit.imagenes || ['', '', '', '']);
            // setCaracteristicas(product.caracteristicas);
        } else {
            resetForm();
        }
    }, [productoToEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newProduct = {
            nombre,
            categoria,
            // precioDiario: parseFloat(precioDiario),
            precioDiario,
            imagenes,
            detalle,
            detalleview,
        };

        // Verificar si el token existe
        if (!token) {
            console.error('No se encontró un token en localStorage');
            return;
        }

        // Mostrar el token y el JSON que se enviará en la solicitud
        console.log('Token enviado:', token);
        console.log('Producto enviado:', JSON.stringify(newProduct));

        try {
            let response;
            if (editProductId) {
                // Si estamos editando, enviamos un PUT request
                response = await fetch(`http://localhost:8080/api/admin/instrumento/modificarInstrumento/${editProductId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` // Enviar el token en el encabezado
                    },
                    body: JSON.stringify(newProduct), // Verifica el cuerpo de la solicitud
                });
            } else {
                // Si estamos agregando uno nuevo, enviar un POST request (puedes modificar esta parte si es necesario)
                response = await fetch('http://localhost:8080/api/admin/instrumento/registrarInstrumento', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(newProduct)
                });
            }

            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const data = await response.json();

            if (editProductId) {
                // Actualizar el producto en la lista de productos
                setProductos(productos.map(producto => producto.id === editProductId ? data : producto));
            } else {
                // Agregar el nuevo producto a la lista
                setProductos([...productos, data]);
            }

            setShowModal(false);
            resetForm();
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
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
        setPrecioDiario('');
        setCategoria('');
        setDetalle('');
        setDetalleview('');
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
        <Modal show={showModal} onHide={() => { setShowModal(false); resetForm(); }}>
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
                    <Form.Group controlId="formPrecioDiario" className="mb-3">
                        <Form.Label>Precio Diario</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Ingrese el precio del producto"
                            value={precioDiario}
                            onChange={(e) => setPrecioDiario(e.target.value)}
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
                                <option key={cat.name} value={cat.name}>{cat.name}</option>
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
                            value={detalleview}
                            onChange={(e) => setDetalleview(e.target.value)}
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