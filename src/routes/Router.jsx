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

import SellerAccount from "../pages/Account/SellerAccount";
import AdminAccount from "../pages/Account/AdminAccount";
import ManageUser from "../DashBoard/AdminDashboard/ManageUser";
import MakeAction from "../DashBoard/AdminDashboard/MakeAction";
import PrivateRoute from "../private/PrivateRoute";
import SellerPrivateRoute from "../private/SellerPrivateRoute";
import UserPrivateRoute from "../private/UserPrivateRoute";
import Confirmation from "../pages/becomeAseller/Confirmation";
import AddnewItem from "../DashBoard/SellerDashboard/AddnewItem";
import Myproducts from "../DashBoard/SellerDashboard/Myproducts";
import ManageProducts from "../DashBoard/AdminDashboard/ManageProducts";
import UserMyCart from "../DashBoard/UserDashboard/UserMyCart";


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
      path:'account',
      element:<UserPrivateRoute><UserAccount/></UserPrivateRoute>,
      children:[
        {path:'carts',
        element:<UserMyCart/> }
      ]
   
    },
    {
      path:'/becomeAseller',
      element:<BecomeAseller/>
    },
    {
      path:'SellerAccount',
      element:<SellerPrivateRoute><SellerAccount/></SellerPrivateRoute>,
      children:[
        {path:'addnewProduct',
      element:<AddnewItem/>},
        {path:'sellerproducts',
      element:<Myproducts/>}
      ]
    },
    {
      path:'AdminAccount',
      element:<PrivateRoute><AdminAccount/></PrivateRoute>,
      children:[
        {path:'ManageUser',
      element:<ManageUser/>},
        {path:'MakeAction',
      element:<MakeAction/>},
        {path:'ManageProducts',
      element:<ManageProducts/>}
      ]
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/register',
      element:<Signup/>
    },
    {
      path:'/Confirmation',
      element:<Confirmation/>
    }
  ]);