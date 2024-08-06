import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import DetailNavbar from '../Components/DetailNavbar';

const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <div>
       {isHomePage ? <Navbar /> : <DetailNavbar />}
      <div className="container">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;