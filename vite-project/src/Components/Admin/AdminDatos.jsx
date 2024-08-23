import React, { useState, useEffect } from 'react';
import { Col, Container, Form, Button } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext';

const MisDatos = () => {
  const { user, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    id_usuario: '',
    nombre: '',
    apellido: '',
    correo: '',
    direccion: '',
    contraseña: '',
    rol: ''
  });

  useEffect(() => {
    if (user) {
      setUserData({
        id_usuario: user.id_usuario,
        nombre: user.nombre,
        apellido: user.apellido,
        correo: user.correo,
        direccion: user.direccion || '', // Asumiendo que dirección puede ser opcional
        contraseña: '', // No mostrar la contraseña
        rol: user.esAdmin ? 'Administrador' : 'Usuario'
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/usuarios/${userData.id_usuario}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: userData.nombre,
          apellido: userData.apellido,
          correo: userData.correo,
          direccion: userData.direccion,
          contraseña: userData.contraseña || undefined, // No enviar la contraseña si está vacía
          esAdmin: userData.rol === 'Administrador'
        }),
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
                name="id_usuario"
                value={userData.id_usuario}
                readOnly
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={userData.nombre}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                name="apellido"
                value={userData.apellido}
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
                name="correo"
                value={userData.correo}
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
              <Form.Text className="text-muted">
                Deja el campo vacío si no deseas cambiar la contraseña.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" onClick={handleSave}>
              Guardar
            </Button>
          </Form>
        ) : (
          <>
            <p>ID : {userData.id_usuario}</p>
            <hr />
            <p>Nombre : {userData.nombre}</p>
            <hr />
            <p>Apellido : {userData.apellido}</p>
            <hr />
            <p>Dirección : {userData.direccion}</p>
            <hr />
            <p>Rol : {userData.rol}</p>
            <hr />
            <p>Email : {userData.correo}</p>
            <hr />
            <p>Contraseña : ******</p> {/* No mostrar la contraseña */}
          </>
        )}
      </Col>
    </Container>
  );
};

export default MisDatos;
