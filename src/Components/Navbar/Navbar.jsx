import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Navbar.css'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user, signOutUser } = useContext(AuthContext);

    
    const handleNavField = () => {
        setOpen(!open);
    };

    
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.success('Logged out successfully');
            })
            .catch((error) => {
                toast.error('Failed to log out. Please try again.');
            });
    };

    return (
        <div className="text-black">
            <div className="py-[15px] lg:w-[85%] w-[95%] mx-auto">
                <nav className="lg:flex justify-between items-center w-full">
                    
                    <h1 className="text-2xl font-extrabold">My Next Move</h1>

        
                    <div className="lg:flex lg:flex-row lg:items-center hidden">
                        <NavLink
                            to="/"
                            className="font-[400] mr-[30px]"
                            activeClassName="font-bold text-blue-500"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/allsportsequipments"
                            className="font-[400] mr-[30px]"
                            activeClassName="font-bold text-blue-500"
                        >
                            All Sports Equipments
                        </NavLink>
                        
                        {
                            user ? 
                            <>
                            <NavLink
                            to="/addequipment"
                            className="font-[400] mr-[30px]"
                            activeClassName="font-bold text-blue-500"
                        >
                            Add Equipment
                        </NavLink>
                            <NavLink
                            to="/myequipmentlist"
                            className="font-[400] mr-[30px]"
                            activeClassName="font-bold text-blue-500"
                        >
                            My Equipment List
                        </NavLink>
                            <NavLink
                            to="/dashboard"
                            className="font-[400] mr-[30px]"
                            activeClassName="font-bold text-blue-500"
                        >
                            Dashboard
                        </NavLink>
                        <NavLink
                            to="/profile"
                            className="font-[400] mr-[30px]"
                            activeClassName="font-bold text-blue-500"
                        >
                            My Profile
                        </NavLink>
                            </> 
                            : 
                            <></>
                        }
                        
                    </div>

                    
                    <div className="lg:flex items-center hidden">
                        {user ? (
                            <>
                                <div className="relative group">
                            
                                    <img
                                        src={user.photoURL || 'https://via.placeholder.com/40'}
                                        alt="User"
                                        className="w-10 h-10 rounded-full cursor-pointer"
                                    />
                                
                                    <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100">
                                        {user.displayName}
                                    </span>
                                </div>
                            
                                <button
                                    onClick={handleSignOut}
                                    className="ml-4 py-2 px-4 border rounded-full"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <NavLink
                                    to="/register"
                                    className="py-2 px-4 border rounded-full mr-2"
                                >
                                    Register
                                </NavLink>
                                <NavLink
                                    to="/login"
                                    className="py-2 px-4 border rounded-full"
                                >
                                    Login
                                </NavLink>
                            </>
                        )}
                    </div>

                
                    <button
                        id="nav-open-btn"
                        className={`${open ? 'hidden' : ''} lg:hidden`}
                        onClick={handleNavField}
                    >
                        <i className="fa-solid fa-bars text-xl"></i>
                    </button>
                    <button
                        id="nav-close-btn"
                        className={`${open ? 'block' : ''} hidden lg:hidden`}
                        onClick={handleNavField}
                    >
                        <i className="fa-solid fa-xmark text-xl"></i>
                    </button>
                </nav>

                
                <div
                    id="nav-field"
                    className={`w-[60%] ms-auto flex flex-col justify-center items-center p-[20px] gap-y-3 mt-[10px] bg-white opacity-95 rounded-lg absolute top-14 right-0 border lg:hidden ${
                        open ? '' : 'hidden'
                    }`}
                >
                    <NavLink
                        to="/"
                        className="font-[400] mb-3"
                        activeClassName="font-bold text-blue-500"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/dashboard"
                        className="font-[400] mb-3"
                        activeClassName="font-bold text-blue-500"
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="/profile"
                        className="font-[400] mb-3"
                        activeClassName="font-bold text-blue-500"
                    >
                       My Profile
                    </NavLink>
                    {user ? (
                        <>
                            <div className="flex items-center mb-3">
                                <img
                                    src={user.photoURL || 'https://via.placeholder.com/40'}
                                    alt="User"
                                    className="w-8 h-8 rounded-full"
                                />
                                <span className="ml-2">{user.displayName}</span>
                            </div>
                            <button
                                onClick={handleSignOut}
                                className="py-2 px-4 border rounded-full"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <NavLink
                                to="/register"
                                className="py-2 px-4 border rounded-full mb-3"
                            >
                                Register
                            </NavLink>
                            <NavLink
                                to="/login"
                                className="py-2 px-4 border rounded-full"
                            >
                                Login
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
