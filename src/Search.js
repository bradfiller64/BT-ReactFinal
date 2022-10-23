import React, { useEffect } from 'react';
import axios from 'axios';
import { useContext, useState } from 'react';
import { ProductContext } from './ProductContext';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';

function Search() {
    const query = useQuery().get('query');
    const [results, setResults] = useState([]);
    let { deleteProduct } = useContext(ProductContext);

    function handleDeleteProduct(id) {
        deleteProduct(id);
    }

    useEffect(() => {
        axios
            .get('http://localhost:3001/products?q=' + encodeURI(query))
            .then((result) => {
                setResults(result.data);
            });
    }, [query]);

    if (query.length === 0) {
        return <h1>No Products Found</h1>;
    }
    if (results.length === 0) {
        return <h1>Product Not Found</h1>;
    }

    if (results) {
        return (
            <>
                {results.map(
                    ({ id, productName, description, price, imageURL, condition }) => {
                        return (
                            <div key={id}>
                                <Card className="align-self=start w-25" bg='dark' border='success'>
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
                                        <Link to={`/products/${id}`} className='btn btn-success'>
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
            </>
        );
    }
}

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default Search;
