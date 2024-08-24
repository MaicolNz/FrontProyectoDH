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
        <div className=" card card-dest mb-4" style={{ maxWidth: "100%" }}>
            <div className="row g-0">
                <div className="card-bg col-md-6 d-flex align-items-center">
                    <img
                        src={image}
                        alt={instrumento}
                        className="img-card"
                    />
                </div>
                <div className="col-md-6">
                    <div className="card-body d-flex flex-column">
                        <p className="category-text">{categoria}</p>
                        <h5 className="card-title">{instrumento}</h5>
                        <p className="card-detail">{detalle}</p>
                        <p className="card-link text-end"
                            style={{ cursor: "pointer" }}
                            onClick={handleClick}>
                            VER MÁS <i className="bi bi-chevron-right ms-1"></i>
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
