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
import ManageUser from "../DashBoard/AdminDashboard/ManageUser";
import MakeAction from "../DashBoard/AdminDashboard/MakeAction";
import PrivateRoute from "../private/PrivateRoute";
import SellerPrivateRoute from "../private/SellerPrivateRoute";
import UserPrivateRoute from "../private/UserPrivateRoute";

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
      element:<UserPrivateRoute><UserAccount/></UserPrivateRoute>
    },
    {
      path:'/becomeAseller',
      element:<BecomeAseller/>
    },
    {
      path:'/SellerAccount',
      element:<SellerPrivateRoute><SellerAccount/></SellerPrivateRoute>
    },
    {
      path:'AdminAccount',
      element:<PrivateRoute><AdminAccount/></PrivateRoute>,
      children:[
        {path:'ManageUser',
      element:<ManageUser/>},
        {path:'MakeAction',
      element:<MakeAction/>}
      ]
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