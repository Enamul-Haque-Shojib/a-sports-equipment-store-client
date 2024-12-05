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
        <div>
            <Helmet>
        <title>Register Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Photo URL"
                                name="photoURL"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    name="password"
                                    className="input input-bordered w-full pr-10"
                                    required
                                />
                                <span
                                    className="absolute inset-y-0 right-2 flex items-center cursor-pointer"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                    {showPassword ? (
                                        <FaEyeSlash className="text-gray-500" />
                                    ) : (
                                        <FaEye className="text-gray-500" />
                                    )}
                                </span>
                            </div>
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover">
                                    Already have an Account?
                                </Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;