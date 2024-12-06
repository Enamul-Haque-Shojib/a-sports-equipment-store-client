import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, signOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleNavField = () => {
    setOpen(!open);
  };

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        toast.error("Failed to log out. Please try again.");
      });
  };

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

 

  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg text-white sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wider">
        Sportanicals
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6 items-center">
          <NavLink
            to="/"
            className="transition duration-300 hover:text-yellow-300"
            activeClassName="active"
          >
            Home
          </NavLink>
          <NavLink
            to="/allsportsequipments"
            className="transition duration-300 hover:text-yellow-300"
            activeClassName="active"
          >
            All Sports Equipments
          </NavLink>
          {user && (
            <>
              <NavLink
                to="/addequipment"
                className="transition duration-300 hover:text-yellow-300"
                activeClassName="active"
              >
                Add Equipment
              </NavLink>
              <NavLink
                to="/myequipmentlist"
                className="transition duration-300 hover:text-yellow-300"
                activeClassName="active"
              >
                My Equipment List
              </NavLink>
              <NavLink
                to="/dashboard"
                className="transition duration-300 hover:text-yellow-300"
                activeClassName="active"
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/profile"
                className="transition duration-300 hover:text-yellow-300"
                activeClassName="active"
              >
                My Profile
              </NavLink>
            </>
          )}
          
        </div>

        {/* User Profile or Auth Links */}
        <div className="hidden lg:flex items-center space-x-4">
        <button
          onClick={toggleTheme}
        
          className="hidden lg:block p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md transition duration-300"
        >
          {theme === "light" ? (
            <i className="fas fa-moon text-gray-800"></i>
          ) : (
            <i className="fas fa-sun text-yellow-400"></i>
          )}
        </button>
          {user ? (
            <>
              <div className="relative group">
                
                <img
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
                />
                <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {user.displayName}
                </span>
              </div>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-red-400 hover:bg-red-500 rounded-full transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/register"
                className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full transition duration-300"
              >
                Register
              </NavLink>
              <NavLink
                to="/login"
                className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full transition duration-300"
              >
                Login
              </NavLink>
            </>
          )}
          
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={handleNavField}
        >
          {open ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden bg-white text-black fixed inset-0 transition-transform duration-300 z-40 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <button
            className="text-2xl mb-4"
            onClick={handleNavField}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="space-y-4">
            <NavLink
              to="/"
              className="block text-lg hover:text-indigo-500"
              activeClassName="active"
              onClick={handleNavField}
            >
              Home
            </NavLink>
            <NavLink
              to="/allsportsequipments"
              className="block text-lg hover:text-indigo-500"
              activeClassName="active"
              onClick={handleNavField}
            >
              All Sports Equipments
            </NavLink>
            {user && (
              <>
                <NavLink
                  to="/addequipment"
                  className="block text-lg hover:text-indigo-500"
                  activeClassName="active"
                  onClick={handleNavField}
                >
                  Add Equipment
                </NavLink>
                <NavLink
                  to="/myequipmentlist"
                  className="block text-lg hover:text-indigo-500"
                  activeClassName="active"
                  onClick={handleNavField}
                >
                  My Equipment List
                </NavLink>
                <NavLink
                  to="/dashboard"
                  className="block text-lg hover:text-indigo-500"
                  activeClassName="active"
                  onClick={handleNavField}
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to="/profile"
                  className="block text-lg hover:text-indigo-500"
                  activeClassName="active"
                  onClick={handleNavField}
                >
                  My Profile
                </NavLink>
                <button
                  onClick={handleSignOut}
                  className="block w-full px-4 py-2 text-left text-red-600 hover:bg-red-100"
                >
                  Logout
                </button>
              </>
            )}
            {!user && (
              <>
                <NavLink
                  to="/register"
                  className="block text-lg hover:text-indigo-500"
                  activeClassName="active"
                  onClick={handleNavField}
                >
                  Register
                </NavLink>
                <NavLink
                  to="/login"
                  className="block text-lg hover:text-indigo-500"
                  activeClassName="active"
                  onClick={handleNavField}
                >
                  Login
                </NavLink>
              </>
            )}
            <button
          onClick={toggleTheme}
        
          className="hidden lg:block p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md transition duration-300"
        >
          {theme === "light" ? (
            <i className="fas fa-moon text-gray-800"></i>
          ) : (
            <i className="fas fa-sun text-yellow-400"></i>
          )}
        </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
