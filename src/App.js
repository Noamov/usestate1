
import './App.css';
import Counter from './Counter';
import { useState } from 'react';



            
function App() {
  
const [delta, setDelta] = useState(1)
const [max, setMax] = useState(1)

  function handleDelta(e){
    console.log(e);
    setDelta(Number(e.target.value))
  }

  function handleMax(e){
    setMax(Number(e.target.value))
  }
  return (
    <div className="App">
      Usestate
      <h2> Delta: </h2>
      <input type = "number" value = {delta} onChange = {handleDelta}/>
      <h2> Max: </h2>
      <h5> Set the maximum counter value:</h5>
      <input type = "number" value = {max} onChange ={handleMax}/>
      <Counter delta ={delta} max = {max}/>
      <Counter delta ={delta} max = {max}/>
    </div>
  );
  }

export default App;
