import { useState,useEffect } from "react";


function Counter(props) {
    
    const {max,delta,maxofboth,Reset,needToReset,CheckMaxofboth} = props
    const [count, setCount] = useState(1)

    
    
  useEffect(()=>{
    if(needToReset){
      setCount(0)
      Reset(false)
    }
  },[needToReset,Reset])
    
    function incr() {
        setCount(
            function (oldCount){
             if (oldCount + delta <= max)
                return oldCount + delta
            
              if(oldCount + delta > maxofboth)
               CheckMaxofboth(oldCount)
                 return 0

                }
            
        )
        if (count + delta > maxofboth)
          CheckMaxofboth(count+delta)
       
    }
    function reset(){
      Reset(true)
      setCount(0)
    }
           
  
    return (
      <div>
        <h1>Counter</h1>
        <p>Counter is at {count}</p>
        <button onClick={incr}> Click to add {delta} to Counter</button>
        <button onClick={reset}> Click to reset the count</button>
      </div>
    );
    }
  
  export default Counter;
