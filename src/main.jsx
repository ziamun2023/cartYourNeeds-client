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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div >
   <AuthProvider>
    <Toaster />
    <QueryClientProvider client={queryClient}>

<RouterProvider router={router}></RouterProvider>

    </QueryClientProvider>
   
  </AuthProvider>
   </div>
  </React.StrictMode>,
)
