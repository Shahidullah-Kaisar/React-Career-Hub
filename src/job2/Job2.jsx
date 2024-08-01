import React from "react";

const Job2 = ({ job2 }) => {
  console.log(job2);

  const { Cname, logo, jobName, location } = job2;

  return (
    <>
      <div className="flex max-w-xl mx-auto justify-between hover:text-purple-500 duration-400">
        <img className="w-10 mb-7" src={logo}/>
        {/* <p>{Cname}</p> */}
        <p className="text-lg">{jobName}</p>
        <p className="text-lg">{location}</p>
      </div>
    </>
  );
};

export default Job2;
