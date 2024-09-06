import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import HeroContent from '../Components/HeroContent';
import Footer from '../Components/Footer';
import Home from '../Routes/Home';
import instrumentosData from '../Components/utils/instruments.json';
import occupiedDatesData from '../Components/utils/occupiedDates.json';


const Layout = ({ children }) => {
  const location = useLocation();
  const showHeroContent = location.pathname === '/';

  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState([null, null]);
  const [searchResults, setSearchResults] = useState([]);
  const [instrumentos, setInstrumentos] = useState([]);
  const [occupiedDates, setOccupiedDates] = useState({});

  useEffect(() => {
    // Cargar los datos de instrumentos y fechas ocupadas
    console.log('Loading data...');
    console.log('Instrumentos Data:', instrumentosData);
    console.log('Occupied Dates Data:', occupiedDatesData);
    setInstrumentos(instrumentosData);
    setOccupiedDates(occupiedDatesData);
  }, []);


  const handleSearch = ({ searchTerm, startDate, endDate }) => {
    console.log('Handling search...');
    console.log('Search Term:', searchTerm);
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
    console.log('Instrumentos:', instrumentos);
    console.log('Occupied Dates:', occupiedDates);
    // Lógica para filtrar instrumentos basado en searchTerm, startDate, endDate
    setSearchTerm(searchTerm);
    setDateRange([startDate, endDate]);
    const filteredInstruments = instrumentos.filter(instrumento => {
      const dates = occupiedDates[instrumento.id] || [];
      return dates.every(([start, end]) => {
        const startUnavailable = new Date(start) <= endDate;
        const endUnavailable = new Date(end) >= startDate;
        return !(startUnavailable && endUnavailable);
      });
    }).filter(instrumento =>
      instrumento.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredInstruments);
    console.log("search", searchResults)
  };
  console.log("search carga y filtra bien los instrumentos", searchResults)

  const handleClearFilters = () => {
    setSearchTerm('');
    setDateRange([null, null]);
    setSearchResults([]);
  };

  return (
    <>
      <Navbar />
      <div>
        {showHeroContent && (
          <HeroContent
            onSearch={handleSearch}
            searchTerm={searchTerm}
            dateRange={dateRange}
            onClearFilters={handleClearFilters}
          />
        )}
        {showHeroContent ? (
          <Home
            searchResults={searchResults}
            searchTerm={searchTerm}
            startDate={dateRange[0]}
            endDate={dateRange[1]}
            onClearFilters={handleClearFilters}
          />
        ) : (
          children
        )}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
