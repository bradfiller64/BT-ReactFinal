import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductContext } from './ProductContext.js';
import { useContext } from 'react';

function ProductList(props) {
    let params = useParams();
    let navigate = useNavigate();

    let { getProduct, deleteProduct } = useContext(ProductContext);
    let product = getProduct(params.productId);
    if (product === undefined) {
        return <p>Product Not Found.</p>;
    }

    let { id,
        productName,
        description,
        price,
        imageURL,
        condition } = product;

    function handleDeleteProduct(id) {
        deleteProduct(id);
        navigate('/products');
    }

    return product.map((product) =>
        <>
            <h1>Products</h1>
            <Card className="text-center col-md-10 mx-auto my-3">
                <Card.Img
                    variant='top'
                    src={imageURL}
                />
                <Card.Body>
                    <Card.Title>{productName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">${price}</Card.Subtitle>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Card.Text>
                    <Button variant="primary">Click Here</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default ProductList