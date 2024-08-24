import React from "react";
import { GrYoga } from "react-icons/gr";
import { BiDumbbell } from "react-icons/bi";
import { GiGymBag } from "react-icons/gi";

const OurSide = () => {
  return (
    <div className="flex justify-between items-start flex-row gap-10">
      <div className="max-w-sm py-8">
        <h1 className="text-4xl font-bold leading-2">
          What We <span className="text-coral-red">Offer</span> You
        </h1>
        <p className="py-10 font-thin">All facilities</p>
      </div>
      <div className="flex gap-10 p-4">
        <div className="rounded-tl-2xl border-black hover:shadow-2xl hover:bg-slate-200 flex flex-col gap-6 border-2 h-56 w-56 p-4">
          <GrYoga className="text-5xl" />
          <div className="flex flex-col gap-6 ">
            <h2 className="text-2xl font-medium">CrossFit</h2>
            <p className="font-thin" >We offer Variety Of Training Plans</p>
          </div>
        </div>
        <div className="rounded-tl-2xl border-black hover:shadow-2xl hover:bg-slate-200 flex flex-col gap-6  border-2 h-56 w-56 p-4">
          <BiDumbbell className="text-5xl" />
          <div className="flex flex-col  gap-6">
            <h2 className="text-2xl font-medium">CrossFit</h2>
            <p className="font-thin">We offer Variety Of Training Plans</p>
          </div>
        </div>
        <div className="rounded-tl-2xl border-black hover:shadow-2xl hover:bg-slate-200 flex flex-col gap-6  border-2 h-56 w-56  p-4">
          <GiGymBag className="text-5xl" />
          <div className="flex flex-col  gap-6">
            <h2 className="text-2xl font-medium">CrossFit</h2>
            <p  className="font-thin">We offer Variety Of Training Plans</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSide;
