import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HeroContent = ({ onSearch }) => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
    const isDateOccupied = (date) => {
        // Aquí iría la lógica para verificar si una fecha está ocupada
    };
    const handleSearch = () => {
        // Llamar a la función de búsqueda pasada como prop
        onSearch({ searchTerm, startDate, endDate });
    };

    return (
        <div className="hero-content text-center py-5">
            <div className="container">
                {/* Encabezado principal */}
                <div className="hero-music">
                    <h1 className="display-4 font-weight-bold">
                        TU MÚSICA <br />
                        NUESTRO INSTRUMENTO
                    </h1>
                </div>

                {/* Título pequeño antes de la barra de búsqueda */}
                <div className="search-title mt-4">
                    <h5 style={{ color: 'white' }}>Reserva tu instrumento</h5>
                </div>

                {/* Barra de búsqueda */}
                <div className="search-bar mt-2">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <input
                                type="text"
                                className="form-control search-bar"
                                placeholder="Buscar instrumento"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <DatePicker
                                selectsRange
                                startDate={startDate}
                                endDate={endDate}
                                onChange={(update) => setDateRange(update)}
                                dateFormat="dd/MM/yyyy"
                                filterDate={(date) => !isDateOccupied(date)}
                                className="form-control search-bar"
                                placeholderText="Selecciona rango de fechas"
                                isClearable
                            />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <button className="btn btn-primary w-100" onClick={handleSearch}>
                                Buscar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroContent;
