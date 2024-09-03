import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroContent = () => {
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

                {/* Barra de búsqueda */}
                <div className="search-bar mt-4">
                    <div className="row justify-content-center">
                        <div className="col-md-3 mb-2">
                            <select className="form-select" defaultValue="">
                                <option value="" disabled>
                                    Instrumento
                                </option>
                                <option value="cuerda">Cuerda</option>
                                <option value="teclado">Teclado</option>
                                <option value="viento">Viento</option>
                                <option value="percusion">Percusión</option>
                                <option value="accesorios">Accesorios</option>
                            </select>
                        </div>
                        <div className="col-md-3 mb-2">
                            <input
                                type="date"
                                className="form-control"
                                placeholder="Fecha de inicio"
                            />
                        </div>
                        <div className="col-md-3 mb-2">
                            <input
                                type="date"
                                className="form-control"
                                placeholder="Fecha de entrega"
                            />
                        </div>
                        <div className="col-md-2 mb-2">
                            <button className="btn btn-primary w-100">
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
