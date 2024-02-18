import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ to, label }) => {
  return (
    <li className="mt-5 hover:text-red-600">
      <Link to={to}>{label}</Link>
    </li>
  );
};

export default NavItem;
