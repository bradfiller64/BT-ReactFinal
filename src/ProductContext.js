import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductProvider = (props) => {
    const url = 'http://localhost:3001/products';

    const [products, setPRoducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            await refreshProducts();
        }
        getProducts();
    }, []);

    async function refreshProducts() {
        const response = await axios.get(`${url}`);
        setPRoducts(response.data);
    }

    async function getProduct(id) {
        return axios
            .get(`${url}/${id}`)
            .then((response) => new Promise((resolve) => resolve(response.data)));
    }

    async function deleteProduct(id) {
        const result = await axios.delete(`${url}/${id}`)
        return refreshProducts(result);
    }

    async function addProduct(product) {
        const response = await axios.post(`${url}`,
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