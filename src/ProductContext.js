import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = (props) => {
    const url = 'http://localhost:3001/products';

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            await refreshProducts();
        }
        getProducts();
    }, []);

    async function refreshProducts() {
        const response = await axios.get(`${url}`);
        setProducts(response.data);
    }

    async function getProduct(id) {
        return axios
            .get(`${url}/${id}`)
            .then((response) => new Promise((resolve) => resolve(response.data)));
    }

    async function deleteProduct(id) {
        const result = await axios.delete(`${url}/${id}`)
        refreshProducts();
        return result
    }

    async function addProduct(product) {
        const response = await axios.post(`${url}`,
            product
        );
        refreshProducts();
        return await new Promise((resolve) => resolve(response.data));
    }

    async function updateProduct(product) {
        const response = await axios.put(`${url}/${product.id}`,
            product
        );
        refreshProducts();
        return await new Promise((resolve) => resolve(response.data));
    }

    return (
        <ProductContext.Provider
            value={{
                products,
                getProduct,
                deleteProduct,
                addProduct,
                updateProduct,
            }}
        >
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductContext;