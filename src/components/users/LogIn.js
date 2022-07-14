
import axios from 'axios';
import React , { useState } from "react";
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
//import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Auth from "../AuthUser";
import userServices from '../services/userServices';
//import login from "../authGuard";
import { useLocation } from "react-router-dom";

export const LogIn=(props)=> {
  const [loading, setLoading] = useState(false);
  const email = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { state } = useLocation();

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
   
   // return axios.get(USER_API_BASE_URL + '/' + email,password);
    //axios.get('https://localhost:44351/api/Users/'+ email.value, password.value ).then(response => {
userServices.userLogin(email.value,password.value).then(response => {
    setLoading(false);
        Auth.login(response.data.userName);
        
       alert("login successfully");
              // NotificationManager.success('login successfully');
             navigate(state?.path || "/FilterProduct");
    }).catch(error => {
      setLoading(false);
      alert("invalid user..!");
    //  NotificationManager.error('login failed', 'Click me!', 5000, () => {
        //alert('callback');
     // });
     // alert(error)
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }
 
  return (
    <div className="submit-form container logInForm row justify-content-center ">
    <div  className=" col-lg-5 col-md-7 col-sm-10 m-4" >
    <h4 className="formHeader">Sign In</h4>
  <div class="form-outline mb-4 text-start">
  <label class="form-label" for="form1Example1">Email address</label>
    <input  id="email" type="email" {...email} autoComplete="new-password" class="form-control" />
    
  </div>


  <div class="form-outline mb-4 text-start">
  <label class="form-label" for="form1Example2">Password</label>
    <input type="password" {...password} autoComplete="new-password" id="password" class="form-control" />
    
  </div>

  <div class="row mb-4">
    <div class="col d-flex justify-content-center">

      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
        <label class="form-check-label" for="form1Example3"> Remember me </label>
      </div>
    </div>

    <div class="col">

      <a href="#!">Forgot password?</a>
    </div>
  </div>
  {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
  
  <input type="submit" class="btn btn-dark btn-block px-4 col-lg-12" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading}/>
  </div> 
  </div>
  /* <div>
      Login<br /><br />
      <div>
      email<br />
        <input type="text" {...email} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    </div> */
  
  );
}
 
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
 
//export default LogIn;