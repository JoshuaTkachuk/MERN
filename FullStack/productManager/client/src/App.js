import Main from './views/Main';
import Detail from './components/Detail';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/" default/>
          <Route element={<Detail/>} path="/product/:id"/>
          <Route element={<Update/>} path="/product/edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
