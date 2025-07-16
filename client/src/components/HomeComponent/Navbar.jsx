import React from "react";
import { NavLink } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../authSlice";
import { FaUserCircle } from "react-icons/fa";
import {assets} from "../../assets/assets"

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-8 py-4 flex items-center justify-between bg-[#0e0f1a] border-b border-white/10">
      <NavLink to="/">
        <div className="flex items-center gap-2">
            <img src={assets.Repointer} alt="" className="w-10 h-10 rounded-full"/>
          <span className="text-lg font-semibold text-white">Repointer</span>
        </div>
      </NavLink>

      <ul className="flex items-center gap-6 text-l">
        <li><NavLink to="/" className="text-white/80 transition duration-100 hover:text-orange-500">Home</NavLink></li>
        <li><NavLink to="/coursespage" className="text-white/80 transition duration-100 hover:text-orange-500">Courses</NavLink></li>
        <li><NavLink to="/dsapage" className="text-white/80 transition duration-100 hover:text-orange-500">DSA Visualizer</NavLink></li>
        <li><NavLink to="/codingpage" className="text-white/80transition duration-100 hover:text-orange-500">Coding Platform</NavLink></li>
      </ul>

      
      <div className="flex-none gap-4  border-orange-500 border-b rounded-2xl bg-[#201714]">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} className="btn btn-ghost text-white/90 hover:text-white transition text-sm flex items-center gap-2">
            <FaUserCircle className="text-xl" />
            {user?.firstName}
          </div>
          <ul className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-[#1c1f2a] rounded-md w-48 border border-white/10 text-white">
            {user?.role === 'admin' && (
              <li><NavLink to="/admin" className="px-4 py-2 hover:bg-white/10 rounded-md transition">Admin Dashboard</NavLink></li>
            )}
            {user?.role === 'user' && (
              <li><NavLink to='/user' className="px-4 py-2 hover:bg-white/10 rounded-md transition">User Dashboard</NavLink></li>
            )}
            <li>
              <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-white/10 rounded-md transition">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

