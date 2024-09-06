import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeBusqueda = ({ searchTerm, startDate, endDate, instrumentos, occupiedDates }) => {
    const [filteredInstruments, setFilteredInstruments] = useState([]);

    // const HomeBusqueda = ({ filteredInstruments, currentPage, handlePageChange, totalPages }) => {
    //     const indexOfLastInstrument = currentPage * 10; // 10 instrumentos por página
    //     const indexOfFirstInstrument = indexOfLastInstrument - 10;
    //     const currentInstruments = filteredInstruments.slice(indexOfFirstInstrument, indexOfLastInstrument);
    useEffect(() => {
        const filterInstrumentsByDate = () => {
            return instrumentos.filter(instrumento => {
                const dates = occupiedDates[instrumento.id] || [];
                return dates.every(([start, end]) => {
                    const startUnavailable = new Date(start) <= endDate;
                    const endUnavailable = new Date(end) >= startDate;
                    return !(startUnavailable && endUnavailable);
                });
            });
        };
        const filteredByDate = filterInstrumentsByDate();

        const filteredBySearchTerm = filteredByDate.filter(instrumento =>
            instrumento.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredInstruments(filteredBySearchTerm);
    }, [searchTerm, startDate, endDate, instrumentos, occupiedDates]);


    return (
        <div className="row">
            {filteredInstruments.length > 0 ? (
                filteredInstruments.map((instrument) => (
                    <div key={instrument.id} className="col-12 col-md-6 mb-4">
                        <Card
                            instrumento={instrument.nombre}
                            image={instrument.imagenes[0]}
                            id={instrument.id}
                            categoria={instrument.categoria}
                            detalle={instrument.detalle}
                        />
                    </div>
                ))
            ) : (
                <div className="col-12 text-center">No hay instrumentos que coincidan con tu búsqueda.</div>
            )}
        </div>
    );
};

export default HomeBusqueda;
