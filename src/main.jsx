import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Router.jsx';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './Provider/AuthContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='bg-[rgb(249,243,240)]'>
   <AuthProvider>
    <Toaster />
    <RouterProvider router={router} />
  </AuthProvider>
   </div>
  </React.StrictMode>,
)
