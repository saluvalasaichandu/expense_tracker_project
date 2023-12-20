// import { useState } from 'react';
import Signup from './Components/Profile/Signup';
// import Welcome from './Welcome';
import { useContext } from 'react';
import Welcome from "./Components/Welcome/Welcome"
import AuthContext from './Store/AuthContext';
// import VerifyEmail from "./Components/Profile/verifyEmail"

// import { createBrowserRouter,RouterProvider} from 'react-router-dom';
// import { createRoot } from 'react-dom/client';
// import ForgotPassword from './Components/Profile/ForgotPassword';
// import ETForm from './Components/ExpenseTracker/ETForm';

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
      {/* {authCtx.isLoggedin && <Welcome></Welcome>} */}
      {/* {authCtx.isLoggedin && <Welcome/>} */}
      {authCtx.isLoggedin && <Welcome/>}
    </div>
  );
}
//  export const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Signup></Signup>,
//     children:[{
//       path:"/welcome",
//       element:<Welcome/>
//     }],
//   },
// {
//   path:"/verify",
//   element:(
//     <VerifyEmail/>
//   )
// },
  
//   {
//     path:"/forgotPassword",
//     element:(
//       <ForgotPassword/>
//     )
//   },
//   {
//     path:"/expensetracker",
//     element:(
//       <ETForm/>
//     )
//   }
// ])
// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );


export default App;