import React from 'react';
import { useContext,useState } from 'react';
import InputForm from './InputForm';
import AuthContext from '../../Store/AuthContext';
// import { json } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import ETForm from '../ExpenseTracker/ETForm';
var formData={
    email:"",
    name:"",
};
const Welcome = () => {
    const idToken = localStorage.getItem("tokenET");
    const authCtx=useContext(AuthContext);
    const[isUpdated,setIsUpdated]=useState(false);
    const [isNavigated,setIsNavigated]=useState(false)

    // const history=useHistory();
    const navigate=useNavigate();

    const navigationHandler=()=>{
        setIsNavigated(false);
    }

    const profileHandler=()=>{
        setIsNavigated(false);
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBGZHVIOrHGdhqLgr3AkPQoFPv2UZMymXA",{
            method:'POST',
            body:JSON.stringify({
                idToken:idToken,
                displayName:"saichandu",
                returnSecureToken:true,
            }),
            headers:{
                "Content-Type": "application/json",
            }
        })
        // .then((res)=>{console.log(res.data)})
        // .catch((err)=>console.log(err))
        .then((res)=>{
            if(res.ok){
                return res.json();
            }
            else{
                return res.json().then((data)=>{
                    let errorMessage="Authentication Failed";
                    if(data &&data.error && data.message)
                    errorMessage=data.error.message;
                    throw new Error(errorMessage)
                })
            }
        })
        .then((data)=>{
            console.log(data);
            setIsUpdated(true);

        })
        .catch((err)=>{
            alert(err.message)
        })
    };

    //If user logs in

    if(authCtx.isLoggedin){
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBGZHVIOrHGdhqLgr3AkPQoFPv2UZMymXA",{
            method:'POST',
            body:JSON.stringify({
                idToken:idToken,
            }),
            headers:{
                "content-type":"application/json",
            }
        })
        .then((res)=>{
            if(res.ok){
                return res.json();
            }
            else{
                return res.json().then((data)=>{
                    let errorMessage="authentication failed";
                    if(data&&data.error&&data.message)
                    errorMessage=data.error.message
                    throw new Error(errorMessage)
                });
            }
        })
        //display data in form UI
        .then((data)=>{
            console.log(data.users[0]);
            setIsUpdated(true);
            formData.email=data.users[0].email;
            formData.name=data.users[0].displayName;
        })
        .catch((err)=>{
            alert(err.message)
        });
    }
    const logoutHandler=()=>{
        authCtx.logout();
        // history.replace("/");
        // navigate.replace("/")
        navigate("/")
        
        // history.pushState("/")
    }
    
  return (
    <>
    <div className='font-sans p-2 m-2'>
        
         <p className='text-4xl'> Welcome to ExpenseTracker Page!!</p>
         <p className='text-lg p-2'>Your Profile is incomplete...
         <button onClick={profileHandler} className='text-lime-600 px-2' >Complete Your Profile</button></p>
    </div>
    <div className='px-60 text-xl text-red-600'>
        <button onClick={logoutHandler}>Logout</button>
    </div>
    {/* <InputForm data={formData}/> */}

    {!isNavigated &&(<InputForm data={formData} navigation={navigationHandler}/>)}
    {isNavigated && <ETForm></ETForm>}
    </>
  )
}

export default Welcome