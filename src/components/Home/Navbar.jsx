import { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import Logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import { SidebarContext } from "../Context/SidebarContext.jsx";

const Navbar = () => {

  const {toggleSidebar} = useContext(SidebarContext)


  return (
    <div className="flex justify-between items-center px-20 py-3">
      <div className="flex-shrink-0">
        <img src={Logo} height={120} width={120} alt="" />
      </div>
      <div className="hidden lg:block">
        <Link to="/" className="lg:m-8">
          Home
        </Link>
        <Link to="/trainers" className="lg:m-8">
          Trainer
        </Link>
        <Link to="/activities" className="lg:m-8">
          Activities
        </Link>
        <Link to="/pricing" className="lg:m-8">
          Pricing
        </Link>
        <Link to="/transformations" className="lg:m-8">
          Transformations
        </Link>
      </div>
      <div className="flex gap-10 text-2xl">
        <CiSearch />
        <BsCart3 />
        <MdMenu className="hidden max-md:block" onClick={toggleSidebar} />
      </div>
    </div>
  );
};

export default Navbar;
