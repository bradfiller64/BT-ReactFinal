import React from 'react';
import products from "./db.json"
import ListGroup from 'react-bootstrap/ListGroup';
import { Card, Stack } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { ProductContext } from './ProductContext';

function Welcome() {
    function productList(products) {
        if (products === null) return;
        return products.slice(0, 3).map((product) => (
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