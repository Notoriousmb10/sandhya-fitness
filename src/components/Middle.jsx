// import React from 'react'
import Model from "../assets/model3.jpg";

const Middle = () => {
  return (
    <div className="bg-slate-300 flex flex-col sm:flex-row justify-between p-10 ">
      <div>
        <img src={Model} alt="" className="h-96" />
      </div>
      <div>
        <h1></h1>
        <p className="w-full max-w-full sm:max-w-sm">
          At Sandhya Fitness, we believe in the power of dedication, discipline,
          and determination. Our expert trainers and state-of-the-art facilities
          are designed to help you achieve your fitness goals, whether you're a
          beginner or a seasoned athlete. Join us and become part of a community
          that values strength, wellness, and holistic growth. Your journey to a
          healthier, stronger you starts here.
        </p>
        <button>View</button>
      </div>
    </div>
  );
};

export default Middle;
