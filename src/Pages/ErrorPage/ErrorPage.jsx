import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <Helmet>
        <title>Error Page</title>
      </Helmet>

      {/* Error Message */}
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-red-500 mb-6">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Oops! Page Not Found</h2>
        <p className="text-lg text-gray-300 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Back to Home Button */}
        <Link
          to="/"
          className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full transition duration-300"
        >
          Back to Home
        </Link>
      </div>

      {/* Illustration */}
      <div className="mt-12">
        <img
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1920.jpg"
          alt="Error Illustration"
          className="max-w-[300px] h-auto "
        />
      </div>
    </div>
  );
};

export default ErrorPage;
