import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';
const AuthorForm=(props) =>{
    const {author, setAuthor} = props
    const [name, setName] = useState("")
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const handleSubmit=(e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/author", {name})
            .then(result => {
                console.log(result.data)
                setAuthor([...author, result.data])
                navigate('/');
            })
            .catch(err => {
                console.log(err)
                const errArr =[];
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
                <input type="submit" value="submit" style={{padding:"7px",marginTop:"15px",color:"white", backgroundColor:"green", border:"solid", borderColor:"black", textDecoration:"none",borderRadius:10}}/>
                <Link to={'/'} style={{padding:"7px",marginTop:"15px",color:"black", backgroundColor:"orange", border:"solid", borderColor:"black", textDecoration:"none",borderRadius:10}} >home</Link>
            </form>
        </div>
    );
}
export default AuthorForm;