// import logo from './logo.svg';
import './index.css';

import {useState,useEffect} from "react";


function App() {
  
  const [count,setCount] = useState(1);
  const [data,setData] = useState([]);
  const [fetchData,setFetchData] = useState(0);

  console.log(data);


  // fetch data according to count ref product id with count
  useEffect(()=>{
      fetch(`https://fakestoreapi.com/products/${count}`)
      .then(res => res.json())
      .then(data=> setData(data))

  },[count])


  return (
    <div className="bg-white min-w-screen min-h-screen p-5">
      <header className="App-header bg-yellow-1001 h-1/2 flex justify-center ">
        <div className='card bg-red-3001 w-3/6 flex justify-center my-5 border-2 shadow-2xl'>
          <div className='card-body '>
            <h2 className="text-slate-800 font-bold text-center text-xl h-14">{count}:{data.title}</h2>
            

            {/* images */}
            <div className='flex w-full h-64 justify-center'>
                <img src={data.image} alt={data.title} className='h-60 w-52 rounded-xl' />
            </div>
            {/* button */}
            <div className='flex justify-center'>
              <button onClick={()=>setCount((count)=>count-1)}
                className='btn btn-error mx-2'>Previous</button>
              <button onClick={()=>setCount((count) => count+1)}
              className="btn btn-success mx-2">Next</button>              
            </div>
            <hr />

            {/* Price */}
            <div className='px-2'>
              <h3 className='text-3xl font-bold text-slate-800'>Price:{data.price}$</h3>
            </div>

            {/* Categories */}
            <div className="flex px-2">
              <h2 className="text-slate-800 font-bold text-xl me-2">Category: </h2>
              <p className='inline text-slate-800 font-semibold text-xl '>{data.category}</p>
            </div>
            
            {/* description */} 
            <div className='px-2'>
              <h3 className='font-semibold text-slate-800 text-xl my-1'>Description</h3>
              <div className='bg-yellow-100 rounded-lg h-20 overflow-y-scroll'>
                <p className='text-slate-800 text-bold px-2 py-1'>{data.description}</p>
              </div>
            </div>
            

            
            <button onClick={()=>setFetchData((fetch)=>fetch+1)} 
            className='btn btn-warning w-full p-2'>Buy Now</button>
            
            

          </div>
          
        </div>
        
      </header>

    </div>
  );
}

export default App;
