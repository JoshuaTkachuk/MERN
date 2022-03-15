import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductForm =(props) =>{
    const {product, setProduct} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const handleSubmit =(e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/Product", {title,price,description})
            .then(result =>{
                console.log(result.data);
                setProduct([...product, result.data]);
            })
            .catch(err => console.log(err))
        setDescription("");
        setPrice(0);
        setTitle("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <p>
                <label>Title</label><br/>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
            </p>
            <p>
                <label>description</label><br/>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    );
}
export default ProductForm;