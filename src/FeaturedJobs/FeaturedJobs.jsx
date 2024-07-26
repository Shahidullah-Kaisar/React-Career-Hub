import React, { useState } from 'react';
import Job from "../Job/Job";

const FeaturedJobs = ({jobs}) => {

    const [dataLength, setDataLength] = useState(4);
    const [show, setShow] = useState(false)
    
    const toggle = () =>{
        if (show) {
            setDataLength(4);
          }
        else {
            setDataLength(jobs.length);
          }
          setShow(!show);
        };
    
    return (
        <>
            <div className='text-center mb-10'>
                <h1 className='text-5xl'>Featured Jobs</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, laudantium?</p>
            </div>
            <div className='grid grid-cols-2 gap-10'>
                {
                    jobs.slice(0, dataLength).map(loop => <Job key={loop.id} job={loop}></Job>)
                }
            </div>
            <div className="flex justify-center m-8">
                <button className="text-4xl bg-green-500 p-5 px-12 rounded-xl hover:bg-green-400 duration-300" onClick={toggle}>{show ? "Show Less" : "Show All"}</button>
            </div>

        </>
    );
};

export default FeaturedJobs;