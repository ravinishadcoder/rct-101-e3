import React, { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate()
  const [loginCreds,setLoginCreds]=useState({email:"ravi@gmail.com",password:"123456"});
  const {login}=useContext(AuthContext);
  const handleSubmit=(e)=>{
    e.preventDefault();
     login()
     navigate("/home")
  }
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setLoginCreds({
      ...loginCreds,[name]:value,
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input data-cy="login-email"
       name="email"
       placeholder="enter email"
       value={loginCreds.email}
       onChange={handleChange}
       /><br />
      <input data-cy="login-password" 
      type="password"
      name="password"
      placeholder="enter password"
      value={loginCreds.password}
       onChange={handleChange}
      /><br />
      <button data-cy="login-submit" type="submit" >Login</button>
      </form>
    </div>
  );
};

export default Login;
