import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AppliedJob = () => {
   const jobs = useLoaderData();
   console.log(jobs);
    return (
        <div>
            <h1>Applied{jobs.length}</h1>
            <h1>name:{jobs.name}</h1>
        </div>
    );
};

export default AppliedJob;