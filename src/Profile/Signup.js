import React from 'react'
import { useRef } from 'react'
const Signup = () => {
    const emailInputRef=useRef();
    const passwordInputRef=useRef();
    const confirmPasswordInputref=useRef();
    const submitHandler=(e)=>{
        e.preventDefault();
        const enteredEmail=emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const confirmPassword = confirmPasswordInputref.current.value;
        if(enteredPassword===confirmPassword){
            fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBGZHVIOrHGdhqLgr3AkPQoFPv2UZMymXA",
            {
                method:"POST",
                body:JSON.stringify({
                    email:enteredEmail,
                    password:enteredPassword,
                    returnSecureToken: true,
                }),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then((res)=>console.log("succesfully signed up"))
            .catch((err)=>alert("something went wrong"))
        }
        else{
            alert("Wrong Password")
        }
    }
  return (
    <div>
        <h1>Signup</h1>
        <form onSubmit={submitHandler}>
            <div>
                <label>Enter Email </label>
                <input type='text' placeholder='Email' required ref={emailInputRef}></input>
            </div>
            <div>
                <label>Enter Password </label>
                <input type='password' placeholder='Password' required ref={passwordInputRef}></input>
            </div>
            <div>
                <label>Confirm Password </label>
                <input type='password' placeholder='Confirm Password'  required ref={confirmPasswordInputref}></input>
            </div>
            <div>
                <button>SignUp</button>
            </div>
        </form>
    </div>
  )
}

export default Signup