import React from 'react';
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
    return (
        <div>
            <Helmet>
        <title>Error Page</title>
        
      </Helmet>
            <h1 className='text-6xl text-center my-[100px] text-red-500'>404 page !!!</h1>
        </div>
    );
};

export default ErrorPage;