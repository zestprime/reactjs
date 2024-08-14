import React,{useState,useEffect} from 'react';

import './App.css';

function App() {
  const [count,setCount] = useState(0);

  useEffect(()=>{
    console.log('Count:'+count);

    return()=>{
      console.log('Cleaning activity done.');
    }
  },[count]);

  return (
    <div className="App">
      Count:{count}
    <br></br>
      <button onClick={()=>setCount(count+1)}>Click me</button>
    </div>
  );
}

export default App;
