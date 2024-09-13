import { useContext, useState, useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa"; // Import the arrow icon
import Logo from "../../assets/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { SidebarContext } from "../Context/SidebarContext";
import { UserContext } from "../Context/UserContext";

const Navbar = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navigateToLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between items-center md-plus:px-20 px-10 py-3">
      <div className="flex-shrink-0">
        <img src={Logo} height={120} width={120} alt="Logo" />
      </div>
      <div className="hidden lg:block lg:ml-16">
        <Link to="/" className="lg:m-8 underline-effect">
          Home
        </Link>
        <Link to="/trainers" className="lg:m-8 underline-effect">
          Trainer
        </Link>
        <Link to="/activities" className="lg:m-8 underline-effect">
          Activities
        </Link>
        <Link
          to="/pricing"
          className="lg:m-8 underline-effect md-plus:text-white"
        >
          Pricing
        </Link>
        <Link
          to="/transformations"
          className="lg:m-8 underline-effect md-plus:text-white"
        >
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
        {user ? (
          <div className="relative flex items-center gap-2" ref={dropdownRef}>
            <button
              className="bg-coral-red  flex hover:bg-red-400 items-center gap-2 p-2 rounded-md"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <img
                src={user.photo}
                alt="User"
                className="w-8 h-8 rounded-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "path/to/fallback-image.jpg";
                }}
              />
              <span className="font-bold text-slate-100 text-sm">
                {user.firstname}
              </span>
              <FaCaretDown className="text-slate-100" /> {/* Arrow icon */}
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-20  w-20 bg-coral-red  rounded-md shadow-lg">
                <button
                  className="block w-full text-left px-4 font-bold py-2 text-sm text-gray-700 hover:bg-red-400"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            className="font-thin text-sm border-2 border-black transition-colors duration-2000 px-4 rounded-md 
            active:text-white active:bg-black bg-coral-red py-1 text-slate-100"
            onClick={navigateToLogin}
          >
            Login
          </button>
        )}
        <div className="border-2 cursor-pointer max-md:block hidden rounded-sm" onClick={toggleSidebar}>
          <MdMenu
            className=" text-white "
            
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
