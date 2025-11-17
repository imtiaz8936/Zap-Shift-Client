import React from "react";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import Logo from "../../../Components/Logo/Logo";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => `${isActive ? "active-link" : ""}`}
      >
        <li>Services</li>
      </NavLink>
      <NavLink
        to="/coverage"
        className={({ isActive }) => `${isActive ? "active-link" : ""}`}
      >
        <li>Coverage</li>
      </NavLink>
      <NavLink
        to="/about-us"
        className={({ isActive }) => `${isActive ? "active-link" : ""}`}
      >
        <li>About Us</li>
      </NavLink>
      <NavLink
        to="/pricing"
        className={({ isActive }) => `${isActive ? "active-link" : ""}`}
      >
        <li>Pricing</li>
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) => `${isActive ? "active-link" : ""}`}
      >
        <li>Blog</li>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => `${isActive ? "active-link" : ""}`}
      >
        <li>Contact</li>
      </NavLink>
    </>
  );
  return (
    <div className="">
      <div className="navbar middle bg-[#03373d] p-4 rounded-2xl mt-5">
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
              className="menu menu-sm dropdown-content text-white text-[16px] font-semibold bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-3"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <Logo></Logo>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-white text-[16px] font-semibold px-1 space-x-4">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <a className="btn">Sign In</a>
          <div>
            <a className="btn bg-primary">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
