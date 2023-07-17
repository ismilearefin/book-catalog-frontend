import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import App from "../App";
import BookDetails from "../pages/BookDetails";
import AllBooks from "../pages/AllBooks";


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
                path:'/allbooks',
                element:<AllBooks></AllBooks>
            },
            {
                path:'/book/:id',
                element:<BookDetails></BookDetails>
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