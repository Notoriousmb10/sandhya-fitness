import React from "react";
import { GymTrainers } from "../Content";
import trainerbg from "../../assets/trainerbg.png";

const Coach = () => {
  return (
    <>
      <h1 className="font-palanquin my-4 text-center text-coral-red font-bold text-3xl mb-10">
        Trainers
      </h1>

      <div className="flex max-md:text-center flex-col gap-10">
        {GymTrainers.map((data) => (
          <div
            key={data.id}
            className="rounded-2xl border-2 p-12 px-10 md-plus:flex md-plus:justify-between"
            style={{
              backgroundImage: `url(${trainerbg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="flex max-md:justify-center max-md:items-center mb-6">
              <img
                src={data.img}
                className="max-md:h-72 max-md:w-42 md-plus:h-96 rounded-2xl "
                alt=""
              />
            </div>
            <div className="md-plus:flex md-plus:flex-col md-plus:justify-evenly">
              <h1 className="font-semibold text-2xl font-palanquin mb-4">
                {data.name}
              </h1>
              <p className="font-montserrat mb-4 md-plus:max-w-md">
                {data.text}
              </p>
              <div className="max-md:flex gap-4 flex max-md:justify-center ">
                {data.skills.map((skills) => (
                  <button
                    className="border-2 p-2 px-4 bg-orange-200 rounded-lg hover:text-white 
                  hover:bg-orange-300 font-palanquin"
                  >
                    {skills}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </>
  );
};

export default Coach;
