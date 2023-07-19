import { ReactNode } from "react"
import { useAppSelector } from "../hooks/hook";
import { Navigate, useLocation } from "react-router-dom";

interface IProps{
    children: ReactNode;
}

export default function PrivateRoute({children}:IProps) {
    const {user,isLoading} =  useAppSelector(state=>state.user);
    const {pathname} =useLocation()
    // console.log(pathname);
    if(isLoading){
        return <p>Loading..</p>
    }
    if(!user.email && !isLoading){
        return <Navigate to='/signin' state={{path:pathname}}></Navigate>
    }

  return children;
}
