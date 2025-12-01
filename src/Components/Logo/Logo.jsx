import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
const Logo = () => {
  return (
    <div className="flex items-end">
      <img src={logo} alt="" />
      <Link to="/">
        <h1 className="-ml-4 font-bold text-3xl">ZapShift</h1>
      </Link>
    </div>
  );
};

export default Logo;
