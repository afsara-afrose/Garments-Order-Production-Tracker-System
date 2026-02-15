import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import AllProducts from "../Pages/AllProducts/AllProducts";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Authentication from "../Layout/Authentication";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
        {
            path:'/',
            Component:Home, 
        },
        {
            path:'/all-product',
            Component:AllProducts,
        },
        {
            path:'about-us',
            Component:AboutUs
        }
    ]
  },
  {
    path:'/',
    element:<Authentication></Authentication>,
    children:[
       {
         path:'/login',
        Component:Login,
       },
       {
        path:'/register',
        Component:Register
       }
    ]

  },
]);