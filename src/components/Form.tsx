import { Link, useNavigate } from "react-router-dom";
import { createUser, loginUser } from "../redux/api/userSlice";
import {useEffect} from 'react';
import { useAppDispatch, useAppSelector } from "../hooks/hook";

interface Ifrom {
  text: string;
  input?: boolean;
}

export default function Form({ text, input }: Ifrom) {

  const navigate = useNavigate();
const dispatch : any = useAppDispatch()

const {user, isLoading} = useAppSelector(state => state.user)

function handleSignup(e:any){
  e.preventDefault();
  const form = e.target;
  const username = form?.username?.value;
  const email = form.email.value;
  const password = form.password.value;
  
dispatch(createUser({email,password}))
dispatch(loginUser({email,password}))

}


useEffect(()=>{
  if(user.email && !isLoading){
    navigate('/');
  }
  
},[user.email, isLoading])

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
          <form onSubmit={(e)=>handleSignup(e)}>
            {input && (
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  className="input input-bordered"
                />
              </div>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              name="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">{text}</button>
            </div>
            </form>
            <div className="flex justify-between">
              <label className="label">
                <Link to="/" className="label-text-alt link link-hover">
                  Back To Home
                </Link>
              </label>
              {input ? (
                <label className="label">
                  <Link to="/signin" className="label-text-alt link link-hover">
                    Already have an account
                  </Link>
                </label>
              ) : (
                <label className="label">
                  <Link to="/signup" className="label-text-alt link link-hover">
                    Create new account
                  </Link>
                </label>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
