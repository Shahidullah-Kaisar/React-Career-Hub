import React from "react";
import { ImProfile } from "react-icons/im";
import { GiCircularSaw } from "react-icons/gi";
const CategorList = ({job}) => {

    const {title} = job;
    console.log(job)

  return (
    <>
        <div className="card bg-base-100 w-96 shadow-xl">
            <ImProfile className="text-6xl ml-6 mt-5"/>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <p className="flex gap-2 text-green-600"><GiCircularSaw className="text-xl"/>300k-500k people join us</p>
            </div>
        </div>
    </>
  );
};

export default CategorList;
