import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const AuthorList = (props) =>{
    const {author, setAuthor} = props;
    useEffect(() =>{
        axios.get("http://localhost:8000/api/author")
            .then(result =>{
                console.log(result.data)
                setAuthor(result.data)
            })
            .catch(err => console.log(err))
    }, [])
    const deleteItem = (itemId)=>{
            axios.delete('http://localhost:8000/api/author/' + itemId)
                .then(result =>{
                    setAuthor(author.filter(author => author._id != itemId))
                })
                .catch(err => console.log(err))
    }
    return (
        <div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <Link to={'/new'} style={{textDecoration:"none", color:"white", backgroundColor:"green", padding:7, border:"solid", borderColor:"black", borderRadius:25}}>add an author</Link>
            </div>
            {
                author.length > 0?
                <div style={{display:"flex", justifyContent:"center", paddingTop:"20px"}}>
                    <table style={{border:"solid", padding:15, borderSpacing: "15px",backgroundColor:"lightblue"}}>
                    <thead>
                        <tr>
                            <th>Authors:</th>
                            <th>Actions:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {author.map((item, index) =>{
                            return <tr key={index}>
                            <td>{item.name}</td>
                            <td>
                                <Link to={'/edit/' +item._id} style={{margin:"15px",padding:"3px", color:"black", backgroundColor:"yellow", border:"solid", borderColor:"black", textDecoration:"none",borderRadius:10}}>edit</Link>
                                <button  onClick={(e) => deleteItem(item._id)} style={{padding:"5px", color:"black", backgroundColor:"red", border:"solid", borderColor:"black", textDecoration:"none",borderRadius:10}}>Delete</button>
                            </td>
                        </tr>
                        })}
                    </tbody>
                </table>
                </div>
                :null
            }
        </div>
    );
}
export default AuthorList