// import React from 'react'
import Model from "../../assets/model3.jpg";

const Middle = () => {
  return (
    <div className=" bg-gray-100 rounded-3xl max-lg:text-center flex justify-between items-center max-lg:flex-col p-10 ">
      <div>
        <img
          src={Model}
          className="rounded-2xl h-96 w-full object-contain hover:shadow-black "
          alt=""
        />
      </div>
      <div className="">
        <h1 className="font-palanquin font-semibold text-4xl my-6">
          Yet To Write
        </h1>
        <p className="font-montserrat  text-sm md:max-w-md max-md:line-clamp-4">
          At Sandhya Fitness, we believe in the power of dedication, discipline,
          and determination. Our expert trainers and state-of-the-art facilities
          are designed to help you achieve your fitness goals, whether you're a
          beginner or a seasoned athlete. Join us and become part of a community
          that values strength, wsellness, and holistic growth. Your journey to
          a healthier, stronger you starts here.
        </p>
        <div className="py-6">
          <button>Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Middle;
