import React from "react";
import { useNavigate } from 'react-router';
export const About=()=>{
    let navigate = useNavigate();
    function handleClick() {
      navigate('/AddProduct')
    }
    return(
        <div>


    <div>
      <button onClick={handleClick}>go home</button>
    </div>
  
           about
        </div>
    )
    
}