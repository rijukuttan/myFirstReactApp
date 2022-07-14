import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Navigate,useLocation } from "react-router-dom";
import auth from './AuthUser';
export const ProtectedRoute=({component:Component, ...rest})=>{
   // const navigate = useNavigate();
   const location = useLocation();
    return(
        <Route
        {...rest}
        render={props=>{
            if(auth.isAuthenticated()){
                return <Component {...props}/>;
            }
            else{
              return  <Navigate to="/login" replace state={{ path: location.pathname }} />
                // return <Redirect to={
                //     {
                //     pathname:"/",
                //     state:{
                //         from: props.location
                //     }
                // }}/>
            }
           
        }}/>
    );
};