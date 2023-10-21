import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Router/AuthProvider.jsx';
import Root from './Layout/Root';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AddProduct from './Pages/AddProduct';
import MyCart from './Pages/MyCart';
import PrivateRoute from './Router/PrivateRoute';
import Product from './Pages/Product/Product';
import Update from './Pages/Update/Update';
import Details from './Pages/Details/Details';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/addproduct',
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path:'/mycart',
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: ()=> fetch('http://localhost:5000/users')
      },
      {
        path:'/products/:brand',
        element: <Product></Product>,
        loader: ({params}) => fetch(`http://localhost:5000/brand/${params.brand}`)
      },
      {
        path:'/update/:id',
        element:<PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/brandadd/${params.id}`)
      },
      {
        path:'/detail/:id',
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/brandadd/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
