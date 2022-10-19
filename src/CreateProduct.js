import { useState, useContext, useEffect } from 'react';
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
        condition: ''
    });

    let { id,
        productName,
        description,
        price,
        imageURL,
        condition } = product;

    let { getProduct, addProduct, updateProduct } = useContext(ProductContext);
    let navigate = useNavigate();
}
export default CreateProduct;