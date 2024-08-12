import React from "react";

const HamburgerMenu = ({ isMenuOpen, toggleMenu }) => {
    return (
        <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
        >
            <span className="navbar-toggler-icon"></span>
        </button>
    );
};

export default HamburgerMenu;
