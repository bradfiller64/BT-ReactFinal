import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({ product }) {
    return (
        <Card className="align-self=start w-25">
            <Card.Img variant="top" src={product.imageURL} />
            <Card.Body>
                <Card.Title>{product.productName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    ${product.price}
                </Card.Subtitle>
                <Card.Text>
                    <strong>Description:</strong> <span>{product.description}</span>
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

export default ProductCard;