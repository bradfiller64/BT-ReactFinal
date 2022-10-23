import React, { useContext, useState, useEffect } from 'react';
import { Card, Button, Spinner, Alert } from 'react-bootstrap'
import { useParams, useNavigate, Link } from "react-router-dom"
import ProductContext from './ProductContext.js'
import './styles/OneProduct.css'




function OneProduct() {

    let params = useParams();

    let navigate = useNavigate();

    let { getProduct, deleteProduct } = useContext(ProductContext);

    let [product, setProduct] = useState();

    let [error, setError] = useState();

    useEffect(() => {
        setError(null);

        async function fetch() {
            await getProduct(params.id)
                .then((product) => setProduct(product))
                .catch((message) => setError(message));
        }

        fetch();
    }, [params.id, getProduct]);

    function handleDeleteProduct(id) {
        deleteProduct(id);
        navigate('/products');
    }

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
                <Card.Img variant="top" src={imageURL} />
                <Card.Body>
                    <Card.Title>{productName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        <span style={{ color: "white" }}>${price}</span>
                    </Card.Subtitle>
                    <br></br>
                    <Card.Text>
                        <strong>Description:</strong> <span style={{ color: "white" }}>{description}</span>
                    </Card.Text>
                    <Card.Text>
                        <br></br>
                        <strong>Condition:</strong> <span style={{ color: "white" }}>{condition}</span>
                    </Card.Text>
                    <Link to={`/products/${id}`} className='btn btn-secondary'>
                        View
                    </Link>
                    <Link to={`/products/${id}/edit`} style={{ margin: '10px' }} className='btn btn-primary'>
                        Edit
                    </Link>
                    <Button variant='danger' onClick={handleDeleteProduct.bind(this, id)}>
                        Delete
                    </Button>
                </Card.Body>
            </Card>
        )
    }

    if (error) return errorMessage();
    if (product === undefined) return loading();
    return product.id !== parseInt(params.id) ? loading() : productCard();

}


export default OneProduct;