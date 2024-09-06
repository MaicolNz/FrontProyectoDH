import React from 'react';
import Card from '../Components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeBusqueda = ({ filteredInstruments, onClearFilters }) => {
  return (
    <div>
      <h2>Resultados</h2>
      <button className="btn btn-secondary mb-3" onClick={onClearFilters}>
        Quitar filtros
      </button>
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
    </div>
  );
};

export default HomeBusqueda;
