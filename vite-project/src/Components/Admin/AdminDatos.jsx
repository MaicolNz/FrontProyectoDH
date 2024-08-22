import React, { useState, useEffect } from 'react';
import { Col, Container, Form, Button } from 'react-bootstrap';

const MisDatos = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState({
        ID: 1,
        Nombre: 'Nombre',
        Apellido: 'Apellido',
        Email: 'Email',
        direccion: 'direccion',
        contraseña: 'contraseña',
        rol: 'rol'
    });

    useEffect(() => {
       // Backend a implementar
        // const fetchUserData = async () => {
        //     const response = await fetch('/api/user');
        //     const data = await response.json();
        //     setUserData(data);
        // };
        // fetchUserData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSave = async () => {
        try {
            const response = await fetch('/api/user', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            if (response.ok) {
                setIsEditing(false);
                alert('Datos actualizados correctamente.');
            } else {
                alert('Error al actualizar los datos.');
            }
        } catch (error) {
            alert('Error en la conexión con el servidor.');
        }
    };

    return (
        <Container>
            <div className='d-flex justify-content-between align-items-center'>
                <h2>Mis Datos</h2>
                <Button className="btn btn-primary" onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? 'Cancelar' : 'Editar'}
                </Button>
            </div>
            <hr />
            <Col>
                {isEditing ? (
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>ID</Form.Label>
                            <Form.Control
                                type="text"
                                name="ID"
                                value={userData.ID}
                                readOnly
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                name="Nombre"
                                value={userData.Nombre}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                type="text"
                                name="Apellido"
                                value={userData.Apellido}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                type="text"
                                name="direccion"
                                value={userData.direccion}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Rol</Form.Label>
                            <Form.Control
                                type="text"
                                name="rol"
                                value={userData.rol}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="Email"
                                value={userData.Email}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                name="contraseña"
                                value={userData.contraseña}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={handleSave}>
                            Guardar
                        </Button>
                    </Form>
                ) : (
                    <>
                        <p>ID : {userData.ID}</p>
                        <hr />
                        <p>Nombre : {userData.Nombre}</p>
                        <hr />
                        <p>Apellido : {userData.Apellido}</p>
                        <hr />
                        <p>Dirección : {userData.direccion}</p>
                        <hr />
                        <p>Rol : {userData.rol}</p>
                        <hr />
                        <p>Email : {userData.Email}</p>
                        <hr />
                        <p>Contraseña : {userData.contraseña}</p>
                    </>
                )}
            </Col>
        </Container>
    );
};

export default MisDatos;
