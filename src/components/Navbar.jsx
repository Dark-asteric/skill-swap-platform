import { use } from 'react'
import { NavLink, Link } from 'react-router'
import 'animate.css';
import { AuthContext } from '../provider/AuthProvider';
const Navbar = () => {
    const { user, logOut } = use(AuthContext);

    const handleLogout = () => {
        console.log("Logout successfull.")
        logOut().then(() => {

        })
        .catch(error => {
            alert("Log out failed.", error.message)
        })
    }
    const links = <>
        <li className='text-xl'><NavLink to="/">Home</NavLink> </li>
        <li className='text-xl'><NavLink to="/skills">Skills</NavLink> </li>
        <li className='text-xl'><NavLink to="/contact">Contact us</NavLink> </li>
        <li className='text-xl'><NavLink to="/about">About us</NavLink> </li>
        {user && <li className='text-xl'><NavLink to="/profile">My Profile</NavLink> </li>}
    </>
    
    return (
        <div className="navbar bg-base-400 shadow-md backdrop-blur-md px-10 fixed top-0 left-0 right-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl animate__hinge">Skillswap</Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            {
                user ? <div className="navbar-end gap-3"> <Link to='/profile'><img className='w-12 h-12 border border-purple-600 p-2 rounded-full hover:cursor-pointer' src={user.photoURL} alt="" /></Link> <button onClick={handleLogout} className="btn rounded-2xl text-white bg-purple-600 hover:bg-purple-500">Logout</button> </div>: <div className="navbar-end gap-3">
                    <Link to='/auth/login' className="btn rounded-2xl">Login</Link>
                    <Link to='/auth/register' className="btn rounded-2xl text-white bg-purple-600 hover:bg-purple-500">Register</Link>
                </div>
            }
        </div>
    )
}

export default Navbar