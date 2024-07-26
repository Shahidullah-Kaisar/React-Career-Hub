import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <div className='text-center text-5xl mt-60'>
                <h1>No Page</h1>
            <button className='bg-red-600 p-8 rounded-xl mt-8'><Link>Go Back to Home</Link></button>
            </div>  
        </>
    );
};

export default Error;