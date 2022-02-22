import React from 'react';

const Box=(props) =>{
    const {colorArray} = props;
    return (
        <div>
            {
                colorArray.map((color, index)=>(
                    <div key={index} style={{ 
                        display: "inline-block",
                        margin: "10px",
                        height: "50px", 
                        width: "50px", 
                        backgroundColor: color
                        }}></div>
                ))
            }
        </div>
    );
}
export default Box;