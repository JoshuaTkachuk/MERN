import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const Update = (props) =>{
    const [name, setName] = useState("");
    const {id} = useParams();
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    useEffect(() =>{
        axios.get("http://localhost:8000/api/author/" + id)
            .then(result => setName(result.data.name))
            .catch(err => console.log(err))
    }, [])
    const handleSubmit=(e) =>{
        e.preventDefault();
        axios.put("http://localhost:8000/api/author/" + id, {name})
            .then(result => {
                console.log(result.data)
                navigate('/');
            })
            .catch(err =>{
                console.log("=======")
                console.log(err.response.data.errors)
                const errArr = [];
                const errResponse = err.response.data.errors;
                for(const key of Object.keys(errResponse)){
                    errArr.push(errResponse[key].message)
                }
                setErrors(errArr);
            })
            setName("")

    }
    return(
        <div style={{display:"flex", justifyContent:"center"}}>
            <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"25px", border:"solid", marginTop:"15px", backgroundColor:"lightblue"}}>
            {errors.map((err, index) =><p key={index}>{err}</p>)}
            <label>Author Name:</label>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="submit" value="submit"style={{padding:"7px",marginTop:"15px",color:"white", backgroundColor:"green", border:"solid", borderColor:"black", textDecoration:"none",borderRadius:10}}/>
            <Link to={'/'} style={{padding:"7px",marginTop:"15px",color:"black", backgroundColor:"orange", border:"solid", borderColor:"black", textDecoration:"none",borderRadius:10}}>cancel</Link>
        </form>
        </div>
    );
}
export default Update;