import React from 'react';
import products from './db.js'
import ProductCard from './ProductCard';

import './styles/ProductList.css'


function ProductList() {
    return (
        <div>
            <br></br>
            <h1>Products</h1>
            <br></br>
            <div className="card-container">
                {products.map((product) => (
                    <ProductCard product={product} />
                ))}
            </div>
        </div>
    )
};

export default ProductList;