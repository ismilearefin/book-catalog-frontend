import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import App from "../App";
import BookDetails from "../pages/BookDetails";
import AllBooks from "../pages/AllBooks";
import AddNewBook from "../pages/AddNewBook";
import PrivateRoute from "./PrivateRoute";
import EditBook from "../pages/EditBook";


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
            },
            {
                path:'/addNew-book',
                element: <PrivateRoute> <AddNewBook></AddNewBook>
                </PrivateRoute>             
            },
            {
                path:'/edit-book/:id',
                element: <PrivateRoute> <EditBook></EditBook>
                </PrivateRoute>             
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