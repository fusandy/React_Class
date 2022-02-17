/*
import logo from './logo.svg';  
// 函式型元件，這邊導入一個SVG Logo
import './App.css';

function App() {
  return (
    // 虛擬 DOM
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

import { useState } from 'react';

function App(){
  // useState(起始值=total), setTotal為控制total的function 
  const [total, setTotal] = useState(0);

  return <h1 onClick={() => setTotal(total+1) }>{total}</h1>
}

export default App;
