import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext';

const MisDatos = () => {
  const { user, fetchUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    id_usuario: '',
    nombre: '',
    apellido: '',
    correo: '',
    direccion: '',
    telefono: '',
    contraseña: '',
    rol: ''
  });
  const [originalPassword, setOriginalPassword] = useState('');

  useEffect(() => {
    if (user) {
      console.log('Usuario desde el token:', user);
      console.log('Direccion:', user.direccion);
      console.log('Telefono:', user.celular);
      setUserData({
        id_usuario: user.idUsuario,  // Usamos 'user.idUsuario' tal como aparece en el token
        nombre: user.nombre,
        apellido: user.apellido,
        correo: user.sub,  // 'sub' sigue siendo el correo electrónico
        direccion: user.direccion || '',  // Si no tiene dirección, ponemos cadena vacía
        celular: user.celular || '',  // Si no tiene dirección, ponemos cadena vacía
        contraseña: '', // Contraseña vacía para permitir la edición
        rol: user.role[0] === 'ADMIN' ? 'Administrador' : 'Usuario'
      });
      setOriginalPassword(user.contraseña); // Guardamos la contraseña original
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSave = async () => {
    try {
      console.log('Datos del usuario:', userData);
  
      if (!userData.id_usuario) {
        console.error('ID de usuario no encontrado');
        return;
      }


      //console.log(user);

      console.log(userData);
      

     // console.log(user.celular);
      
  
      // Preparar el cuerpo de la solicitud, excluyendo la contraseña si no ha cambiado
      const body = {
        id: userData.id_usuario,  // Usamos 'id_usuario' correctamente aquí
        nombre: userData.nombre,
        apellido: userData.apellido,
        correo: userData.correo,
        direccion: userData.direccion,
        celular: userData.celular,
        rol: userData.rol
      };
  
      if (userData.contraseña.trim() !== '') {
        body.contraseña = userData.contraseña;
      } else {
        body.contraseña = originalPassword; // Mantener la contraseña original si no se ha cambiado
      }
  
      const response = await fetch(`http://localhost:8080/modificarUsuario/${userData.id_usuario}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      });
  
      if (response.ok) {
        await fetchUser(); // Actualiza el contexto con la información más reciente del usuario
        setIsEditing(false);
      } else {
        console.error('Error updating user:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <Container className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Mis Datos</h2>
          <Button
            variant="primary"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? 'Cancelar' : 'Editar'}
          </Button>
        </div>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  value={userData.nombre}
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  name="apellido"
                  value={userData.apellido}
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-3">
              <Form.Group>
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  name="correo"
                  value={userData.correo}
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group>
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  type="text"
                  name="direccion"
                  value={userData.direccion}
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group>
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="text"
                  name="celular"
                  value={userData.celular}
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
              </Form.Group>
            </Col>

          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="contraseña"
                  value={userData.contraseña}
                  onChange={handleChange}
                  readOnly={!isEditing}
                />
                <Form.Text className="text-muted">
                  Deja el campo vacío si no deseas cambiar la contraseña.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Rol</Form.Label>
                <Form.Control
                  type="text"
                  name="rol"
                  value={userData.rol}
                  readOnly
                />
              </Form.Group>
            </Col>
          </Row>
          {isEditing && (
            <Button
              variant="success"
              onClick={handleSave}
              className="mt-3"
            >
              Guardar
            </Button>
          )}
        </Form>
      </div>
    </Container>
  );
};

export default MisDatos;