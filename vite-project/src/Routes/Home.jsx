import React from 'react';
import HomeDestacados from '../Components/HomeDestacados';
import HomeBusqueda from '../Components/HomeBusqueda';

const Home = ({ searchResults, searchTerm, startDate, endDate, onClearFilters }) => {
    const searchPerformed = searchTerm !== '' || (startDate && endDate);

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/+59896422000', '_blank');
    };

    return (
        <div className="container">
            {searchPerformed ? (
                <HomeBusqueda
                    filteredInstruments={searchResults}
                    searchTerm={searchTerm}
                    startDate={startDate}
                    endDate={endDate}
                    onClearFilters={onClearFilters}
                />
            ) : (
                <HomeDestacados />
            )}

            <a
                id="whatsapp-button"
                className="whatsapp-button"
                onClick={handleWhatsAppClick}
            >
                <i className="fab fa-whatsapp"></i>
            </a>
        </div>
    );
};

export default Home;
