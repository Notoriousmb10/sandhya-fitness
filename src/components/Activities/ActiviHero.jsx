import React from "react";
import beachVideo from "../../assets/beachactivities.mp4";
import trainerbg from "../../assets/trainerbg.png";
const ActiviHero = () => {
  return (
    <div
      className="rounded-3xl md-plus:flex md-plus:justify-between md-plus:p-6 border-2 border-red-200"
      style={{
        backgroundImage: `url(${trainerbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="flex flex-col gap-10
      font-palanquin  md-plus:justify-evenly md-plus:items-center pb-6"
      >
        <h1 className="text-3xl text-center md-plus:max-w-sm  md-plus:text-4xl mt-4 font-bold">
          Energizing Beach <span className="text-coral-red">Workouts!</span>
        </h1>
        <p className="text-sm md:mx-auto text-center md-plus:text-lg md-plus:max-w-lg  font-montserrat ">
          Join our refreshing sunrise workout at Gorai Beach! Start your day at
          6:30 AM with an energizing mix of cardio and strength training, all
          set against the stunning backdrop of the rising sun and the soothing
          sounds of the waves. Perfect for all fitness levels!
        </p>
      </div>
      <div className="p-2 md-plus:h-80 object-contain flex md-plus:justify-center ">
        <video
          className="rounded-3xl "
          src={beachVideo}
          autoPlay
          muted
          loop
        ></video>
      </div>
    </div>
  );
};

export default ActiviHero;
