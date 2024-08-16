import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/Routes/Home';
import Detail from '../src/Routes/Detail';
import Layout from '../src/Layout/Layout';
import DetailView from '../src/Routes/DetailView';
import Login from '../src/Components/Login';
import Register from '../src/Components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/DetailView/:id" element={<DetailView />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
</Router>
  );
};

export default App;