// import React, { useState, useEffect } from 'react';
// import { Table, Container, Row, Col } from 'react-bootstrap';
// import { useAuth } from '../context/AuthContext'; 
// const MisReservas = () => {
//     const { user } = useAuth();
//     const [reservas, setReservas] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);

//     // Simular una API para obtener las reservas
//     useEffect(() => {
//         const fetchReservas = async () => {
//             try {
//                 // Simular la llamada a la API para obtener las reservas del usuario
//                 const response = await fetch(`"http://localhost:8080/api/reservas?userId=${user.id}`);
//                 const data = await response.json();
//                 setReservas(data);
//             } catch (error) {
//                 console.error('Error al obtener las reservas:', error);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         if (user) {
//             fetchReservas();
//         }
//     }, [user]);

//     if (isLoading) {
//         return <p>Cargando reservas...</p>;
//     }

//     return (
//         <Container className="d-flex flex-column min-vh-100">
//             <div className="flex-grow-1">
//                 <Row className="mb-3">
//                     <Col>
//                         <h2>Mis Reservas</h2>
//                     </Col>
//                 </Row>
//                 <Table striped bordered hover responsive>
//                     <thead>
//                         <tr>
//                             <th>ID de Reserva</th>
//                             <th>Producto</th>
//                             <th>Fecha Inicio</th>
//                             <th>Fecha Fin</th>
//                             <th>Estado</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {reservas.length > 0 ? (
//                             reservas.map((reserva) => (
//                                 <tr key={reserva.id}>
//                                     <td>{reserva.id}</td>
//                                     <td>{reserva.producto}</td>
//                                     <td>{new Date(reserva.fechaInicio).toLocaleDateString()}</td>
//                                     <td>{new Date(reserva.fechaFin).toLocaleDateString()}</td>
//                                     <td>{reserva.estado}</td>
//                                 </tr>
//                             ))
//                         ) : (
//                             <tr>
//                                 <td colSpan="5" className="text-center">No tienes reservas.</td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </Table>
//             </div>
//         </Container>
//     );
// };

// export default MisReservas;

import React, { useState, useEffect } from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';
// Simular datos de reservas (tu archivo JSON)
import reservasData from '../Components/utils/reservas.json'; 

const MisReservas = () => {
    const [reservas, setReservas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Simular la obtención de reservas del usuario
    useEffect(() => {
        const fetchReservas = async () => {
            try {
                // Simular el retraso de la API con un timeout
                setTimeout(() => {
                    setReservas(reservasData.reservas);
                    setIsLoading(false);
                }, 1000); // Simula un retraso de 1 segundo
            } catch (error) {
                console.error('Error al obtener las reservas:', error);
                setIsLoading(false);
            }
        };

        fetchReservas();
    }, []);

    if (isLoading) {
        return <p>Cargando reservas...</p>;
    }

    return (
        <Container className="d-flex flex-column min-vh-100">
            <div className="flex-grow-1">
                <Row className="mb-3">
                    <Col>
                        <h2>Mis Reservas</h2>
                    </Col>
                </Row>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>ID de Reserva</th>
                            <th>Producto</th>
                            <th>Fecha Inicio</th>
                            <th>Fecha Fin</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservas.length > 0 ? (
                            reservas.map((reserva) => (
                                <tr key={reserva.id}>
                                    <td>{reserva.id}</td>
                                    <td>{reserva.producto}</td>
                                    <td>{new Date(reserva.fechaInicio).toLocaleDateString()}</td>
                                    <td>{new Date(reserva.fechaFin).toLocaleDateString()}</td>
                                    <td>{reserva.estado}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center">No tienes reservas.</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </Container>
    );
};

export default MisReservas;

