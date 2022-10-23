import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { ProductContext } from './ProductContext';
import './styles/ProductList.css'



function ProductList() {
    let navigate = useNavigate();

    let { deleteProduct } = useContext(ProductContext)

    function handleDeleteProduct(id) {
        deleteProduct(id);
        navigate('/products');
    }

    return (
        <ProductContext.Consumer>
            {({ products }) => {
                return (
                    <>
                        <h1>Products</h1>
                        <div className='card-container'>
                            {products.map(
                                ({
                                    id,
                                    productName,
                                    price,
                                    description,
                                    imageURL,
                                    condition
                                }) => {
                                    return (
                                        <div key={id}>
                                            <Card bg='dark' border='success' >
                                                <Card.Img id='cardImg' variant='top' src={imageURL} />
                                                <Card.Body>
                                                    <Card.Title>{productName}</Card.Title>
                                                    <Card.Subtitle className='mb-2 text-muted'>
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
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </>
                );
            }}
        </ProductContext.Consumer >
    );
}

export default ProductList;
