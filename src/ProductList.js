import React from 'react';
import products from './db.json'
import ListGroup from 'react-bootstrap/ListGroup';
import { Stack, Card } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { ProductContext } from './ProductContext.js';
import './styles/ProductList.css'



const ProductList = (products) => {
    function productList(products) {
        if (products === null) return;
        return products.map((product) => (
            <Card className="align-self=start w-25">
                <Card.Img variant="top" src={product.imageURL} />
                <Card.Body>
                    <Card.Title>{product.productName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        <span style={{ color: "white" }}>${product.price}</span>
                    </Card.Subtitle>
                    <br></br>
                    <Card.Text>
                        <strong>Description:</strong> <span style={{ color: "white" }}>{product.description}</span>
                    </Card.Text>
                    <Card.Text>
                        <br></br>
                        <strong>Condition:</strong> <span style={{ color: "white" }}>{product.condition}</span>
                    </Card.Text>
                    <Link to={`/products/${product.id}/edit`} className='btn btn-primary mx-3'>
                        Edit
                    </Link>
                    <Link to={`/products/${product.id}`} className='btn btn-secondary mx-3'>
                        View
                    </Link>

                </Card.Body>
            </Card>
        ));
    }

    return (
        <>
            <div>
                <h1>Products</h1>
                <Stack className="card-container" direction='horizontal' gap={3}>
                    <ListGroup className='align-self-start w-75'>
                        <ProductContext.Consumer>
                            {({ products }) => productList(products)}
                        </ProductContext.Consumer>
                    </ListGroup>
                    <Outlet />
                </Stack>
            </div>
        </>
    );
};

export default ProductList;
