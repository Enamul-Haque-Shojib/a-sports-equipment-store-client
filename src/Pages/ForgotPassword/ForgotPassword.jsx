import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
    const { passwordReset } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleResetPassword = (e) => {
        e.preventDefault();
        const email = e.target.email.value;

        passwordReset(email)
            .then(() => {
                toast.warning('Password Reset Email Sent!');
                e.target.reset();
                navigate('/login');
            })
            .catch(error => {
                console.error('ERROR:', error.message);
            });
    };

    return (
        <div>
            <Helmet>
                <title>Forgot Password</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left max-w-lg">
                        <h1 className="text-4xl font-bold text-black">Reset Your Password</h1>
                        <p className="py-6 text-black">
                            Enter your email address, and we'll send you a link to reset your password. Let's get you back on track!
                        </p>
                    </div>
                    <div className="card w-full max-w-md bg-white shadow-lg rounded-lg">
                        <form onSubmit={handleResetPassword} className="card-body space-y-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700 font-semibold">Email Address</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full focus:ring focus:ring-blue-300"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <button className="btn btn-primary w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white">
                                    Send Reset Link
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
