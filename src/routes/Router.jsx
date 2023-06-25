import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import UserAccount from "../pages/Account/UserAccount";
import BecomeAseller from "../pages/becomeAseller/BecomeAseller";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home/>
        }
      ]
    },
    {
      path:'/account',
      element:<UserAccount/>
    },
    {
      path:'/becomeAseller',
      element:<BecomeAseller/>
    }
  ]);