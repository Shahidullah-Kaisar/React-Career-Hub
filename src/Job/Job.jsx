import React from "react";
import { IoLocationOutline, } from "react-icons/io5";
import { RiMoneyEuroCircleLine } from "react-icons/ri";

const Job = ({ job }) => {
  const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
  return (
    <>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="w-28"
            src={logo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p className="mb-3">{company_name}</p>
          <div>
            <button className="px-5 py-2 border border-green-500 rounded-lg mr-5 font-extrabold">{remote_or_onsite}</button>
            <button className="px-5 py-2 border border-green-500 rounded-lg mr-5 font-extrabold">{job_type}</button>
          </div>
          <div className="flex gap-20 mt-3 mb-3">
            <h1 className="flex gap-1"><IoLocationOutline className="text-2xl"/>{location}</h1>
            <h1 className="flex gap-1"><RiMoneyEuroCircleLine className="text-2xl"/>{salary}</h1>
          </div>
          <div className="card-actions">
            <button className="btn bg-green-500 hover:bg-green-400">Views Details</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Job;
