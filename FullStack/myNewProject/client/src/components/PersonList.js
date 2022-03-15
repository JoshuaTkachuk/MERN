import React , {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PersonList = (props) =>{
    const {people,setPeople} = props;

    useEffect(() =>{
        axios.get("http://localhost:8000/api/people")
            .then(res =>{
                console.log(res.data);
                setPeople(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    
    return(
        <div>
            {
                people.map((person,index) =>{
                    return <div key={index} style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                        <p>{person.firstName} {person.lastName}</p>
                        <Link to={'/people/${person._id}'}> {person.firstName}'s page!</Link>
                    </div>
                })
            }
        </div>
);
}
export default PersonList;