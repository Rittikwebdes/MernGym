import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
export default function Navbar() {
  const { isAuth, userLogout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const navigate = useNavigate();
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    userLogout();
    navigate("/login");
  };
  const toggleMoreMenu = () => {
    setIsMoreOpen(!isMoreOpen); // Toggle "More..." submenu
  };
  return (
    <>
      <div className="navbar fixed  w-full  text-white p-4  top-0 right-0 left-0 z-50 backdrop-blur-3xl shadow-md shadow-slate-600">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={handleToggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-[-10px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {isOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white text-black font-bold rounded-box z-[1] mt-3 w-52 py-4 shadow-lg"
              >
              
                <li>
                  <Link to="/aboutus" onClick={closeMenu}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/ourservices" onClick={closeMenu}>
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link to="/memberships" onClick={closeMenu}>
                    MEMBERSHIPS
                  </Link>
                </li>
            
                <li className="relative">
                  <div
                    onClick={toggleMoreMenu} // Toggle on click
                    className="cursor-pointer hover:bg-gray-200"
                  >
                    MORE <IoIosArrowDown/>
                  </div>
                  {isMoreOpen && ( // Show submenu if isMoreOpen is true
                    <ul className="absolute left-0 bg-white text-black rounded-lg mt-1 p-2 w-40 shadow">
                    <li>
                  <Link to="/bmi's" onClick={closeMenu}>
                    BMI
                  </Link>
                </li>
                <li>
                  <Link onClick={closeMenu} to="/dietplan">
                    DIET PLAN
                  </Link>
                </li>
                <li>
                  <Link to="/contacts" onClick={closeMenu}>
                    CONTACT
                  </Link>
                </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </div>
          <Link to="/" className=" text-xl md:mx-0 mx-[-30px] ">
            <img src="/logo.png" alt="logo" width={70} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex items-center">
          <ul className="menu menu-horizontal px-1">
     
            <li>
                  <Link to="/aboutus" onClick={closeMenu}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/ourservices" onClick={closeMenu}>
                    Our Services
                  </Link>
                </li>
                <li>
              <Link to="/memberships">MEMBERSHIPS</Link>
            </li>
        
            <li className="relative group">
              <div className=" flex items-center hover:text-gray-300">
                <span>MORE  </span> <IoIosArrowDown/> 
              </div>
              <ul className="absolute left-0 hidden bg-gray-300  text-black rounded-lg mt-10 p-2 w-40 shadow group-hover:block">
              <li>
              <Link to="/bmi's">BMI</Link>
            </li>
            <li>
              <Link to="/dietplan">DIET PLAN</Link>
            </li>
            <li>
              <Link to="/contacts">CONTACT</Link>
            </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {!isAuth && (
            <>
              <Link to="/login">
                <button className="before:ease relative h-12 w-40 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
                  <span className="relative z-10">SIGNIN</span>
                </button>
              </Link>
            </>
          )}
          {isAuth && (
            <>
              <button
                onClick={handleClick}
                className="before:ease relative h-12 w-40 overflow-hidden border border-red-500 bg-red-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:red-green-500 hover:before:-translate-x-40"
              >
                <span className="relative z-10">LOGOUT</span>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
