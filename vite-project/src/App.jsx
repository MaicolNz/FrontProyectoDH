import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/Routes/Home';
import Detail from '../src/Routes/Detail';
import Layout from '../src/Layout/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Layout>
</Router>
  );
};

export default App;