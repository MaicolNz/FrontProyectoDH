import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HeroContent from '../Components/HeroContent';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <div>
        {/* Mostrar HeroContent solo si la ruta es "/" */}
        {location.pathname === '/' && <HeroContent />}
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;