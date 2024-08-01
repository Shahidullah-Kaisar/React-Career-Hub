import React from "react";

const Banner = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-5xl mt-12 mb-3 text-green-500">This is Me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, dolore!
        </p>

        <div className="hero min-h-screen bg-transparent">
        <div className="hero-content flex-col lg:flex-row-reverse gap-40">
          <div className="">
            <img
            src="https://i.ibb.co/W0qCQW4/men.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          
          <div className="">
            <h1 className="text-5xl text-green-500 font-bold">Find the best Website jobs</h1>
            <p className="py-6 text-gray-400">
              It takes just one job to develop a successful relationship that can propel your career forward.
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn text-white px-20 bg-green-600 hover:bg-green-700 outline-none duration-500 text-3xl mt-10">Hire Me</button>
          </div>

          
        </div>
      </div>
      </div>
    </>
  );
};

export default Banner;
