import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import App from "../App";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <App></App>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/book',
                element:<h1>All Single Book info</h1>
            }
        ]
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