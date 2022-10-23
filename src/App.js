import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Welcome from './Welcome.js'
import ProductList from './ProductList.js';
import OneProduct from './OneProduct.js';
import Search from './Search.js';
import CreateProduct from './CreateProduct.js';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './styles/App.css'


function App() {
  return (
    <div className='content'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Welcome />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="products/:id" element={<OneProduct />} />
            <Route path="products/:id/edit" element={<CreateProduct />} />
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/Search" element={<Search />} />
          </Route>
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter >
      <br></br>
      <Navbar
        expand="lg"
        variant="dark"
        bg="dark"
        style={{ marginTop: '20rem' }}
      >
        <Container id="footer">
          <Navbar.Text>LoFi Games by: Brad Filler</Navbar.Text>
        </Container>
      </Navbar>
    </div >
  );
}

export default App;