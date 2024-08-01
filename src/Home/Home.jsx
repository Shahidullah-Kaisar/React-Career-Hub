import React, { useEffect, useState } from "react";
import CategorList from "../CategoryList/CategorList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";


const Home = () => {

    const loadData = useLoaderData()
    
    const [jobs, setJobs] = useState(loadData)

    // useEffect(() => {
    //     fetch('http://localhost:5000/addJob')
    //     .then(res => res.json())
    //     .then(data => setJobs(data))
    // },[])

  return (
    <>
        <Banner></Banner>
        <div>
          <div className="text-center">
            <h1 className="text-5xl mb-3 mt-8 text-green-500">Job Category List</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, odio.
            </p>
          </div>
          <div className="md:grid grid-cols-3 gap-4 mt-8 mb-20">
            {
              jobs.slice(0,6).map(loop => <CategorList job={loop}></CategorList>)
            }
          </div>
          
        </div>
        
        <FeaturedJobs jobs={jobs}></FeaturedJobs>
    </>
  );
};

export default Home;
