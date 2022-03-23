import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import React, {useState} from 'react'
import AuthorList from './components/AuthorList';
import AuthorForm from './components/AuthorForm';
import Update from './components/Update';

function App() {
  const [author, setAuthor] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthorList author={author} setAuthor={setAuthor}/>} default/>
          <Route path= "/new" element={<AuthorForm author={author} setAuthor={setAuthor}/>}/>
          <Route path="/edit/:id" element={<Update author={author} setAuthor={setAuthor}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
