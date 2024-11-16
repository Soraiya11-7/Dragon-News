import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProviderContext } from '../Provider/AuthProvider';


const Login = () => {
    const navigate = useNavigate();
    const {loginUser} = useContext(AuthProviderContext);
    const [error, setError] = useState({});
    const location = useLocation();
    const handleLogin = (e) => {
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email,password);

        loginUser(email, password)
        .then((result) => {
            // console.log(result.user);
            e.target.reset();
            navigate(location?.state ? location.state : '/');
        })
        .catch((err) => {
            setError({...error, login: err.code})
        });
    }
    return (

         <div className="flex justify-center items-center min-h-screen ">    
          <div className="card bg-base-100 shrink-0 w-[30%] mx-auto shadow-2xl">
                <h1 className="text-3xl font-bold text-center mt-3">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            {
                                error.login && <label className="label text-red-600 text-xs">
                                {error.login}
                            </label>
                            }
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <h2 className='text-center mb-3'>New to this website? <Link to='/auth/register' className='text-blue-400'>Registration Now</Link></h2>
                </div>
            </div>
       
    );
};

export default Login;