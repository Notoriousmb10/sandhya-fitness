import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="min-w-lg  lg:max-w-lg">
        <h1 className="py-10 text-6xl font-bold">
          Strength Starts Here. <br /> Join Us Today!
        </h1>
        <p className="text-base font-thin	 font-palanquin py-2">
          At <span className="bg-coral-red ">Sandhya Fitness</span>, we believe
          in the power of transformation. Our state-of-the-art facilities and
          expert trainers are dedicated to helping you achieve your fitness
          goals and elevate your life. Join us today and take the first step
          towards a healthier, stronger you.
        </p>
        <div className="my-4 flex gap-6 pb-12 ">
          <button className="border-coral-red border-2 p-2 rounded-lg">Join Now</button>
          <button className="border-coral-red border-2 p-2 rounded-lg">Sneak Us</button>
        </div>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Hero;
