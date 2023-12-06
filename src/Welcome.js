import React from 'react'

const Welcome = () => {
    const idToken = localStorage.getItem("tokenET");
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
        .then((res)=>{console.log(res.data)})
        .catch((err)=>console.log(err))
        
    }
    const formhandler=()=>{
        return(<p>detailsUpdated</p>)
    }
  return (
    <div>
         <p> Welcome to ExpenseTracker Page!!</p>
         <p>Your Profile is incomplete <button onClick={profileHandler}>Complete Your Profile</button></p>
         <form onSubmit={formhandler}>
         <div><label>Name</label>
         <input type='text '></input>
         </div>
         <div>
            <label> Mobile</label>
            <input type='text'></input>
         </div>
         <div>
            <button type='submit'>Submit</button>
         </div>
         </form>
    </div>
  )
}

export default Welcome