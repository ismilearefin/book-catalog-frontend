import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { setUser } from "../redux/api/userSlice";

export default function Navbar() {
  const {user} = useAppSelector(state => state.user);
  const dispatch =  useAppDispatch();


  function handleLogOut(){
    signOut(auth)
    .then(()=>{
      dispatch(setUser(null));
    })
  }
  console.log(user.email)
    
  // const user = false;
  
  return (
    <div className="navbar bg-base-100 border-b-2 px-14">
      <div className="flex-1">
        <Link to='/' className="normal-case text-2xl">BOOKS</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link  to="/allbooks">All Books</Link>
          </li>
          {!user.email && (
            <>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </>
          )}
          {user.email && (
            <li>
              <button onClick={handleLogOut}>Log Out</button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
