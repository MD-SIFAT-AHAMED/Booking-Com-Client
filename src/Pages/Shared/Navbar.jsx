import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  const [mobileMenuShow, setMobileMenuShow] = useState(false);

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

        <ul className="hidden md:flex items-center  gap-4 ">{links}</ul>

        <div className="hidden md:flex items-center gap-2">
          <Link>
            <p className="bg-blue-500 py-2 px-4 rounded-full text-white font-semibold hover:bg-blue-700">
              Register
            </p>
          </Link>
          <Link>
            <p className="bg-blue-500 py-2 px-4 rounded-full text-white font-semibold hover:bg-blue-700">
              Login
            </p>
          </Link>
        </div>
        <div className="md:hidden"></div>
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
