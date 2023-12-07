import React from 'react'
import { useRef, useContext,useState} from 'react';
import AuthContext from '../../Store/AuthContext';
const Signup = () => {
    const[isLogin,setIslogin]=useState(false);
    const emailInputRef=useRef();
    const passwordInputRef=useRef();
    const confirmPasswordInputref=useRef();
    const authCtx=useContext(AuthContext);
    const switchAuthHandler=()=>{
        setIslogin((prevState)=>!prevState)
    };

    const submitHandler=(e)=>{
        e.preventDefault();
        const enteredEmail=emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        //const confirmPassword = confirmPasswordInputref.current.value;
        let confirmPassword;
        let url;
    if (!isLogin) {
      confirmPassword = confirmPasswordInputref.current.value;
    
    if(enteredPassword!==confirmPassword){
        alert("wrong Password")
    }
    else{
        url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBGZHVIOrHGdhqLgr3AkPQoFPv2UZMymXA"
    }}
    else if(isLogin){
        url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBGZHVIOrHGdhqLgr3AkPQoFPv2UZMymXA"
    }
    
            fetch(url,
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
            .then((res)=>{
                if(res.ok){
                    return res.json();
                }
                else{
                    return res.json().then((data)=>{
                        let errorMessage="AuthenticationError";
                        if(data&&data.error&&data.message);
                        errorMessage=data.error.message;
                        throw new Error(errorMessage);
                    })
                }
            })
            .then((data)=>{
                if(isLogin){
                    alert("successfully Logged In")
                }
                else{
                    alert("successfully signed up")
                }
                // console.log(data);
                // localStorage.setItem("token",data.idToken)
                // props.onLogin();
                authCtx.login(data.idToken)
            })
            .catch((err)=>{
                alert(err.message)
            });   
    }
  return (
    <div className='p-4 m-4'>
          <h1 className='text-3xl font-bold'>{isLogin ? "Login" : "Signup"}</h1>
        <form onSubmit={submitHandler} className='font-serif py-2'>
            <div >
                <label>Enter Email </label>
                <input type='text' placeholder='Email' required ref={emailInputRef}></input>
            </div>
            <div>
                <label>Enter Password </label>
                <input type='password' placeholder='Password' required ref={passwordInputRef}></input>
            </div>
            {!isLogin && (<div>
                <label>Confirm Password </label>
                <input type='password' placeholder='Confirm Password'  required ref={confirmPasswordInputref}></input>
            </div>)}
            <div className="bg-lime-500 w-1/12">
                <button>{isLogin ? "Login":"SignUp"}</button>
            </div>
        </form>
        <button type="button" onClick={switchAuthHandler}>{isLogin ? "Dont have an account? Signup" : "Have an Account?Login"}
      </button>
    </div>
  )
}

export default Signup