import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
const Navbar = () => {
  const [mobileMenuShow, setMobileMenuShow] = useState(false);
  const { user ,userSignOut} = useAuth();

  const links = (
    <>
      <NavLink
        to={"/"}
        onClick={() => setMobileMenuShow(false)}
        className={({ isActive }) =>
          `${
            isActive ? "text-blue-500 font-bold" : "text-gray-600"
          } hover:text-blue-500`
        }
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        to={"/rooms"}
        onClick={() => setMobileMenuShow(false)}
        className={({ isActive }) =>
          `${
            isActive ? "text-blue-500 font-bold" : "text-gray-600"
          } hover:text-blue-500`
        }
      >
        <li>Rooms</li>
      </NavLink>
      <NavLink
        to={"/myBookings"}
        onClick={() => setMobileMenuShow(false)}
        className={({ isActive }) =>
          `${
            isActive ? "text-blue-500 font-bold" : "text-gray-600"
          } hover:text-blue-500`
        }
      >
        <li>My Bookings</li>
      </NavLink>
    </>
  );
  const handlerLogout = () => {
    userSignOut()
    .then(()=>{
      toast.success("Logout Successfully");
    })
    .catch((err)=>{
      toast.error(err.code);
    })
  };
  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto my-5">
      <div className="flex justify-between items-center">
        <div
          onClick={() => setMobileMenuShow((prev) => !prev)}
          className="md:hidden cursor-pointer"
        >
          <RxHamburgerMenu size={25} />
        </div>
        <div className="flex justify-center items-center gap-2">
          <figure>
            <img className="w-10" src={logo} alt="" />
          </figure>
          <Link to={"/"}>
            <h3 className="text-2xl font-bold text-blue-500">
              Booking.<span>Com</span>
            </h3>
          </Link>
        </div>

        <ul className="hidden md:flex items-center mr-30 gap-4 ">{links}</ul>

        {user ? (
          <div className="dropdown dropdown-end ">
            <div tabIndex={0} role="button">
              <div className="avatar avatar-online">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-5 shadow-sm border-blue-200 border"
            >
              <p className="text-center my-2">{user.displayName}</p>
              <button
                onClick={handlerLogout}
                className="btn text-white bg-red-500"
              >
                Log Out
              </button>
            </ul>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link to={"/register"}>
              <p className="bg-blue-500 py-2 px-4 rounded-full text-white font-semibold hover:bg-blue-700">
                Register
              </p>
            </Link>
            <Link to={"/login"}>
              <p className="bg-blue-500 py-2 px-4 rounded-full text-white font-semibold hover:bg-blue-700">
                Log in
              </p>
            </Link>
          </div>
        )}
      </div>
      {/* Mobile device */}

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out transform origin-top ${
          mobileMenuShow
            ? "max-h-96 scale-y-100 opacity-100"
            : "max-h-0 scale-y-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-1 *:border-b-2 *:border-gray-600 *:pb-1">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
