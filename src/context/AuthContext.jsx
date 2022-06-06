import React, { createContext, useState,useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  
  const [isAuth,setIsAuth]=useState(false);
  //console.log(isAuth)
  const login=()=>{
    setIsAuth(true);
   if(isAuth){
    //  <Navigate to="/home"></Navigate>
   }
  }
  const logout=()=>{
    setIsAuth(false);
  }
  return <AuthContext.Provider value={{isAuth,login,logout}}>{children}</AuthContext.Provider>;
};
