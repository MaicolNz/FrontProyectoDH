import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="container">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;