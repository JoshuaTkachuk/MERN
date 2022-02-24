import React, {useState} from 'react';
import Form from './components/Form';
import Display from './components/Display';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [complete, setComplete] = useState(false);
  const [list, setList] = useState([{}]);
  return (
    <div className="App">
        <Form list ={list} setList={setList} task={task} setTask={setTask} complete={complete} setComplete={setComplete}/>
        <Display list={list} setList={setList} task={task} setTask={setTask} complete={complete} setComplete={setComplete}/>
    </div>
  );
}

export default App;
