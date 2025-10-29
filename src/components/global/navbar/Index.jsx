import React from "react";
import Github from "./Github.jsx";
import ThemeToggle from "./ThemeToggle.jsx";
import Logo from "./Logo.jsx";

const Navbar = () => {
  return (
    <div className="h-18 border-2 rounded-2xl mt-4 solid w-full px-4 flex items-center justify-between">
      <div>
        <Logo></Logo>
      </div>
      <div className=" flex items-center justify-center gap-4">
        <Github></Github>
        <ThemeToggle></ThemeToggle>
      </div>
    </div>
  )
}

export default Navbar