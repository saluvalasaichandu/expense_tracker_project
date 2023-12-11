// import { useState } from 'react';
import Signup from './Components/Profile/Signup';
// import Welcome from './Welcome';
import { useContext } from 'react';
import Welcome from "./Components/Welcome/Welcome"
import AuthContext from './Store/AuthContext';
import VerifyEmail from "./Components/Profile/verifyEmail"
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
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
const router=createBrowserRouter([
  {
  path:"/welcome",
  element:(
    <Welcome/>
  )
},
{
  path:"/verify",
  element:(
    <VerifyEmail/>
  )
}])
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
export default App;