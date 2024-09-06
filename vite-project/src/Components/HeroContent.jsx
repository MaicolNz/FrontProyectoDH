import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HeroContent = ({ onSearch, searchTerm, dateRange, onClearFilters }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
  const [localDateRange, setLocalDateRange] = useState(dateRange);
  const [startDate, endDate] = localDateRange;

  useEffect(() => {
    setLocalSearchTerm(searchTerm);
    setLocalDateRange(dateRange);
  }, [searchTerm, dateRange]);

  const handleSearch = () => {
    onSearch({ searchTerm: localSearchTerm, startDate, endDate });
  };

  const handleClear = () => {
    setLocalSearchTerm('');
    setLocalDateRange([null, null]);
    onClearFilters();
  };

  return (
    <div className="hero-content text-center py-5">
      <div className="container">
        <h1 className="display-4 font-weight-bold">TU MÚSICA <br /> NUESTRO INSTRUMENTO</h1>
        <div className="search-title mt-4">
          <h5 style={{ color: 'white' }}>Reserva tu instrumento</h5>
        </div>
        <div className="search-bar mt-2">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar instrumento"
                value={localSearchTerm}
                onChange={(e) => setLocalSearchTerm(e.target.value)}
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <DatePicker
                selectsRange
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => setLocalDateRange(update)}
                dateFormat="dd/MM/yyyy"
                className="form-control"
                placeholderText="Selecciona rango de fechas"
                isClearable
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <button className="btn btn-primary w-100" onClick={handleSearch}>
                Buscar
              </button>
              <button className="btn btn-secondary w-100 mt-2" onClick={handleClear}>
                Limpiar filtros
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
