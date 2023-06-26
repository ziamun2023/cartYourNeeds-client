import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import UserAccount from "../pages/Account/UserAccount";
import BecomeAseller from "../pages/becomeAseller/BecomeAseller";
import AllProductsPage from "../component/ExploreAllproduct/AllProductsPage";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import SellerDashboard from "../DashBoard/SellerDashboard/SellerDashboard";
import SellerAccount from "../pages/Account/SellerAccount";
import AdminAccount from "../pages/Account/AdminAccount";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/allproducts',
            element:<AllProductsPage/>
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
    },
    {
      path:'/SellerAccount',
      element:<SellerAccount/>
    },
    {
      path:'/AdminAccount',
      element:<AdminAccount/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/register',
      element:<Signup/>
    }
  ]);