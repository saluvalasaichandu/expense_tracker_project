import React from 'react'
import { useState } from 'react';
const AuthContext = React.createContext({
  token:" ",
  isLoggedin:false,
  login:(token)=>{},
  logout:()=>{},
})

export default AuthContext;

export const AuthContextProvider=(props)=>{
  const initialToken=localStorage.getItem("tokenET");
  const [token,setToken]=useState(initialToken);
  const userIsLoggedIn=!!token;

  const loginHandler=(token)=>{
    setToken(token);
    localStorage.setItem("tokenET",token);
  };
  const logouthandler=()=>{
    setToken(null);
    localStorage.removeItem("tokenET");
    localStorage.removeItem("email")
  };
  const contexValue={
    token:token,
    isLoggedin:userIsLoggedIn,
    login:loginHandler,
    logout:logouthandler
  };

  return(
    <AuthContext.Provider value={contexValue}>
      {props.children}
    </AuthContext.Provider>
  )
};