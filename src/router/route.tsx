import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <Home></Home>
    },
    {
        path:'/signin',
        element:<Signin></Signin>
    },
    {
        path:'/signup',
        element:<Signup></Signup>
    }
])