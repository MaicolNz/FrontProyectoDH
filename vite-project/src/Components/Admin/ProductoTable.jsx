import React from 'react';
import { Table, Button } from 'react-bootstrap';

const ProductoTable = ({ productos, onEdit, onDelete }) => {
    return (
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
                {productos.map((producto) => (
                    <tr key={producto.id}>
                        <td>{producto.id}</td>
                        <td>{producto.nombre}</td>
                        <td>${producto.precio}</td>
                        <td>{producto.categoria}</td>
                        <td>
                            <Button 
                                variant="warning" 
                                onClick={() => onEdit(producto.id)} 
                                className="me-2"
                            >
                                Editar
                            </Button>
                            <Button 
                                variant="danger" 
                                onClick={() => onDelete(producto.id)}
                            >
                                Eliminar
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default ProductoTable;
