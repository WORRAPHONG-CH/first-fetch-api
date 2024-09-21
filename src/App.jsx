// import logo from './logo.svg';
import './index.css';

import {useState,useEffect} from "react";


function App() {
  
  const [count,setCount] = useState(0);


  return (
    <div className="bg-white min-w-screen min-h-screen p-5">
      <header className="App-header bg-yellow-500 h-1/2 flex justify-center ">
        <div className='card bg-red-300 w-2/6 flex justify-center my-5'>
          <div className='card-body '>
            <h2 className="text-slate-800 font-bold text-center text-2xl ">Count:{count}</h2>
            <div className='flex justify-center'>
              <button onClick={()=>setCount((count) => count+1)}
              className="btn btn-success mx-2">Increse</button>
              <button onClick={()=>setCount((count)=>count-1)}
                className='btn btn-error mx-2'>Decrese</button>
            </div>
            
            <div className='bg-orange-500'>
              <p className='text-slate-800 text-bold p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor consequatur, rerum placeat perspiciatis ducimus doloremque asperiores pariatur ipsam dignissimos a est voluptatum unde fuga error magni nemo exercitationem? Unde, consectetur!</p>
            </div>
            
          </div>
          
        </div>
        
      </header>

    </div>
  );
}

export default App;
