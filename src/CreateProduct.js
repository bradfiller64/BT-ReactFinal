import React, { useState, useContext, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from './ProductContext';

function CreateProduct() {
    let params = useParams();
    let [product, setProduct] = useState({
        id: params.productId,
        productName: '',
        description: '',
        price: 0,
        imageURL: '',
        condition: '',
    });

    let { getProduct, addProduct, updateProduct } = useContext(ProductContext);

    let navigate = useNavigate();

    let { id, productName, description, price, imageURL, condition } = product;

    useEffect(() => {
        if (id === undefined) return;
        async function fetch() {
            await getProduct(id).then((product) => setProduct(product));
        }
        fetch();
    }, [id]);

    function handleChange(event) {
        setProduct((preValue) => {
            return { ...preValue, [event.target.name]: event.target.value };
        });
    }

    function addOrUpdate() {
        if (id === undefined) {
            return addProduct(product);
        } else {
            return updateProduct(product);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        addOrUpdate().then((product) => navigate(`/products/${product.id}`));
    }

    function handleCondition(event) {
        event.preventDefault();
        setProduct({ ...product, condition: event.target.value });
    }

    return (
        <div>
            <h1>Create New Product</h1>
            <div className="new-product-form">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control style={{ width: "400px", margin: "auto" }}
                            type="text"
                            name="productName"
                            value={productName}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control style={{ width: "400px", margin: "auto" }}
                            type="text"
                            name="description"
                            value={description}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Price</Form.Label>
                        <Form.Control style={{ width: "400px", margin: "auto" }}
                            type="number"
                            name="price"
                            value={price}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control style={{ width: "400px", margin: "auto" }}
                            type="text"
                            name="imageURL"
                            value={imageURL}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Condition</Form.Label>
                        <Form.Select style={{ width: "400px", margin: "auto" }} onChange={handleCondition}
                            aria-label="Is this product used?"


                        >

                            <option>Select Option</option>
                            <option>New</option>
                            <option>Used</option>

                        </Form.Select>

                    </Form.Group>
                    <Button type="submit">Save</Button>
                </Form>
            </div>
        </div>
    );
}

export default CreateProduct;
