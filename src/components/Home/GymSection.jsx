import {useState} from "react";
import GoraiGym from "../../assets/GoraiGym.png";
import MahavirNagarGym from "../../assets/MahavirNagarGym.png";

const GymSection = () => {
    function gmap(url){
       window.open(url, '_blank')
    }


  return (
    <>
      <h1 className="text-center text-3xl font-bold font-palanquin mb-10">Our <span className="text-coral-red">Branches</span></h1>
      <div className="flex flex-col md-plus:flex-row md-plus:justify-evenly md-plus:items-center gap-20 ">
        <div
          className="relative rounded-s-2xl h-[300px] md-plus:h-[500px] md-plus:w-[500px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${GoraiGym})`,
            // Adjust height as needed
          }}
        >
          <div
            className="max-md:absolute md-plus:gap-72 inset-0 flex flex-col 
           justify-between items-center text-white p-4"
          >
            <div className=" bg-orange-50 rounded-sm px-2 w-max ">
              <h1 className="text-2xl font-bold text-coral-red ">Gorai</h1>
            </div>
            <div className="bg-orange-50 text-black p-2 rounded-sm">
              <button onClick={()=> gmap("https://maps.app.goo.gl/YTvDrS3B2QgdZQPq6")}>Get There</button>
            </div>
          </div>
        </div>
        <div
          className="relative rounded-e-2xl bg-cover  h-[300px] md-plus:h-[500px] md-plus:w-[500px] bg-center"
          style={{
            backgroundImage: `url(${MahavirNagarGym})`,
            // Adjust height as needed
          }}
        >
          <div
            className="max-md:absolute inset-0 flex flex-col 
          justify-between items-center md-plus:gap-72 text-white text-right p-4"
          >
            <div className=" bg-orange-50 rounded-sm px-2 w-max ">
              <h1 className="text-2xl font-bold text-coral-red">
                {" "}
                SaiBaba Nagar
              </h1>
            </div>
            <div className="bg-orange-50 text-black p-2 rounded-sm">
              <button onClick={()=> gmap('https://maps.app.goo.gl/8Tz8JuFLRVZHuQ6F9')}>Get There</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GymSection;
