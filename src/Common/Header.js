import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { nav } from "../Data/data.js";
import NavItem from "../Components/NavItem.js";
import Icons from "../Components/Icons.js";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const ToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div
      className={
        menuOpen ? "" : "w-full bg-white sticky top-0 z-1 drop-shadow-lg"
      }
    >
      <div className="flex justify-between p-2 pl-2 pr-4 items-center flex-wrap ">
        <div className="sm:hidden">
          {menuOpen ? "" : <FaBars onClick={ToggleMenu} />}
        </div>
        <div>
          <Link to="/" className="font-bold text-2xl">
            Vamsi<span className="text-yellow-500">Cart</span>
          </Link>
        </div>
        <div
          className={`${
            menuOpen ? "transform translate-x-0" : "transform -translate-x-full"
          } bg-white-300 inset-y-0 drop-shadow-lg fixed left-0 w-64 overflow-y-auto transition-transform ease-in-out duration-400`}
          style={{ zIndex: 3 }}
        >
          <FaTimes onClick={ToggleMenu} className=" absolute top-3 right-3" />
          <ul className="flex flex-col p-4 m-8 font-bold">
            {nav.map((item, key) => {
              return (
                <div className="md-4">
                  <NavItem key={key} to={item.path} label={item.text} />
                </div>
              );
            })}
          </ul>
        </div>
        <div className="hidden sm:flex">
          <ul className="flex uppercase font-semibold gap-5 justify-center items-center">
            {nav.map((item, key) => {
              return (
                <div className="md-4">
                  <NavItem key={key} to={item.path} label={item.text} />
                </div>
              );
            })}
          </ul>
        </div>
        <div>
          <Icons />
        </div>
      </div>
    </div>
  );
};

export default Header;
