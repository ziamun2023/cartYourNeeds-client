import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Router.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='bg-[rgb(249,243,240)]'>
   <RouterProvider router={router} />
   </div>
  </React.StrictMode>,
)
