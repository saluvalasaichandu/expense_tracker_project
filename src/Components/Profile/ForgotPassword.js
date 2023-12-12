import React from 'react'
import { useRef } from 'react';
// import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const ForgotPassword = () => {
const emailInputRef=useRef();
// const history=useHistory();
const navigate=useNavigate();
const submitHandler=(e)=>{
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBGZHVIOrHGdhqLgr3AkPQoFPv2UZMymXA",{
        method:'POST',
        body:JSON.stringify({
            requestType: "PASSWORD_RESET",
            email: enteredEmail,
        }),
        headers: {
            "Content-Type": "application/json",
          },
        
    })
    .then((res)=>{
        alert("You have been received a mail for Password reset")
    })
    .catch((err)=>{
        alert(err);
        console.log(err)
    })
    // history.replaceState("/");
    // navigate.replaceState("/")
    navigate("/")
}
  return (
    <div>

        <form onSubmit={submitHandler}>

        <div>
            <p>Enter your email for which you need password</p>

        </div>
        <div>
            <label>Email</label>
            <input type='text' placeholder='email' ref={emailInputRef}></input>
        </div>
        <div>
            <button>Send Link</button>
        </div>
        </form>
    </div>
  )
}

export default ForgotPassword