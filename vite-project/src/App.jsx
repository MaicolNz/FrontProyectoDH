// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Routes/Home';
import Detail from './Routes/Detail/Detail';
import DetailView from './Routes/DetailView/DetailView';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Importa Bootstrap JS (incluye Popper.js)

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/detailview/:id" element={<DetailView />} />
        </Routes>
      </Layout>
    </Router>
  );
};
export default App;
