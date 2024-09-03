import React,{useState,useMemo} from 'react';
import './App.css';

function App() {
  const [num,setSqValue] = useState(0);
  const [stateF,setstateF] = useState(false);

  const sqValue= (num)=>{
    console.log('Calculate SQ value')
    return num*num;
  }

  const useMemoSqValue = useMemo(
    ()=>{
      return sqValue(num)
    },[num]
  );
  //const useMemoSqValue = sqValue(num);


  return (
    <div className="App">
     Sq Value: {useMemoSqValue}<br></br>
      State Value:{stateF?"True":"False"}<br></br>
    <input type='text' value={num} onChange={(e)=>setSqValue(e.target.value)}></input>
    <button type='button' onClick={(e)=>setstateF(!stateF)}>ChageState</button>
    </div>
  );
}

export default App;
