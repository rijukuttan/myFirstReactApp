import { React, useState } from 'react'
 
export default function Counter() {
  const [counter, setCounter] = useState(1);
 
  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };
  //reset counter 
  const reset = () =>{
    setCounter(0)
  }
 //decrease counter
const decrease = () => {
    if (counter > 1) {
      setCounter(count => count - 1);
    }
  };
  return (
    <div className="counter">
      
    
      <div className="btn__container">
        <button className="btn btn-dark control__btn  px-6 mx-2" onClick={increase}>+</button>
        <span className="counter__output">{counter}</span>
        <button className="btn btn-dark control__btn px-6 mx-2" onClick={decrease}>-</button>
        {/* <button className="reset" onClick={reset}>Reset</button> */}
      </div>
    </div>
  );
}