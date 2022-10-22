import React from 'react';
import './styles/ProductList.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';
import { Link, Outlet } from 'react-router-dom';
import { ProductContext } from './ProductContext';

function Welcome() {
    function productList(products) {
        if (products === null) return;
        return products.slice(0, 3).map((product) => (
            <ListGroup.Item key={product.id}>
                <Link to={`/products/${product.id}`} key={product.id}>
                    {product.productName} - ${product.price}
                </Link>
            </ListGroup.Item>
        ));
    }

    return (
        <>
            <h1>Welcome</h1>
            <Stack direction="horizontal" gap={3}>
                <ListGroup className="align-self-start w-75">
                    <ProductContext.Consumer>
                        {({ products }) => productList(products)}
                    </ProductContext.Consumer>
                </ListGroup>
                <Outlet />
            </Stack>
        </>
    );
}


export default Welcome