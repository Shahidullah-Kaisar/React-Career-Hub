import React from "react";
import { useLoaderData } from "react-router-dom";
import Job2 from "../job2/Job2";

const Jobs = () => {
  const job2 = useLoaderData();

  return (
    <>
      
      <div className="flex justify-between max-w-2xl mx-auto text-3xl mt-6 mb-8 text-green-500">
        <h1>Company</h1>
        <h1>Job Name</h1>
        <h1>Location</h1>
      </div>  

      <div>
        {job2.map((loop) => (
          <Job2 key={loop._id} job2={loop}></Job2>
        ))}
      </div>
    </>
  );
};

export default Jobs;
