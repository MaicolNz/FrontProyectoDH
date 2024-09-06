import React, { useState } from 'react';
import HomeDestacados from '../Components/HomeDestacados';
import HomeBusqueda from '../Components/HomeBusqueda';
import HeroContent from '../Components/HeroContent';
import instruments from '../Components/utils/instruments.json';

const Home = () => {
    const [filteredInstruments, setFilteredInstruments] = useState([]);
    const [searchPerformed, setSearchPerformed] = useState(false);

    const handleSearch = (searchResults) => {
        setFilteredInstruments(searchResults);
        setSearchPerformed(true);
    };


    const handleWhatsAppClick = () => {
        window.open('https://wa.me/+59896422000', '_blank');
    };

    return (
        <div className="container">
            {searchPerformed ? (
                <HomeBusqueda filteredInstruments={filteredInstruments} />
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
