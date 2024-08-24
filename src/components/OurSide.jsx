import React from "react";
import { GrYoga } from "react-icons/gr";
import { BiDumbbell } from "react-icons/bi";
import { GiGymBag } from "react-icons/gi";

const OurSide = () => {
  return (
    <div className="flex max-md:flex-col">
      <div>
        <h1>
          What We <span className="text-coral-red">Offer</span> You
        </h1>
        <p>All facilities</p>
      </div>
      <div className="">
        <div className="rounded-tl-2xl bg-gray-100 hover:shadow-2xl hover:bg-white cursor-pointer h-56 w-80  p-4">
          <GrYoga className="text-5xl" />
          <div>
            <h2 className="text-2xl font-medium">CrossFit</h2>
            <p className="font-thin">We offer Variety Of Training Plans</p>
          </div>
        </div>

        <div className="rounded-tl-2xl bg-gray-100 hover:shadow-2xl hover:bg-white cursor-pointer h-56 w-80 p-4">
          <BiDumbbell className="text-5xl" />
          <div className="">
            <h2 className="text-2xl font-medium">CrossFit</h2>
            <p className="font-thin">We offer Variety Of Training Plans</p>
          </div>
        </div>

        <div className="rounded-tl-2xl bg-gray-100 hover:shadow-2xl hover:bg-white cursor-pointer h-56 w-80  p-4">
          <GiGymBag className="text-5xl" />
          <div className="">
            <h2 className="text-2xl font-medium">CrossFit</h2>
            <p className="font-thin">We offer Variety Of Training Plans</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSide;
