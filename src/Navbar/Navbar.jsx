import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import { GrWebcam } from "react-icons/gr";
import './Navbar.css'
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const link = <>
        <div className="flex  flex-col text-[17px] lg:flex-row" id="sidebar">
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
        </div>

    </>

    const handleLogout = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <div className="navbar h-24 bg-base-100 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <p className="text-[#FF8343] text-3xl md:text-6xl flex items-center gap-2 font-bold"> <GrWebcam className="text-3xl md:text-5xl text-blue-600" />Prodecta</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-2xl font-bold menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <div className="mr-4 hidden md:inline font-semibold text-green-600">
                        <p>Welcome</p>
                        <p className="text-orange-600">{user?.displayName}</p>

                    </div>
                }
                {
                    user ? <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 px-3 text-xl md:p-3 md:px-6 md:text-2xl"
                        onClick={handleLogout}>Logout</button> : <Link to={'/login'} className="bg-blue-600 hover:bg-blue-700 text-white p-2 px-3 text-xl md:p-3 md:px-6 md:text-2xl">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;