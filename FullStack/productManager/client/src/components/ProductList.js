import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) =>{
    const {product,setProduct} = props;

    useEffect(() =>{
        axios.get("http://localhost:8000/api/product")
            .then(result =>{
                console.log(result.data);
                setProduct(result.data);
            })
            .catch(err =>console.log(err));
    }, [])
    return(
        <div>
            {
                product.map((item, index) =>{
                    return <div key={index}>
                        <Link to={'/product/' + item._id}>{item.title}</Link>
                    </div>
                })
            }
        </div>
    );
}
export default ProductList;