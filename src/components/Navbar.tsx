import { Link } from "react-router-dom";

export default function Navbar() {
    
  const user = false;
  
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
          {!user && (
            <>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </>
          )}
          {user && (
            <li>
              <button>Log Out</button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
