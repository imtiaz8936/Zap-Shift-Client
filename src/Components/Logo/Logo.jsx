import React from "react";
import logo from "../../assets/logo.png";
const Logo = () => {
  return (
    <div className="flex items-end">
      <img src={logo} alt="" />
      <h1 className="-ml-4 font-bold text-3xl text-white">ZapShift</h1>
    </div>
  );
};

export default Logo;
