import React from 'react';

const Display =(props) =>{
    return <div style={{border: 'solid', width: '500px', height: '150px', margin: 'auto'}}>
        <p>{props.content}</p>
    </div>
}
export default Display;