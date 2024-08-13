import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const Card = ({ instrumento, image, id, categoria, detalle }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/detail/${id}`);
    };

    return (
        <div className="card mb-4" style={{ maxWidth: "100%" }}>
            <div className="row g-0">
                <div
                    className="col-md-6 d-flex align-items-center"
                    style={{ backgroundColor: "#EAEAEB", borderRadius: "20px" }}
                >
                    <img
                        src={image}
                        alt={instrumento}
                        className="img-fluid rounded-start"
                        style={{ objectFit: "contain" }}
                    />
                </div>
                <div className="col-md-6">
                    <div className="card-body d-flex flex-column justify-content-between">
                        <div>
                            <p className="category-text">{categoria}</p>
                            <h5 className="card-title">{instrumento}</h5>
                            <p className="card-detail">{detalle}</p>
                        </div>
                        <p
                            className="text-end text-success"
                            style={{ cursor: "pointer" }}
                            onClick={handleClick}
                        >
                            Ver más
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    instrumento: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    categoria: PropTypes.string.isRequired,
    detalle: PropTypes.string.isRequired,
};

export default Card;
