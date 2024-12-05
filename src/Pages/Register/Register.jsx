import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

    const handleRegister = (e) => {
        e.preventDefault();
        const displayName = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;

        const userData = {user:{name:displayName, email, photoURL}}
        // Password validation
        // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        // if (!passwordRegex.test(password)) {
        //     toast.error(
        //         "Password must contain at least 6 characters, including an uppercase letter and a lowercase letter."
        //     );
        //     return;
        // }

        // Register user
        createUser(email, password)
            .then((result) => {
                const newUser = result.user;
                
                updateUserProfile(newUser, displayName, photoURL)
                    .then(() => {
                        toast.success("Registration successful!");

                        const fetchData = async()=>{
                            const response = await fetch('http://localhost:5000/api/users/create-user',{
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json', 
                                },
                                body: JSON.stringify(userData),
                            });
                            const data = await response.json();
                            console.log(data)
                        }
                        fetchData();




                        e.target.reset();
                        navigate('/');
                    })
                    .catch((error) => {
                        console.error("Error updating profile:", error.message);
                    });
            })
            .catch((error) => {
                console.error("Error creating user:", error.message);
                toast.error("Failed to register. Please try again.");
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
          <Helmet>
            <title>Register Page</title>
          </Helmet>
          <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
            <h1 className="text-3xl font-bold text-center text-green-800 mb-6">
              Create an Account
            </h1>
            <p className="text-gray-500 text-center mb-8">
              Sign up to get started with our platform.
            </p>
            <form onSubmit={handleRegister}>
              {/* Name Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  required
                />
              </div>
    
              {/* Email Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  required
                />
              </div>
    
              {/* Photo URL Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Photo URL (Optional)
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Profile picture URL"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>
    
              {/* Password Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none pr-10"
                    required
                  />
                  <span
                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-gray-500" />
                    ) : (
                      <FaEye className="text-gray-500" />
                    )}
                  </span>
                </div>
              </div>
    
              {/* Register Button */}
              <button
                type="submit"
                className="w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
              >
                Register
              </button>
            </form>
    
            {/* Redirect to Login */}
            <p className="text-center mt-6 text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-green-600 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      );
};

export default Register;