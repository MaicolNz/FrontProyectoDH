// Layout.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import HeroContent from '../Components/HeroContent';
import Footer from '../Components/Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  const showHeroContent = location.pathname === '/'; // Muestra HeroContent solo en la página de inicio

  return (
    <>
      <Navbar />
      <div>
        {showHeroContent && <HeroContent />}
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
