import React from "react"
import ProductCard from './ProductCard';
import products from './db.js'

function Welcome() {
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

export default Welcome