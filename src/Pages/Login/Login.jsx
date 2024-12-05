import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const {signInUser, signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin =(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
        .then(result =>{
            // console.log(result.user);
            toast.success('Login successfully!')
            e.target.reset();
            navigate('/');
        })
        .catch(error =>{
            // console.log('ERROR',error.message);
        })
    }
    const handleSignInWithGoogle =()=>{
        signInWithGoogle()
        .then(result =>{
            
            navigate('/');
        })
        .catch(error =>{
            // console.log('ERROR',error.message);
        })
    }
    
    return (
      <div>
        <Helmet>
        <title>Login Page</title>
        
      </Helmet>
         <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
          <label className="label">
            <Link to="/forgotpassword" className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
          <label className="label">
            <Link to='/register' className="label-text-alt link link-hover">Create New Account</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <button onClick={handleSignInWithGoogle} className='btn'>Google</button>
    </div>
  </div>
</div>
      </div>
       
    );
};

export default Login;