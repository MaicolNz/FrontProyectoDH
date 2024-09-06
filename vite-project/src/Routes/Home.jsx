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

    return (
        <div className="container">
            {searchPerformed ? (
                <HomeBusqueda filteredInstruments={filteredInstruments} />
            ) : (
                <HomeDestacados />
            )}
        </div>
    );
};

export default Home;
