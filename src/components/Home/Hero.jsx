import React from "react";
import dumbell from "../../assets/dumbell.png";

const Hero = () => {
  return (
    <div
      className="flex flex-col md:flex-row md:justify-between 
    min-w-md max-sm:text-center"
    >
      <div>
        <div>
          <h1 className="text-4xl font-bold mb-10">
            Journey Towards New You <br />
            Starts Here...
          </h1>
          <p className="text-base w-full max-sm:text-center md:max-w-sm pb-10 ">
            At <span className="underline">Sandhya Fitness</span>, we believe in
            the power of transformation. Our state-of-the-art facilities and
            expert trainers are dedicated to helping you achieve your fitness
            goals and elevate your life. Join us today and take the first step
            towards a healthier, stronger you.
          </p>
        </div>
        <div>
          <button className="border-coral-red border-2 p-2 m-2 rounded-lg">
            Join Now
          </button>
          <button className="border-coral-red border-2 p-2 m-2 rounded-lg">
            Sneak Us
          </button>
        </div>
      </div>
      <div>
        <img src={dumbell} alt="" />
      </div>
    </div>
  );
};

export default Hero;
