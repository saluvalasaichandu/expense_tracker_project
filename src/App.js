// import { useState } from 'react';
import Signup from './Components/Profile/Signup';
// import Welcome from './Welcome';
import { useContext } from 'react';
import Welcome from "./Components/Welcome/Welcome"
import AuthContext from './Store/AuthContext';
import VerifyEmail from "./Components/Profile/verifyEmail"
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import ForgotPassword from './Components/Profile/ForgotPassword';
import { Navigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
function App() {

  // const [isLogin,setIsLogin]=useState(false);
  // const loginHandler=()=>{
  //   setIsLogin(true);
  // }
const authCtx=useContext(AuthContext);

const router=createBrowserRouter([
 
  {
    path:"/",
    element: authCtx.isLoggedin ? <Navigate to="/welcome"></Navigate>:<Signup/>
    // element: !authCtx.isLoggedin ? <Signup/>: <Link to="/welcome"></Link>
  },

  {
    path:"/signup",
    element:<Signup></Signup>
  },
  {
    path:"/welcome",
    element:<Welcome/>
  },
  {
    path:"/verify",
    element:<VerifyEmail></VerifyEmail>
  },
  {
    path:"/forgotPassword",
    element:<ForgotPassword></ForgotPassword>
  }
])
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

}
export default App;