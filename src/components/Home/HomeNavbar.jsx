import { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import Logo from "../../assets/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { SidebarContext } from "../Context/SidebarContext.jsx";

const Navbar = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  const navigate = useNavigate();

  const navigateToLogin = ()=> {
    navigate('/login')
  }

  return (
    <div className="flex justify-between items-center md-plus:px-20 px-10 py-3">
      <div className="flex-shrink-0">
        <img src={Logo} height={120} width={120} alt="" />
      </div>
      <div className="hidden  lg:block">
        <Link to="/" className="lg:m-8 underline-effect ">
          Home
        </Link>
        <Link to="/trainers" className="lg:m-8 underline-effect">
          Trainer
        </Link>
        <Link to="/activities" className="lg:m-8 underline-effect">
          Activities
        </Link>
        <Link to="/pricing" className="lg:m-8 underline-effect md-plus:text-white">
          Pricing
        </Link>
        <Link to="/transformations" className="lg:m-8 underline-effect md-plus:text-white">
          Transformations
        </Link>
      </div>


      <div className="flex items-center gap-6 text-2xl">
        <div className="p-2 rounded-full cursor-pointer md-plus:text-white md-plus:font-bold active:bg-slate-400 transition-colors duration-2000">
          <CiSearch />
        </div>
        <div className="p-2 rounded-full cursor-pointer md-plus:text-white md-plus:font-bold active:bg-slate-400 transition-colors duration-2000">
          <BsCart3 />
        </div>
        <button
          className="font-thin text-sm border-2 border-black transition-colors duration-2000  px-4 rounded-md 
        active:text-white active:bg-black bg-coral-red py-1 text-slate-100"
        onClick={navigateToLogin}>
          Login
        </button>
        <MdMenu className="hidden cursor-pointer max-md:block" onClick={toggleSidebar} />
      </div>
    </div>
  );
};

export default Navbar;
