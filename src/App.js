import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Welcome from './Welcome.js'
import ProductList from './ProductList.js';
import OneProduct from './OneProduct.js';
import CreateProduct from './CreateProduct.js';
import './styles/App.css'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Welcome />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="products/:id" element={<OneProduct />} />
            <Route path="products/:id/edit" element={<CreateProduct />} />
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/update/:id" element={<CreateProduct />} />
          </Route>
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter >
    </div >
  );
}

export default App;