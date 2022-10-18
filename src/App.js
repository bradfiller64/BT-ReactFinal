import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import ProductList from './ProductList.js';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<h1>PRODUCTS</h1>} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<ProductList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
