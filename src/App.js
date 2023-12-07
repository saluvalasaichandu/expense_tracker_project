// import { useState } from 'react';
import Signup from './Components/Profile/Signup';
// import Welcome from './Welcome';
import { useContext } from 'react';
import Welcome from "./Components/Welcome/Welcome"
import AuthContext from './Store/AuthContext';
function App() {
  // const [isLogin,setIsLogin]=useState(false);
  // const loginHandler=()=>{
  //   setIsLogin(true);
  // }
  const authCtx=useContext(AuthContext);
  return (
    <div>
      {/* {!isLogin && <Signup onLogin={loginHandler}/>}
      {isLogin && <Welcome/>} */}
      {!authCtx.isLoggedin && <Signup></Signup>}
      {authCtx.isLoggedin && <Welcome></Welcome>}
    </div>
  );
}

export default App;
