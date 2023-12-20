import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,createBrowserRouter,RouterProvider} from 'react-router-dom';
import { AuthContextProvider } from './Store/AuthContext';

import { ExpenseContextProvider } from './Store/ExpenseContext';

import Welcome from './Components/Welcome/Welcome';
import VerifyEmail from './Components/Profile/verifyEmail';
import ForgotPassword from './Components/Profile/ForgotPassword';
import Signup from './Components/Profile/Signup';
import ETForm from './Components/ExpenseTracker/ETForm';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router=createBrowserRouter([{
  path:"/",
  element:(
    <Signup/>
  )
  // children:[{
  //   path:"/welcome",
  // element:(
  //   <Welcome/>
  // )
  // }]
},
{
  path:"/welcome",
  element:(<Welcome/>)
},
{
  path:"/verify",
  element:(
    <VerifyEmail/>
  )
},
{
  path:"/forgotPassword",
  element:(
    <ForgotPassword/>
  )
},

{    path:"/expensetracker",
      element:(
      <ETForm/>
    )
  }
])

root.render(
  <RouterProvider router={router} >
  <ExpenseContextProvider>
  <AuthContextProvider>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </AuthContextProvider>
    </ExpenseContextProvider>
    </RouterProvider>
);