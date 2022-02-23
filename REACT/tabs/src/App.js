import './App.css';
import React, {useState} from 'react';
import Tab from './components/Tabs';
import Display from './components/Display';

function App() {
  const [content, setContent] = useState('');
  const items = [{ label: "Tab 1", content: "Tab 1 content is showing here"},
  { label: "Tab 2", content: "Tab 2 content is showing here"},
  { label: "Tab 3", content: "Tab 3 content is showing here"},
  { label: "Tab 4", content: "Tab 4 content is showing here"}]
  return (
    <div className="App">
      <Tab items={items} setContent={setContent}/>
      <Display content={content}/>
    </div>
  );
}

export default App;
