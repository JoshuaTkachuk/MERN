import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const Update = (props) =>{
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    useEffect(() =>{
        axios.get('http://localhost:8000/api/product/' + id)
        .then(result =>{
            setTitle(result.data.title)
            setDescription(result.data.description)
            setPrice(result.data.price)
        })
        .catch(err => console.log(err))
    }, [])

    const handleUpdate = (e) =>{
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {title,price,description})
        .then(result =>{
            console.log(result.data)
            navigate('/')
        })
        .catch(err => console.log(err))
    }
    return(
        <form onSubmit={handleUpdate}>
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
export default Update;