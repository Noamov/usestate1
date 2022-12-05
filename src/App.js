
import './App.css';
import Counter from './Counter';
import { useState } from 'react';



            
function App() {
  
const [delta, setDelta] = useState(1)
const [max, setMax] = useState(1)
const [reset, setReset]= useState(false)
const [maxofboth, setMaxofboth] = useState(0)


  function CheckMaxofboth(e){
  console.log(e)
  setMaxofboth(e)
  }

  function Reset(e){
  console.log(e)
  setReset(e)
  }

  function handleDelta(e){
    console.log(e)
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
      <h4> Maximun value is {maxofboth}</h4>
      <Counter delta ={delta} Reset = {Reset} needToReset = {reset} max = {max} CheckMaxofboth={CheckMaxofboth}
      maxofboth={maxofboth}/>
      <Counter delta ={delta} Reset = {Reset} needToReset = {reset} max = {max} CheckMaxofboth={CheckMaxofboth}
      maxofboth={maxofboth}/>
      
    </div> 
  )
  }

export default App;
