import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Input from './components/Input';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:input" element={<Input/>}/>
        <Route path="/:input/:textColor/:backColor" element={<Input/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
