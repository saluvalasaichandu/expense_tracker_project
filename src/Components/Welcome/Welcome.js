import React from 'react';
import { useContext,useState } from 'react';
import InputForm from './InputForm';
import AuthContext from '../../Store/AuthContext';
// import { json } from 'react-router-dom';

var formData={
    email:"",
    name:"",
};

const Welcome = () => {
    const idToken = localStorage.getItem("tokenET");
    const authCtx=useContext(AuthContext);
    const[isUpated,setIsUpdated]=useState(false);



    const profileHandler=()=>{
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
    
  return (
    <>
    <div>
        
         <p> Welcome to ExpenseTracker Page!!</p>
         <p>Your Profile is incomplete <button onClick={profileHandler}>Complete Your Profile</button></p>
    </div>
    <InputForm data={formData}/>
    </>
  )
}

export default Welcome