import './App.css';
import { useState } from 'react';//1

function App() {
  const [obj,setObj] = useState({count:10,name:"NA"});//2

function incremenCount(){
  setObj(myObj=>{
    return {...myObj,count:myObj.count+1,name:"Zest prime"+new Date().getMilliseconds()}
  });//3
}
  return (
    <div className="App">
      Count:{obj.count}<br></br>
      Name:{obj.name}<br></br>
      <button onClick={incremenCount}>Increment Count</button>
    </div>
  );
}

export default App;
