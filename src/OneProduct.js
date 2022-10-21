import React, { useContext, useState, useEffect } from 'react';
import { Card, Button, Spinner, Alert } from 'react-bootstrap'
import { useParams, useNavigate, Link } from "react-router-dom"
import ProductContext from './ProductContext.js'

function OneProduct() {

    let params = useParams();

    let navigate = useNavigate();

    let { getProduct, deleteProduct } = useContext(ProductContext);

    let [product, setProduct] = useState();

    let [error, setError] = useState();

    useEffect(() => {
        setError(null);

        async function fetch() {
            await getProduct(params.productId)
                .then((product) => setProduct(product))
                .catch((message) => setError(message));
        }

        fetch();
    }, [params.productId, getProduct]);

    function loading() {
        return (
            <div className='w-25 text-center'>
                <Spinner animation='border' />
            </div>
        );
    }

    function errorMessage() {
        return (
            <Alert variant='danger'>
                Error Found (error)
            </Alert>
        )
    }

    function productCard() {
        let { id, productName, description, price, imageURL, condition } = product;
        return (

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
                    <Button variant="secondary">View</Button>
                    <Button variant="primary" style={{ margin: '10px' }}>
                        Edit
                    </Button>
                    <Button variant="danger">Delete</Button>
                </Card.Body>
            </Card>
        )
    }

    if (error) return errorMessage();
    if (product === undefined) return loading();
    return product.id !== parseInt(params.id)

}


export default OneProduct;