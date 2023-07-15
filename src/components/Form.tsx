import {Link} from 'react-router-dom';

interface Ifrom {
    text: string;
    input?: boolean
}

export default function Form({text,input}:Ifrom) {
     
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              {
                input &&
                <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  placeholder="username"
                  className="input input-bordered"
                />
              </div>
              }
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
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
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">{text}</button>
              </div>
                <div className='flex justify-between'>
                <label className="label">
                  <Link to='/' className="label-text-alt link link-hover">
                    Back To Home
                  </Link>
                </label>
                {
                    input ? 
                    <label className="label">
                  <Link to='/signin' className="label-text-alt link link-hover">
                    Already have an account
                  </Link>
                   </label>
                   :
                    <label className="label">
                  <Link to='/signup' className="label-text-alt link link-hover">
                    Create new account
                  </Link>
                   </label>
                }
                </div>
            </div>
          </div>
        
      </div>
    </div>
  );
}
