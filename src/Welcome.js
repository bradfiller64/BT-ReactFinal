import React from "react"
import ProductCard from './ProductCard';
import products from './db.js'

function Welcome() {
    return (
        <div>
            <h1>Products</h1>
            <div className="card-container">
                {products.map((product) => (
                    <ProductCard product={product} />
                ))}
            </div>
        </div>
    )
};

export default Welcome