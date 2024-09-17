import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';

const Profile = () => {

  const userData = {
    id: 1255,
    nombre: 'Marcelo',
    apellido: 'Gimenez',
    direccion: 'Av. Italia 2568 - Montevideo',
    rol: 'Usuario',
    email: 'marcelo.gimenez@gmail.com',
    password: '****************'
  };

  return (
    <Container
      className="mt-5"
      style={{
        maxWidth: 'auto',
        margin: 'auto',
        height: '597px',
      }}
    >
      <div
        className="d-flex justify-content-between align-items-center mb-3"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem',
        }}
      >
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Mis datos</h2>
        <Button
          variant="dark"
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '25px',
            padding: '0.5rem 1rem',
            fontSize: '0.875rem',
          }}
        >
          <i className="fas fa-pen" style={{ marginRight: '5px' }}></i>
          Editar
        </Button>
      </div>
      <Table
        striped
        bordered
        hover
        responsive
        style={{
          width: '100%',
          borderCollapse: 'collapse',
        }}
      >
        <tbody>
          <tr>
            <td>ID</td>
            <td style={{ fontWeight: 'bold' }}>{userData.id}</td>
          </tr>
          <tr>
            <td>Nombre</td>
            <td style={{ fontWeight: 'bold' }}>{userData.nombre}</td>
          </tr>
          <tr>
            <td>Apellido</td>
            <td style={{ fontWeight: 'bold' }}>{userData.apellido}</td>
          </tr>
          <tr>
            <td>Dirección</td>
            <td style={{ fontWeight: 'bold' }}>{userData.direccion}</td>
          </tr>
          <tr>
            <td>Rol</td>
            <td style={{ fontWeight: 'bold' }}>{userData.rol}</td>
          </tr>
          <tr>
            <td>E-mail</td>
            <td style={{ fontWeight: 'bold' }}>{userData.email}</td>
          </tr>
          <tr>
            <td>Contraseña</td>
            <td style={{ fontWeight: 'bold' }}>{userData.password}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Profile;