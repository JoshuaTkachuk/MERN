import React from 'react';

const Display = (props) =>{
    const {list, setList} = props;
    const checkIndex=(i) =>{
        if(i === 0)
            return "hidden"
        else 
            return "checkbox"
    }
    const checkDelete=(i) =>{
        if(i === 0)
            return "hidden"
        else 
            return "submit"
    }
    const handleComplete=(item, index) =>{
        if (item.complete === true){
            item.complete = false;
            document.getElementById(index).style.textDecoration = "none";
        }
        else{
            item.complete = true;
            console.log(index);
            document.getElementById(index).style.textDecoration = "line-through";
        }
    }
    const deleteItem=(item) =>{
        const newList = list.filter(listItem => listItem !== item);
        setList(newList)
    }

    return list.map((item , index) =>{
        console.log(item);
        return <div key={index}>
        <label id={index}>{item.task}</label>
        <input type={checkIndex(index)} value={item.complete} onChange={(e) => handleComplete(item, index)}/>
        <input className='delete' type={checkDelete(index)} value="delete" onClick={(e)=>deleteItem(item)}/>
    </div>
    }
    );
}
export default Display;