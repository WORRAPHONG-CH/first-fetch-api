// import logo from './logo.svg';
import './index.css';

import {useState,useEffect} from "react";


function App() {
  
  const [count,setCount] = useState(0);


  return (
    <div className="bg-white min-w-screen min-h-screen ">
      <header className="App-header h-80 flex justify-center items-center ">
        <h2 className="text-slate-800">Count:{count}</h2>
        <button onClick={()=>setCount((count) => count+1)}
        className="btn btn-success ">Count</button>
        
      </header>
    </div>
  );
}

export default App;
