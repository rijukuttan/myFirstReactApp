
import './App.css';
 import BasicExample from './navbar';
import React, { useState } from 'react';



import { BrowserRouter, Routes, Route ,Link,Router} from "react-router-dom";


function App() {
 
   
  const[isAutheticated, setisAutheticated] = useState(false);
  return (
    
    <BrowserRouter>
        <div className="App">
    {/* <h1>dac</h1> */}
    <BasicExample/>
 
 
     </div>
     </BrowserRouter>

  );
}

export default App;
