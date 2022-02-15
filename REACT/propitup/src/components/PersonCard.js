import React, {useState} from 'react';
const PersonCard = (props) =>{
    const [bDay, setBDay] = useState(props.age);
    return(
        <div>
            <h1>{props.lastname}, {props.firstname}</h1>
            <p>Age: {bDay}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={(event) =>setBDay(bDay + 1)}>Birthday Button for {props.firstname + " " + props.lastname}</button>
        </div>
    );
}
export default PersonCard;