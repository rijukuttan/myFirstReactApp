import React, { useRef } from "react";
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import userServices from '../services/userServices';
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

export const SignIn=()=>{
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } , watch } = useForm();
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = (data) => {
userServices.createUser(data).then(response => {
    alert("user registered successfully....!!!");
    navigate("/LogIn");
  })
  .catch(e => {
    alert(e);
    console.log(e);
  });

        console.log(data);
    }
    return(
        <div className="container logInForm row justify-content-center align-items-center" >
             <div className="col-lg-7 col-md-7 col-sm-10 ">
             <h4 className="formHeader mt-2">Sign up</h4>
        <Form onSubmit={handleSubmit(onSubmit)} className="row text-start">
            <Form.Field  className="mb-3 col-lg-12 col-md-12 col-sm-12 ">
                <label for="userName" className="col-lg-3 col-md-4 col-sm-12 text-start m-2">User Name :</label>
                <input  className=" form-control" id="userName"
                    placeholder='user Name'
                    type="text"
                    {...register("userName", { required: true, maxLength: 10 })}
                />
                 {errors.userName && <p style={{color: "red"}}>Please check the user Name</p>}
            </Form.Field>
           
           
            <Form.Field className="mb-3 col-lg-6 col-md-6 col-sm-12 ">
                <label for="email" className="form-label">Email :</label>
                <input className="form-control" id="email"
                    placeholder='Email'
                    type="email"
                    {...register("email",
                        {
                            required: true,
                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })}
                />
                 {errors.email && <p style={{color: "red"}}>Please check the Email</p>}
            </Form.Field >
           
            <Form.Field  className="mb-3 col-lg-6 col-md-6 col-sm-12 ">
                <label for="phoneNumber" className="form-label">Phone Number:</label>
                <input className="form-control" id="phoneNumber"
                    placeholder='phone Number'
                    type="number"
                    {...register("phoneNumber", { required: true, maxLength: 10 })}
                />
                {errors.phoneNumber && <p style={{color: "red"}}>Please check the phone number</p>}
            </Form.Field >
            
            <Form.Field className="mb-3 col-lg-12 col-md-12 col-sm-12 ">
                <label for="streetAddress" className="form-label">street Address:</label>
                <textarea className="form-control" id="streetAddress"
                    placeholder='street Address'
                    type="textarea"
                    {...register("streetAddress", { required: true, maxLength: 100 })}
                />
                 {errors.streetAddress && <p style={{color: "red"}}>Please check the street Address</p>}
            </Form.Field >
           
            <Form.Field className="mb-3 col-lg-6 col-md-6 col-sm-12 ">
                <label for="city" className="form-label">city:</label>
                <input className="form-control" id="city"
                    placeholder='city'
                    type="text"
                    {...register("city", { required: true, maxLength: 20 })}
                />
                 {errors.city && <p style={{color: "red"}}>Please check the city</p>}
            </Form.Field >
           
            
            <Form.Field className="mb-3 col-lg-6 col-md-6 col-sm-12 ">
                <label for="state" className="form-label">state:</label>
                <input className="form-control" id="state"
                    placeholder='state'
                    type="text"
                    {...register("state", { required: true, maxLength: 15 })}
                />
                 {errors.state && <p style={{color: "red"}}>Please check the state</p>}
            </Form.Field >
           
            {/* password */}
            <Form.Field className="mb-3 col-lg-6 col-md-6 col-sm-12 ">
                <label for="password" className="form-label">Password :</label>
                <input className="form-control" id="password"
                    placeholder='Password' name="password"
                    type="password"
                    {...register("password", {
                       // required: true,
                        required: "You must specify a password",
                        minLength: {
                            value: 8,
                            message: "Password must have at least 8 characters"
                          },
                        pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/
                    })}
                />
                 {errors.password && <p style={{color: "red"}}>Please check the Password</p>}

            </Form.Field>
           
            <Form.Field className="mb-3 col-lg-6 col-md-6 col-sm-12 ">
                <label for="rePassword" className="form-label">Confrim Password :</label>
                <input className="form-control" id="rePassword"
                    placeholder='Confrim Password' name="rePassword"
                    type="password"
                    {...register("rePassword", {
                        // required: true,
                         required: "You must specify a password",
                         minLength: {
                             value: 8,
                             message: "Password must have at least 8 characters"
                           },
                           validate: value =>
                           value === password.current || "The passwords do not match",
                         pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/
                     })}
                />
                 {errors.rePassword && <p style={{color: "red"}}>{errors.rePassword.message}</p>}
            </Form.Field>
           
            
            {/* password end */}
            <Form.Field className="mb-3 form-group">
                <label for="postalCode" className="form-label">Postal Code:</label>
                <input className="form-control" id="postalCode"
                    placeholder='postalCode'
                    type="text"
                    {...register("postalCode", { required: true, maxLength: 15 })}
                />
                 {errors.postalCode && <p style={{color: "red"}}>Please check the Postal Code</p>}
            </Form.Field >
           
            
            <button className="mb-3 btn btn-dark btn-block " type='submit'>Submit</button>
        </Form>
        </div>
    </div>
    )
    
}