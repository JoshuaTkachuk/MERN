import React, {useState} from 'react';
import Box from './components/Box';
import './App.css';
import ColorForm from './components/ColorForm';

function App() {
  const [colorArray, setColorArray] = useState([]);

  return (
    <div className="App">
      <ColorForm colorArray={colorArray} setColorArray={setColorArray}/>
      <Box colorArray={colorArray}/>
    </div>
  );
}

export default App;
