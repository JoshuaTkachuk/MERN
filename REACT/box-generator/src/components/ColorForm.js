import React, {useState} from 'react';
const ColorForm = (props)=>{
    const [color, setColor] = useState('');

    const handleForm=(e) =>{
        e.preventDefault();
        props.setColorArray([...props.colorArray, color]);
    }
    return (
        <form onSubmit={handleForm}>
            <label>Color</label>
            <input type="text" name="color" onChange={(e) => setColor(e.target.value)}/>
            <input type="submit" value="add box"/>
        </form>
    );
}
export default ColorForm;