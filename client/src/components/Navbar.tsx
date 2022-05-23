import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/")
    }
    return (
        <>
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Shizzy</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><NavLink className={({isActive}) => isActive ? "bg-base-100 text-red-700": ""}
      to='/'>
          Home
          
          </NavLink></li>
      <li><NavLink className={({isActive}) => isActive ? "bg-base-100 text-red-700": ""}
      to='/about'>
          About
          
          </NavLink></li>
      <li><NavLink className={({isActive}) => isActive ? "bg-base-100 text-red-700": ""}
      to='/shoes'>
          Products
          
          </NavLink></li>
      
    </ul>
  </div>
</div>
        </>
    )

}