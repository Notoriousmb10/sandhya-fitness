import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import Logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-10">
      <div className="flex-shrink-0">
        <img src={Logo} height={120} width={120} alt="" />
      </div>
      <div className="hidden lg:block">
        <button className=" lg:m-8">Home</button>
        <button className=" lg:m-8">Trainer</button>
        <button className=" lg:m-8">Programs</button>
        <button className=" lg:m-8">Pricing</button>
        <button className=" lg:m-8">Blogs</button>
      </div>
      <div className="flex gap-10 text-2xl">
        <CiSearch />
        <BsCart3 />
        <MdMenu className="hidden max-md:block" />
      </div>
      {/* <div>
        <button>Login</button>
      </div> */}
    </div>
  );
};

export default Navbar;
