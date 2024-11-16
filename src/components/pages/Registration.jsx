
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthProviderContext } from '../Provider/AuthProvider';
// import { AuthProviderContext } from './AuthContext';

const Registration = () => {
   const navigate = useNavigate();
    const { createUser, setUser, updateUserProfile } = useContext(AuthProviderContext)
    const [error, setError] = useState({});
    const handleRegistration = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        if(name.length < 5){
            setError({...error, name: 'must be the 5 character long'})
            return;
        }
        const image = form.get("image");
        const email = form.get("email");
        const password = form.get("password");
        // console.log({name, email, password, image});

        // const email = form.get("email");
        // const name = e.target.name.value;
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(name, email, password);

        createUser(email, password)
            .then((result) => {
                // console.log(result.user);
                setUser(result.user);
                updateUserProfile({displayName: name, photoURL: image})
                .then(() => {
                    navigate('/');
                })
                .catch((err) => {
                    console.log(err);
                })
                e.target.reset();
               
            })
            .catch((error) => {
                console.log('Error' , error.message);
            });
    }
    return (
        <div className="bg-base-200 min-h-screen flex justify-center items-center">
     
                <div className="card bg-base-100 w-[30%] shrink-0 shadow-2xl ">
                    <h1 className="text-3xl font-bold mt-3 text-center">Registration now!</h1>
                    <form onSubmit={handleRegistration} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                        </div>
                        {
                            error.name && <label className="label text-xs text-red-600">
                            {error.name}
                        </label>
                        }
                         <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" placeholder="image url" name='image' className="input input-bordered" required />
                        </div>
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

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Registration</button>
                        </div>
                    </form>

                    <h2 className='mb-3 text-center'>You have an account? <Link className='text-blue-400' to='/auth/login'>Login Now</Link></h2>
                </div>
            </div>
        
    );
};

export default Registration;