import React from "react";
import { GrYoga } from "react-icons/gr";
import { BiDumbbell } from "react-icons/bi";
import { GiGymBag } from "react-icons/gi";

const OurSide = () => {
  return (
    <div className="flex justify-between max-md:flex-col ">
      <div className="max-md:text-center">
        <h1 className="text-4xl font-bold lg:mt-6 mb-6 font-palanquin">
          What We <br />
          <span className="text-coral-red">Offer</span> You
        </h1>
        <p className="font-montserrat max-md:mb-6">All facilities</p>
      </div>
      <div className="flex max-md:flex-col gap-10 max-md:justify-center max-md:items-center  ">
        <div
          className="rounded-tl-2xl bg-gray-100 hover:shadow-2xl hover:bg-white active:shadow-2xl active:bg-white cursor-pointer
         h-60 max-md:w-80 lg:w-60  p-4"
        >
          <div className="flex items-center gap-4 mb-4">
            <GrYoga className="text-5xl" />
            <h2 className="text-2xl mb-2 font-medium">CrossFit</h2>
          </div>
          <div>
            <p className="font-thin">
              Boost your fitness with high-intensity CrossFit workouts that
              blend strength, cardio, and functional training.
            </p>
          </div>
        </div>

        <div
          className="rounded-tl-2xl bg-gray-100 hover:shadow-2xl hover:bg-white active:shadow-2xl active:bg-white cursor-pointer
         h-60 max-md:w-80 lg:w-60 p-4"
        >
          <div className="flex items-center gap-4 mb-4">
            <BiDumbbell className="text-5xl" />
            <h2 className="text-2xl mb-2 font-medium">Power Training</h2>
          </div>
          <div className="">
            <p className="font-thin">
              Build raw strength with our focused powerlifting sessions,
              emphasizing squats, deadlifts, and bench presses.
            </p>
          </div>
        </div>

        <div
          className="rounded-tl-2xl bg-gray-100 hover:shadow-2xl hover:bg-white active:shadow-2xl active:bg-white cursor-pointer 
        h-60 max-md:w-80 lg:w-60  p-4"
        >
          <div className="flex items-center gap-4 mb-4">
            <GiGymBag className="text-5xl" />
            <h2 className="text-2xl mb-2 font-medium">Cardio</h2>
          </div>
          <div className="">
            <p className="font-thin">
              Elevate your endurance with our high-energy cardio classes,
              designed to boost heart health and burn calories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSide;
