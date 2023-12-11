import React from "react";
// import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const VerifyEmail=()=>{
     const navigate=useNavigate();
     const token = localStorage.getItem("tokenET");
     const verifyEmailHandler=()=>{
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBGZHVIOrHGdhqLgr3AkPQoFPv2UZMymXA",{
            method:'POST',
            body:JSON.stringify({
                requestType: "VERIFY_EMAIL",
                idToken: token,
            }),
            headers: {
                "Content-Type": "application/json",
              },
        })
        .then((res)=>{
            if(res.ok){
                return res.json();
            }
            else{
                return res.json().then((data)=>{
                    let errorMessage = "Authentication Failed";
                    if (data && data.error && data.message)
                        errorMessage = data.error.message;
                        throw new Error(errorMessage);
                })
            }
        })
        .then((data)=>{
            console.log(data);
            navigate.replace("/welcome");
        })
        .catch((err)=>{
            alert(err.message)
        })
     };
     return(
        <button onClick={verifyEmailHandler}> Verify Email</button>
     );
}

export default VerifyEmail;