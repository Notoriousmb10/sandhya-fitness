import React from "react";
import dumbell from "../../assets/dumbell.png";

const Hero = () => {
  return (
    <div
      className="flex flex-col md:flex-row md:justify-between 
    min-w-md max-sm:text-center py-16"
    >
      <div>
        <div>
          <h1 className="text-4xl max-md:text-center font-poppins font-bold mb-10">
            One Step Closer To <br />
            <span className="text-coral-red md-plus:text-6xl text-5xl">Greatness!</span>{" "}
          </h1>
          <p className="text-base w-full max-sm:text-center font-montserrat md:max-w-sm pb-10 ">
            At <span className="italic font-bold">Sandhya Fitness</span>, we
            believe in the power of transformation. Our state-of-the-art
            facilities and expert trainers are dedicated to helping you achieve
            your fitness goals and elevate your life. Join us today and take the
            first step towards a healthier, stronger you.
          </p>
        </div>
        <div>
          <button className="text-white active:bg-black bg-coral-red border-2 p-2 m-2 rounded-lg">
            Join Now
          </button>
          <button className="text-white active:bg-black bg-coral-red border-2 p-2 m-2 rounded-lg">
            Sneak Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
