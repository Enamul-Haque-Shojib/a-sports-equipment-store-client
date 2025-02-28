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
            toast.error('Email or password invalid');
        })
    }
    const handleSignInWithGoogle =()=>{
        signInWithGoogle()
        .then(result =>{
            
            navigate('/');
        })
        .catch(error =>{
            // console.log('ERROR',error.message);
            toast.error('Invalid Credential');
        })
    }
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
        <Helmet>
          <title>Login Page</title>
        </Helmet>
        <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8">
          <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">Welcome Back!</h1>
          <p className="text-gray-500 text-center mb-8">
            Please login to your account to continue.
          </p>
          <form onSubmit={handleLogin}>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
  
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
  
            
            <div className="mb-4 flex justify-between items-center">
              <Link
                to="/forgotpassword"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
  
          
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>
  
          <div className="mt-6 flex items-center justify-between">
            <hr className="w-1/3 border-gray-300" />
            <span className="text-gray-500 text-sm">or</span>
            <hr className="w-1/3 border-gray-300" />
          </div>
  
        
          <button
            onClick={handleSignInWithGoogle}
            className="mt-6 w-full py-2 border border-gray-300 rounded-lg flex items-center justify-center gap-3 text-gray-600 hover:bg-gray-100 transition duration-300"
          >
            <i className="fa-brands fa-google"></i>
            Sign in with Google
          </button>
  
          
          <p className="text-center mt-6 text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Login;