import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) =>{
    const {product,setProduct} = props;
    const removeFromDom = (id) =>{
        setProduct(product.filter(product => product._id != id))
    }
    const deleteItem = (id) =>{
        axios.delete('http://localhost:8000/api/product/' + id)
            .then(result =>{
                removeFromDom(id)
            })
            .catch(err => console.log(err))
    }

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
                        <Link to={'/product/edit/' + item._id} style={{paddingLeft: 15 ,paddingRight: 15}}>edit</Link>
                        <button onClick={(e) => deleteItem(item._id)}>delete</button>
                    </div>
                })
            }
        </div>
    );
}
export default ProductList;