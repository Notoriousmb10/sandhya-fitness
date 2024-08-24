import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import Logo  from "../assets/logo.jpg";
 
const Navbar = () => {
  return (
    <div className="">
      <div className="flex-shrink-0">
        <img src={Logo} height={120} width={120} alt="" />
      </div>
      <div className="hidden lg:block max-md:hidden ">
        <button className=" lg:m-3">Home</button>
        <button className=" lg:m-3">Trainer</button>
        <button className=" lg:m-3">Programs</button>
        <button className=" lg:m-3">Pricing</button>
        <button className=" lg:m-3">Blogs</button>
      </div>
      <div className="flex justify-center items-center gap-10 ">
        <CiSearch className="text-2xl" />
        <BsCart3 className="text-2xl" />
        <button className="px-4 py-2 rounded-xl bg-gray-400">Login</button>
      </div>
      <div className="hidden max-md:block text-3xl">
        <MdMenu />
      </div>
    </div>
  );
};

export default Navbar;
