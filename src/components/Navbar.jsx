import { Link, NavLink } from "react-router";
import Logo from "./Logo";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handelLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Logged Out",
          text: "You have been successfully logged out.",
          icon: "success",
          confirmButtonColor: "#033133",
        });
      })
      .catch((error) => {
        console.log(error);

        Swal.fire({
          title: "Error",
          text: "Something went wrong. Please try again.",
          icon: "error",
          confirmButtonColor: "#033133",
        });
      });
  };
  const links = (
    <>
      <li className="mr-2">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-black text-[#C2EA36]" : ""
          }
          to="/services"
        >
          Services
        </NavLink>
      </li>
      <li className="mr-2">
        <NavLink
          to="/coverage"
          className={({ isActive }) =>
            isActive ? "bg-black text-[#C2EA36]" : ""
          }
        >
          Coverage
        </NavLink>
      </li>
      <li className="mr-2">
        <NavLink
          to="/sendAParcel"
          className={({ isActive }) =>
            isActive ? "bg-black text-[#C2EA36]" : ""
          }
        >
          Send A Parcel
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="btn btn-ghost text-xl">
          <Logo></Logo>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex items-center gap-3 sm:gap-4">
        {user ? (
          <div className="navbar-end flex items-center gap-3 sm:gap-4">
            <button
              onClick={handelLogOut}
              className="px-4 py-2 border border-red-200 text-red-600 hover:bg-red-50 font-bold text-xs sm:text-sm rounded-xl transition-all duration-200 shadow-sm cursor-pointer"
            >
              LogOut
            </button>
          </div>
        ) : (
          <div className="navbar-end flex items-center gap-3 sm:gap-4">
            <Link
              to="/signin"
              className="px-4 sm:px-6 py-2 sm:py-2.5 border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 font-medium text-xs sm:text-sm rounded-[12px] sm:rounded-[14px] transition-all duration-200 shadow-sm"
            >
              Sign In
            </Link>

            <Link
              to="/signup"
              className="inline-flex items-center gap-2 bg-[#C2EA36] hover:bg-[#b3d92b] text-[#033133] font-bold text-xs sm:text-sm pl-4 sm:pl-5 pr-1.5 py-1.5 rounded-[14px] sm:rounded-[16px] transition-all duration-200 group shadow-sm"
            >
              <span>Sign Up</span>

              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform -rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
