import {useContext} from "react";
import { SidebarContext } from "../Context/SidebarContext";
import { Link } from "react-router-dom";

const MenuBar = () => {
    const {isSidebarVisible, setSideBarVisibility} = useContext(SidebarContext)
  return (
    <div className={`fixed top-10  my-20 p-6 px-24 font-palanquin font-extrabold
     rounded-3xl flex flex-col text-center  gap-6 bg-orange-400  ${isSidebarVisible? 'text-white': 'hidden'}`}>
      <Link to='/' onClick={!setSideBarVisibility} className=" uppercase rounded-lg p-2 active:bg-slate-700">
        Home
      </Link>
      <Link to='/trainers'  onClick={!setSideBarVisibility} className=" uppercase rounded-lg p-2 active:bg-slate-700">
        Trainers
      </Link>
      <Link to='/programs' onClick={!setSideBarVisibility} className=" uppercase rounded-lg p-2 active:bg-slate-700">
        Programs
      </Link>
      <Link to='/pricing' onClick={!setSideBarVisibility} className=" uppercase rounded-lg p-2 active:bg-slate-700">
        Pricing
      </Link>
      <Link to='/transformations' onClick={!setSideBarVisibility} className=" uppercase rounded-lg p-2 active:bg-slate-700">
        Transformations
      </Link>
    </div>
  );
};

export default MenuBar;
