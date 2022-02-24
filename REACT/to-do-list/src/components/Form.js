import React from 'react';
const Form = (props) =>{
    const {list, setList, task, setTask, complete} = props;
    const handleForm=(e)=>{
        e.preventDefault();
        if(task < 1){
            return;
        }
        setList([...list, {task, complete}]);
        setTask('');
    }
    return(
        <form onSubmit={(e) =>handleForm(e)}>
            <label>Enter Task: </label>
            <input value={task} onChange={(e) => setTask(e.target.value)}/>
            <input className='btn' type="submit"/>
        </form>
    );
}
export default Form;