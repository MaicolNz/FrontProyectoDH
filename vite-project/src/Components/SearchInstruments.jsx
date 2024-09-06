// SearchInstruments.js
import React, { useState } from 'react';
import { useInstruments } from './InstrumentContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SearchInstruments = () => {
    const { instruments, updateAvailableInstruments } = useInstruments();
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const isDateOccupied = (date, occupiedDates) => {
        return occupiedDates.some((occupiedDate) => {
            return (
                date.getFullYear() === occupiedDate.getFullYear() &&
                date.getMonth() === occupiedDate.getMonth() &&
                date.getDate() === occupiedDate.getDate()
            );
        });
    };

    const handleSearch = () => {
        // Lógica para filtrar instrumentos disponibles según las fechas seleccionadas
        const filteredInstruments = instruments.filter(instrument => {
            // Asumimos que tienes una función para obtener las fechas ocupadas del instrumento
            const occupiedDates = getOccupiedDatesForInstrument(instrument.id);
            return !isDateOccupied(startDate, occupiedDates) && !isDateOccupied(endDate, occupiedDates);
        });

        updateAvailableInstruments(filteredInstruments);
    };

    return (
        <div className="search-instruments text-center py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-3 mb-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Buscar instrumento"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="col-md-3 mb-2">
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            dateFormat="dd/MM/yyyy"
                            className="form-control"
                            placeholderText="Fecha de inicio"
                        />
                    </div>
                    <div className="col-md-3 mb-2">
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            dateFormat="dd/MM/yyyy"
                            className="form-control"
                            placeholderText="Fecha de entrega"
                        />
                    </div>
                    <div className="col-md-2 mb-2">
                        <button className="btn btn-primary w-100" onClick={handleSearch}>
                            Buscar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchInstruments;
