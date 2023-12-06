import { useState } from 'react';
import Signup from './Components/Profile/Signup';
import Welcome from './Welcome';
function App() {
  const [isLogin,setIsLogin]=useState(false);
  const loginHandler=()=>{
    setIsLogin(true);
  }
  return (
    <div className="App">
      {!isLogin && <Signup onLogin={loginHandler}/>}
      {isLogin && <Welcome/>}
    </div>
  );
}

export default App;
